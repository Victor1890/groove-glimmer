import { useMediaQuery } from "@/hooks";
import Suggestions from "../suggestions";

function ForegroundSuggestions() {

    const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

    if (!isLargeDevice) return null;

    return <Suggestions className="grid-cols-2" type="foreground" />
}

export default ForegroundSuggestions;