import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
    Example01,
    Example02,
    Example03,
    Example04,
    Example05
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
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default UIElements;
