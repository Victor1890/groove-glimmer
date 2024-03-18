import { InvertFill } from "@/components/icons/navbar";
import { Button } from "@nextui-org/react";

const SwapButton = () => {

    return (
        <Button
            isIconOnly
            variant="light"
            aria-label="swap button"
            className="text-[1.5rem]"
        >
            <InvertFill />
        </Button>
    )
}

export default SwapButton;