import { ColorPickerFill } from '@/components/icons/colors'
import { Popover, PopoverTrigger, Button, PopoverContent } from '@nextui-org/react'
import PopoverColorChannels from './popover-color-channels'

interface ButtonPickerProps {
    color?: string
    setColor?: (color: string) => void
}

const ButtonPicker = ({ color, setColor }: ButtonPickerProps) => {

    return (
        <Popover>
            <PopoverTrigger>
                <Button isIconOnly>
                    <ColorPickerFill className="text-2xl" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-4'>
                <PopoverColorChannels value={color} onChange={setColor} />
            </PopoverContent>
        </Popover>
    )
}

export default ButtonPicker;