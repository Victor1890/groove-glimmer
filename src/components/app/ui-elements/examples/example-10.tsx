import { applyStyle, cssBgVar, cssFgVar } from "@/utils/color.util";
import { Button, Card, CardBody } from "@nextui-org/react";
import Container from "../container";

function Example10() {
    return (
        <Container className="bg-bgDefault max-w-full">
            <Card className="p-6" style={applyStyle('bg')}>
                <CardBody className="flex flex-col rounded-xl text-center gap-10">
                    <p className="text-sm font-bold" style={applyStyle('color')}>
                        Review your daily income
                    </p>
                    <div>
                        <p className="text-4xl font-bold" style={applyStyle('color')}>$680.5</p>
                        <p className="text-base font-bold mt-3" style={applyStyle('color')}>Change payout method in settings</p>
                    </div>
                    <Button
                        size="md"
                        variant="solid"
                        style={{
                            ...applyStyle("bg", { fromVar: cssFgVar }),
                            ...applyStyle("color", { fromVar: cssBgVar }),
                        }}
                    >
                        Go settings
                    </Button>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Example10;
