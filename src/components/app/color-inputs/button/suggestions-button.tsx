import { CloseFill } from "@/components/icons/checks";
import { LightFill } from "@/components/icons/navbar";
import useToggle from "@/hooks/use-toggle";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader
} from "@nextui-org/react";
import { Fragment } from "react";

const SuggestionsButton = () => {

    const { isEnabled: open, onOpen, onClose, setOpen } = useToggle();

    return (
        <Fragment>
            <Button
                isIconOnly
                variant="light"
                aria-label="suggestions button"
                className="text-[1.5rem] lg:hidden"
                onClick={onOpen}
            >
                <LightFill />
            </Button>
            <Modal
                size="md"
                backdrop="blur"
                isOpen={open}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                hideCloseButton
            >
                <ModalContent>
                    <ModalHeader className="flex items-center justify-between p-6">
                        <span className="font-bold">Contrast suggestions</span>
                        <Button
                            isIconOnly
                            variant="bordered"
                            aria-label="close suggestions"
                            onClick={onClose}
                        >
                            <CloseFill />
                        </Button>
                    </ModalHeader>
                    <ModalBody>
                        <section>
                            <span className="font-medium text-[1.125rem] leading-[28px] mb-4">Background Suggestions</span>
                            <div className="grid gap-5 grid-cols-2">

                            </div>
                        </section>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default SuggestionsButton;