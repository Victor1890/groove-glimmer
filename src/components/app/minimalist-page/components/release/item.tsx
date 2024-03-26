import { Play } from "@/components/icons/actions";
import { Button, Image } from "@nextui-org/react";

interface ReleaseItemProps {
    title: string;
    authors: string;
    imgSrc: string;
}

const ReleaseItem = ({ authors, imgSrc, title }: ReleaseItemProps) => (
    <article className="p-5">
        <figure className="aspect-square">
            <Image
                className="w-full h-full object-cover"
                loading="lazy"
                width={380}
                height={460}
                decoding="async"
                src={imgSrc}
                alt={title}
            />
        </figure>
        <div className="flex items-center mt-3 gap-3">
            <Button
                isIconOnly
                variant="bordered"
                aria-label="Play Release"
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

export default ReleaseItem; 