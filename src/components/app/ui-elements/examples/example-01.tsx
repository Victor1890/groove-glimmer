import { Card, CardBody } from "@nextui-org/react";
import Container from "../container";
import { Community } from "@/components/icons/community";
import { applyStyle } from "@/utils/color.util";

function Example01() {
    return (
        <Container className="bg-bgDefault">
            <Card style={applyStyle("bg")} className="xl:max-w-xl rounded-xl shadow-md px-3 w-full">
                <CardBody className="py-5">
                    <div className="flex gap-2.5">
                        <Community />
                        <div style={applyStyle("color")} className="flex flex-col">
                            <span className="text-base">Auto Insurance</span>
                            <span className="text-xs">1311 Cars</span>
                        </div>
                    </div>
                    <div style={applyStyle("color")} className="flex gap-2.5 py-2 items-center">
                        <span className="text-xl font-semibold">$45,910</span>
                        <span className="text-success text-xs">+ 4.5%</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div style={applyStyle("color")}>
                            <div>
                                <span className="font-semibold text-success text-xs">{"↓"}</span>
                                <span className="text-xs">100,930</span>
                            </div>
                            <span className="text-xs">USD</span>
                        </div>

                        <div style={applyStyle("color")}>
                            <div>
                                <span className="font-semibold text-danger text-xs">{"↑"}</span>
                                <span className="text-xs">54,120</span>
                            </div>
                            <span className="text-xs">USD</span>
                        </div>

                        <div style={applyStyle("color")}>
                            <div>
                                <span className="font-semibold text-danger text-xs">{"⭐"}</span>
                                <span className="text-xs">125</span>
                            </div>
                            <span className="text-xs">VIP</span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Example01;