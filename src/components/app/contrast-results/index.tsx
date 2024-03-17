import ContrastLevel from "./contrast-level";
import ContrastScore from "./contrast-score";

const ContrastResults = () => {

    return (
        <div className="flex flex-col gap-8 mt-8">
            <ContrastScore />
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