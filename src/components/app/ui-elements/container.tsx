import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties
}

function Container({ children, className, style }: ContainerProps) {
    return (
        <article style={style} className={clsx("border-solid border-1 border-[#eaecf0] rounded-xl", className)}>
            {children}
        </article>
    )
}

export default Container