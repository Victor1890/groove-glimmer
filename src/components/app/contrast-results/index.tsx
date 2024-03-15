import { CheckFill } from "@/components/icons/checks";
import { EmojiVeryHappyFill } from "@/components/icons/emoji";
import ContrastLevel from "./contrast-level";

const ContrastResults = () => {

    return (
        <div className="flex flex-col gap-8 mt-8">
            <div className="flex justify-between items-end" style={{ color: "#079455" }}>
                <div>
                    <span className="text-lg mb-1 font-medium block capitalize">very good</span>
                    <span className="text-5xl font-bold block">15.04</span>
                </div>
                <EmojiVeryHappyFill className="text-4xl" />
            </div>
            <ul className="grid gap-y-5 gap-x-8 md:flex-1 sm:grid-cols-2">
                <ContrastLevel contrast="AA - 4.5:1" type="normal" isValid={true} />
                <ContrastLevel contrast="AA - 3:1" type="large" isValid={true} />
                <ContrastLevel contrast="AAA - 7:1" type="normal" isValid={false} />
                <ContrastLevel contrast="AAA - 4.5:1" type="large" isValid={false} />
            </ul>
        </div>
    )
}

export default ContrastResults;