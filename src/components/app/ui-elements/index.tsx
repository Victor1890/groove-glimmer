import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
    Example01,
    Example02,
    Example03,
    Example04,
    Example05,
    Example06,
    Example07,
    Example08,
    Example09,
    Example10
} from './examples'

function UIElements() {

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1400: 3 }}>
            <Masonry gutter="20px">
                <Example01 />
                <Example02 />
                <Example03 />
                <Example04 />
                <Example05 />
                <Example06 />
                <Example07 />
                <Example08 />
                <Example09 />
                <Example10 />
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default UIElements;
