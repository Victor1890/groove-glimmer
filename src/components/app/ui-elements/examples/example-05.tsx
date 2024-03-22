import { applyStyle, cssFgVar } from "@/utils/color.util";
import { Card, CardBody } from "@nextui-org/react";
import Container from "../container";

function Example05() {

    return (
        <Container className="bg-bgDefault">
            <Card style={{ ...applyStyle("bg"), ...applyStyle("color") }}>
                <CardBody className="flex flex-col gap-6 p-6 rounded-xl">
                    <p>Server Resources</p>
                    <div>
                        <p className="text-lg font-bold">$30,227.00</p>
                        <p className="text-base mt-2">Estimated savings</p>
                    </div>
                    <div className="relative flex items-center select-none touch-none">
                        <div
                            className="relative flex-1 rounded-full h-2 bg-black"
                            style={applyStyle("bg", { fromVar: cssFgVar, alpha: "0.16" })}
                        >
                            <div
                                className="absolute h-full rounded-full !bg-black"
                                style={{ width: "40%", ...applyStyle("bg", { fromVar: cssFgVar, alpha: "1" }) }}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-lg font-bold">$20,124/mo</p>
                            <p className="text-sm mt-2">Total saved</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">$10,124/mo</p>
                            <p className="text-sm mt-2">Saving in progress</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example05;
