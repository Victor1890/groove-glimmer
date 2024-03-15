import { CheckFill, CloseFill } from "@/components/icons/checks";

interface ContrastLevelProps {
    type: "normal" | "large";
    contrast: string
    isValid?: boolean;
}

const ContrastLevel = ({ contrast, type, isValid = false }: ContrastLevelProps) => {
    return (
        <li>
            <span className="mb-2 text-black uppercase">{type} text</span>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{contrast}</span>
                {
                    isValid ?
                        <CheckFill className="text-2xl text-green-700" /> :
                        <CloseFill className="text-2xl text-red-700" />
                }
            </div>
        </li>
    )
}

export default ContrastLevel;