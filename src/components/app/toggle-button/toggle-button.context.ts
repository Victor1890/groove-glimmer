import { createContext } from "react";
import { ContextValue } from "./toggle-button.interface";

export const ToggleContext = createContext<Pick<ContextValue, "value">>({
    value: "",
});