import { HeartIcon, NextIcon, PauseCircleIcon, PreviousIcon, RepeatOneIcon, ShuffleIcon } from "@/components/icons/actions";
import { useColor } from "@/hooks";
import { applyStyle, cssFgVar } from "@/utils/color.util";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { useState } from "react";
import Container from "../container";
import { FG_DEFAULT_COLOR } from "@/stores";

function Example07() {

    const { bgRgb } = useColor()
    const [liked, setLiked] = useState(false)

    return (
        <Container className="bg-bgDefault">
            <Card
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
                style={{ ...applyStyle("bg"), ...applyStyle("color") }}
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover shadow-sm-custom"
                                height={200}
                                shadow="md"
                                src="assets/img/Blurryface.webp"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0" style={applyStyle("color")}>
                                    <h3 className="font-semibold">Daily Mix</h3>
                                    <p className="text-small">14 Tracks</p>
                                    <h1 className="text-large font-medium mt-2">Fairly Local</h1>
                                </div>
                                <Button
                                    isIconOnly
                                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                    radius="full"
                                    variant="light"
                                    style={applyStyle("color")}
                                    onPress={() => setLiked((v) => !v)}
                                >
                                    <HeartIcon
                                        className={liked ? "[&>path]:stroke-transparent" : ""}
                                        fill={liked ? "currentColor" : "none"}
                                    />
                                </Button>
                            </div>

                            <div className="flex flex-col mt-3 gap-1">
                                <div className="relative flex items-center select-none touch-none">
                                    <div
                                        className="relative flex-1 rounded-full h-2"
                                        style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
                                    >
                                        <div
                                            className="absolute h-full rounded-full"
                                            style={{
                                                width: "50%",
                                                ...(Boolean(bgRgb) ? { ...applyStyle("bg", { fromVar: cssFgVar, alpha: "1" }) } : { backgroundColor: FG_DEFAULT_COLOR })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between" style={applyStyle("color")}>
                                    <p className="text-small">1:23</p>
                                    <p className="text-small">3:27</p>
                                </div>
                            </div>

                            <div className="flex w-full items-center justify-center">
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                    style={applyStyle("color")}
                                >
                                    <RepeatOneIcon />
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                    style={applyStyle("color")}
                                >
                                    <PreviousIcon />
                                </Button>
                                <Button
                                    isIconOnly
                                    className="w-auto h-auto data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                    style={applyStyle("color")}
                                >
                                    <PauseCircleIcon size={54} />
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                    style={applyStyle("color")}
                                >
                                    <NextIcon />
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-[hover]:bg-foreground/10"
                                    radius="full"
                                    variant="light"
                                    style={applyStyle("color")}
                                >
                                    <ShuffleIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example07;
