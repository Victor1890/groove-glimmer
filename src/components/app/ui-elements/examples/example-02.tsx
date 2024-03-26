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
                            {
                                Array.from({ length: 6 }).map((_, index) => (
                                    <Avatar key={`avatar-${index}`} src="assets/img/user.jpeg" />
                                ))
                            }
                        </AvatarGroup>
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example02;