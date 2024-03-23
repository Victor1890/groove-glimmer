import { useColor } from "@/hooks";
import { FG_DEFAULT_COLOR } from "@/stores";
import { applyStyle, cssFgVar } from "@/utils/color.util";
import { Card, CardBody } from "@nextui-org/react";
import Container from "../container";

function Example06() {

    const { bgRgb } = useColor()

    return (
        <Container className="bg-bgDefault">
            <Card style={{ ...applyStyle("bg"), ...applyStyle("color") }}>
                <CardBody className="flex flex-col gap-6 p-6 rounded-xl">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-medium">Project Progress</p>
                        <p className="text-sm">50%</p>
                    </div>
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
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example06;
