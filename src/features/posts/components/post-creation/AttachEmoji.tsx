import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState, useRef, useEffect } from 'react'
import { SmileIcon } from '../../../../components/ui/icons'

const AttachEmoji = () => {
    const [showPicker, setShowPicker] = useState(false)
    const pickerRef = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (
            pickerRef.current &&
            !pickerRef.current.contains(event.target as Node)
        ) {
            setShowPicker(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div>
            <button
                onClick={() => setShowPicker((prev) => !prev)}
                type="button"
                className="btn btn-circle btn-ghost btn-sm p-0.5"
            >
                <SmileIcon />
            </button>
            {showPicker && (
                <div
                    ref={pickerRef}
                    className="fixed inset-0 -left-[190px] z-50 max-h-[310px] w-fit overflow-hidden rounded-lg"
                >
                    <Picker
                        emojiSize="18"
                        emojiButtonSize="24"
                        previewPosition="none"
                        theme="dark"
                        data={data}
                        onEmojiSelect={console.log}
                        maxFrequentRows={0}
                    />
                </div>
            )}
        </div>
    )
}

export default AttachEmoji
