import Color from "color";
import chroma, { type Scale } from "chroma-js";
import { uniqWith } from "@/utils/array.util";

import { contrastGuidelines } from "@/libs/wcag-text-contrast";
import { AccessibleColor, ColorScaleOpts } from "./contrast-suggestions.interface";


function isDark(color: string) {
  const luminance = chroma(color).luminance();
  const umbral = 0.2;

  return luminance < umbral;
}

function createColorScale(sourceColor: string, opts?: ColorScaleOpts) {
  const defaultOpts = { range: [0, 500], stepsDistance: 100 } satisfies ColorScaleOpts;
  const { range, startInRange, stopInRange, stepsDistance, direction } = Object.assign(
    defaultOpts,
    opts,
  );
  const [minRange, maxRange] = range;
  const numSteps = Math.ceil(maxRange / stepsDistance);
  let scale: Scale;

  if (direction === "center") {
    const steps = Math.floor(numSteps / 2);

    scale = chroma
      .scale([chroma(sourceColor).brighten(steps), sourceColor, chroma(sourceColor).darken(steps)])
      .domain(range);
  } else {
    scale = !isDark(sourceColor)
      ? chroma.scale([sourceColor, chroma(sourceColor).darken(numSteps)]).domain(range)
      : chroma.scale([sourceColor, chroma(sourceColor).brighten(numSteps)]).domain(range);
  }

  const startRange = startInRange ?? minRange;
  const stopRange = stopInRange ?? maxRange;
  const result: string[] = [];

  for (let i = startRange; i <= stopRange; i += stepsDistance) {
    const color = scale(i).hex();

    result.push(color);
  }

  return result;
}

const createHash = () => Math.random().toString(16).slice(2);

function findAccessibleColors({
  forColor,
  matchingColors,
}: {
  forColor: string;
  matchingColors: string[];
}) {
  const result: AccessibleColor[] = [];

  for (const color of matchingColors) {
    const contrast = Color(forColor).contrast(Color(color));
    const isAccessible = contrast > contrastGuidelines.AALevel.normalText;

    if (isAccessible) result.push({ id: createHash(), color, contrast: contrast.toFixed(2) });
  }

  return result;
}

export function createSuggestions({
  forColor,
  matchingColor,
}: {
  forColor: string;
  matchingColor: string;
}) {
  const colorScale = createColorScale(matchingColor, { direction: "center" });
  let result = findAccessibleColors({ forColor, matchingColors: colorScale });

  if (result.length <= 3) {
    const fallbackScale = createColorScale("#000", {
      direction: "start",
      range: [0, 950],
      startInRange: 50,
    });

    result = [...result, ...findAccessibleColors({ forColor, matchingColors: fallbackScale })];
  }

  return uniqWith(result, (a, b) => a.color === b.color).sort(
    (a, b) => parseFloat(a.contrast) - parseFloat(b.contrast),
  );
}
