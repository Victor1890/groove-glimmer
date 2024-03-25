import { CheckFill } from "@/components/icons/checks";
import { ClipboardLine } from "@/components/icons/navbar";
import { useCopyToClipboard } from "@/hooks";
import useToggle from "@/hooks/use-toggle";
import { Button } from "@nextui-org/react";
import { useEffect, useRef } from "react";

interface ButtonClipboardProps {
    color?: string
}

const ButtonClipboard = ({ color }: ButtonClipboardProps) => {

    const [copiedText, copyToClipboard] = useCopyToClipboard();
    const { isEnabled, onOpen, onClose } = useToggle();
    const timeoutId = useRef<number>();

    function onClick() {
        if (color) copyToClipboard(color);
        onOpen();
    }

    useEffect(() => {
        if (timeoutId.current) clearTimeout(timeoutId.current);

        timeoutId.current = window.setTimeout(onClose, 1500);
    }, [copiedText, onClose, timeoutId]);

    return (
        <Button
            variant="light"
            className="border-none text-2xl"
            isIconOnly
            onClick={onClick}
            aria-label="Copy to Clipboard"
            title="Copy to Clipboard"
            aria-labelledby="Copy to Clipboard"
        >
            {isEnabled ? <CheckFill aria-label="check" /> : <ClipboardLine aria-label="clipboard" />}
        </Button>

    )
}

export default ButtonClipboard