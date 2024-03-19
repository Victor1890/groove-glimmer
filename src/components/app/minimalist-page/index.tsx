import { useColorStore } from "@/stores/colors";
import { useState } from "react";

function MinimalistPage() {

    const [bg, setBg] = useState<string>("");

    useColorStore.subscribe(({ bg }) => setBg(bg));

    return (
        <div style={{ backgroundColor: bg }} className="shadow-xl rounded-xl border-1 border-solid border-gray-200 overflow-hidden ">

        </div>
    )
}

export default MinimalistPage;