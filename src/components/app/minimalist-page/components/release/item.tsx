import { Play } from "@/components/icons/actions";
import { Button } from "@nextui-org/react";

interface ReleaseItemProps {
    title: string;
    authors: string;
    imgSrc: string;
}

function ReleaseItem({ authors, imgSrc, title }: ReleaseItemProps) {

    return (
        <article>
            <figure className="aspect-square">
                <img
                    className="w-full h-full object-cover"
                    loading="lazy"
                    src={imgSrc}
                    alt={title}
                />
            </figure>
            <div className="flex items-center mt-3 gap-3">
                <Button
                    isIconOnly
                    variant="bordered"
                    isDisabled
                >
                    <Play />
                </Button>
                <div className="flex-1">
                    <p className="font-bold text-[1.5rem] leading-8">{title}</p>
                    <p className="text-base">{authors}</p>
                </div>
            </div>
        </article>
    )

}

export default ReleaseItem; 