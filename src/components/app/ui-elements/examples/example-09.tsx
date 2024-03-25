import { TwentyOnePilotsLogo } from "@/components/icons/navbar";
import { applyStyle, cssFgVar } from "@/utils/color.util";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Container from "../container";

function Example09() {

    return (
        <Container className="bg-bgDefault max-w-full">
            <Card className="p-6" style={applyStyle('bg')}>
                <CardHeader
                    className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                    <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                        <TwentyOnePilotsLogo className="h-6 w-6" />
                    </div>
                    <div>
                        <h6 style={applyStyle('color')} className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed">
                            Bar Chart
                        </h6>
                        <p
                            className="max-w-sm font-normal"
                            style={applyStyle('color')}
                        >
                            Visualize your data in a simple way using the
                            <span className="font-semibold"> react-apexcharts</span> chart plugin.
                        </p>
                    </div>
                </CardHeader>
                <CardBody className="px-2 pb-0" style={applyStyle('color')}>
                    <Chart />
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example09;

function Chart() {
    return (
        <svg className="w-full" fill="none" height="146" viewBox="0 0 348 146" width="348">
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59054"
                style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
                transform="rotate(-90 328.819 145.578)"
                width="145.578"
                x="328.819"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59057"
                style={applyStyle("color", { fromVar: cssFgVar })}
                transform="rotate(-90 328.819 145.578)"
                width="34.7148"
                x="328.819"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.181"
                rx="9.59048"
                style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
                transform="rotate(-90 274.016 145.578)"
                width="145.578"
                x="274.016"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59054"
                style={applyStyle("color", { fromVar: cssFgVar })}
                transform="rotate(-90 274.016 145.578)"
                width="132.14"
                x="274.016"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59053"
                style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
                transform="rotate(-90 219.213 145.578)"
                width="145.578"
                x="219.213"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.181"
                rx="9.59052"
                style={applyStyle("color", { fromVar: cssFgVar })}
                transform="rotate(-90 219.213 145.578)"
                width="100.785"
                x="219.213"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59054"
                style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
                transform="rotate(-90 164.409 145.578)"
                width="145.578"
                x="164.409"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59056"
                style={applyStyle("color", { fromVar: cssFgVar })}
                transform="rotate(-90 164.409 145.578)"
                width="75.0287"
                x="164.409"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59054"
                style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
                transform="rotate(-90 109.606 145.578)"
                width="145.578"
                x="109.606"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59055"
                style={applyStyle("color", { fromVar: cssFgVar })}
                transform="rotate(-90 109.606 145.578)"
                width="119.822"
                x="109.606"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59055"
                style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
                transform="rotate(-90 54.8032 145.578)"
                width="145.578"
                x="54.8032"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59056"
                style={applyStyle("color", { fromVar: cssFgVar })}
                transform="rotate(-90 54.8032 145.578)"
                width="60.4709"
                x="54.8032"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59055"
                style={applyStyle("color", { fromVar: cssFgVar, alpha: "0.16" })}
                transform="rotate(-90 0 145.578)"
                width="145.578"
                y="145.578"
            />
            <rect
                fill="currentColor"
                height="19.1811"
                rx="9.59055"
                style={applyStyle("color", { fromVar: cssFgVar })}
                transform="rotate(-90 0 145.578)"
                width="86.227"
                y="145.578"
            />
        </svg>
    );
}

