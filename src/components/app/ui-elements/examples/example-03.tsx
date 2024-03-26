import { Avatar, Card, CardBody } from "@nextui-org/react";
import Container from "../container";
import { applyStyle } from "@/utils/color.util";

const items = [
    {
        name: "Jose Perez",
        picture: "assets/img/user.jpeg",
        amount: "4500 USD",
        date: "9/20/2021",
    },
    {
        name: "Jose Perez",
        picture: "assets/img/user.jpeg",
        amount: "4500 USD",
        date: "9/20/2021",
    },
    {
        name: "Jose Perez",
        picture: "assets/img/user.jpeg",
        amount: "4500 USD",
        date: "9/20/2021",
    },
    {
        name: "Jose Perez",
        picture: "assets/img/user.jpeg",
        amount: "4500 USD",
        date: "9/20/2021",
    },
    {
        name: "Jose Perez",
        picture: "assets/img/user.jpeg",
        amount: "4500 USD",
        date: "9/20/2021",
    },
];

function Example03() {
    return (
        <Container className="bg-bgDefault">
            <Card style={applyStyle("bg")} className="rounded-xl shadow-md px-3">
                <CardBody className="py-5 gap-4">
                    <div className="flex gap-2.5 justify-center">
                        <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
                            <span style={applyStyle("color")} className="text-xl font-semibold">
                                Latest Transactions
                            </span>
                        </div>
                    </div>

                    <div style={applyStyle("color")} className="flex flex-col gap-6 ">
                        {items.map((item) => (
                            <div key={item.name} className="grid grid-cols-4 w-full">
                                <div className="w-full">
                                    <Avatar
                                        style={applyStyle("color")}
                                        isBordered
                                        color="default"
                                        src={item.picture}
                                    />
                                </div>

                                <span className="font-semibold">
                                    {item.name}
                                </span>
                                <div>
                                    <span className="text-xs">{item.amount}</span>
                                </div>
                                <div>
                                    <span className="text-xs">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example03;
