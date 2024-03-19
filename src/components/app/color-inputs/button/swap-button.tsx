import { InvertFill } from "@/components/icons/navbar";
import { useSwapColors } from "@/hooks";
import { Button } from "@nextui-org/react";

const SwapButton = () => {

    const handleSwap = useSwapColors();

    return (
        <Button
            isIconOnly
            variant="light"
            aria-label="swap button"
            className="text-[1.5rem]"
            onClick={handleSwap}
        >
            <InvertFill />
        </Button>
    )
}

export default SwapButton;