import { Avatar, AvatarGroup, Card, CardBody } from "@nextui-org/react";
import Container from "../container";
import { applyStyle } from "@/utils/color.util";

function Example02() {
    return (
        <Container className="bg-bgDefault">
            <Card style={applyStyle("bg")} className="rounded-xl shadow-md px-4 py-6 w-full">
                <CardBody style={applyStyle("color")} className="py-5 gap-6">
                    <div className="flex gap-2.5 justify-center">
                        <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
                            <span className=" text-xl font-semibold">
                                {" "}
                                {"⭐"}Agents
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 flex-col">
                        <span className="text-xs">
                            Meet your agenda and see their ranks to get the best results
                        </span>
                        <AvatarGroup isBordered>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                        </AvatarGroup>
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example02;