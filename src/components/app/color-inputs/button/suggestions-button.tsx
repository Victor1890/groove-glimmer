import { CloseFill } from "@/components/icons/checks";
import { LightFill } from "@/components/icons/navbar";
import { useToggle } from "@/hooks";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader
} from "@nextui-org/react";
import { Fragment } from "react";
import Suggestions from "../../suggestions";

const SuggestionsButton = () => {

    const { isEnabled: open, onOpen, onClose } = useToggle();

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
                size="4xl"
                backdrop="blur"
                isOpen={open}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                hideCloseButton
                scrollBehavior="inside"
            >
                <ModalContent>
                    <ModalHeader className="flex items-center justify-between p-6 border-b border-solid">
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
                        <section className="mb-4">
                            <span className="font-medium text-[1.125rem] leading-[28px] mb-4">Background Suggestions</span>
                            <Suggestions className="grid-cols-2" type="background" onApply={onClose} />
                        </section>
                        <section className="mb-4">
                            <span className="font-medium text-[1.125rem] leading-[28px] mb-4">Foreground Suggestions</span>
                            <Suggestions className="grid-cols-2" type="foreground" onApply={onClose} />
                        </section>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Fragment>
    )
}

export default SuggestionsButton;