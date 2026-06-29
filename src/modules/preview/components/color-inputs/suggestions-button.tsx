import { Fragment } from "react";
import { useToggle } from "@/modules/preview/hooks/use-toggle";
import { Button } from "@/modules/ui/components/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/modules/ui/components/dialog";
import { CloseFill, LightFill } from "@/modules/ui/icons";
import Suggestions from "../suggestions";

export function SuggestionsButton() {
	const { isEnabled: open, onOpen, onClose } = useToggle();

	return (
		<Fragment>
			<Button
				variant="ghost"
				size="icon"
				aria-label="Suggestions Button"
				title="Suggestions Button"
				className="text-[1.5rem] lg:hidden"
				onClick={onOpen}
			>
				<LightFill />
			</Button>
			<Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
				<DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto [&>button]:hidden">
					<DialogHeader className="flex flex-row items-center justify-between p-6 border-b border-solid">
						<DialogTitle className="font-bold">
							Contrast suggestions
						</DialogTitle>
						<Button
							variant="outline"
							size="icon"
							aria-label="close suggestions"
							onClick={onClose}
						>
							<CloseFill />
						</Button>
					</DialogHeader>
					<div className="p-6">
						<section className="mb-4">
							<h3 className="font-medium text-[1.125rem] leading-7 mb-4">
								Background Suggestions
							</h3>
							<Suggestions
								className="grid-cols-2"
								type="background"
								onApply={onClose}
							/>
						</section>
						<section className="mb-4">
							<h3 className="font-medium text-[1.125rem] leading-7 mb-4">
								Foreground Suggestions
							</h3>
							<Suggestions
								className="grid-cols-2"
								type="foreground"
								onApply={onClose}
							/>
						</section>
					</div>
				</DialogContent>
			</Dialog>
		</Fragment>
	);
}
