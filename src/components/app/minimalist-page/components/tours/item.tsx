import { ArrowRightUpLine } from "@/components/icons/actions";

interface TourItemProps {
    name: string;
    location: string;
    zone: string;
    year: string;
}

function TourItem({ location, name, year, zone }: TourItemProps) {
    return (
        <article className="py-6 flex flex-col border-b-1 border-solid lg:flex-row">
            <p className="font-bold text-[1.25rem] leading-[30px] lg:w-5/12">{name}</p>
            <p className="font-medium lg:w-2/12">{location}</p>
            <p className="truncate lg:w-2/12">{zone}</p>
            <p className="lg:w-2/12">{year}</p>
            <div className="flex justify-end items-center">
                <span className="mr-2 lg:hidden">Get Ticket</span>
                <ArrowRightUpLine className="text-[1.25rem]" />
            </div>
        </article>
    )
}

export default TourItem