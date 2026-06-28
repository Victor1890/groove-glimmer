import clsx from "clsx";
import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: ReactNode;
    className?: string;
    style?: CSSProperties
}

function Container({ children, className, ...props }: ContainerProps) {
    return (
        <article className={clsx("border-solid border-1 border-[#eaecf0] rounded-xl", className)} {...props}>
            {children}
        </article>
    )
}

export default Container