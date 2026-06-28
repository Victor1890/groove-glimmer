import { useEffect, useRef } from "react";
import { useCopyToClipboard } from "@/modules/preview/hooks/use-copy-to-clipboard";
import { useToggle } from "@/modules/preview/hooks/use-toggle";
import { Button } from "@/modules/ui/components/button";
import { CheckFill, ClipboardLine } from "@/modules/ui/icons";

interface ButtonClipboardProps {
	color?: string;
}

export function ButtonClipboard({ color }: ButtonClipboardProps) {
	const [copiedText, copyToClipboard] = useCopyToClipboard();
	const { isEnabled, onOpen, onClose } = useToggle();
	const timeoutId = useRef<number>(undefined);

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
			variant="ghost"
			size="icon"
			onClick={onClick}
			aria-label="Copy to Clipboard"
			title="Copy to Clipboard"
		>
			{isEnabled ? (
				<CheckFill aria-label="check" />
			) : (
				<ClipboardLine aria-label="clipboard" />
			)}
		</Button>
	);
}
