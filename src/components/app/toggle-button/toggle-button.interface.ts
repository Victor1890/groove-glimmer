import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ContextValue {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    onChange?: (value: string) => void;
}

export interface RootProps extends Pick<ContextValue, "onChange"> {
    children: ReactNode;
    defaultValue: string;
}

export interface ItemProps extends Pick<ContextValue, "value"> {
    children: ReactNode;
}

