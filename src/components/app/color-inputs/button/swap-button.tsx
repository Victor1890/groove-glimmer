import { InvertFill } from "@/components/icons/navbar";
import { useSwapColors } from "@/hooks";
import { Button } from "@nextui-org/react";

const SwapButton = () => {

    const handleSwap = useSwapColors();

    return (
        <Button
            isIconOnly
            aria-label="Swap Colors"
            title="Swap Colors"
            aria-labelledby="Swap Colors"
            variant="light"
            className="text-[1.5rem]"
            onClick={handleSwap}
        >
            <InvertFill />
        </Button>
    )
}

export default SwapButton;