import { regexColorHexadecimal } from "@/constants";

export const resolveValidColor = (color: string, fallback = "#000000") => regexColorHexadecimal.test(color) ? color : fallback
