import { IDraft } from '../../interfaces'
import { Controller } from 'react-hook-form'
import { Checkbox } from '@headlessui/react'
import { useDraftContext } from '../../contexts/DraftContext'
import { usePostContext } from '../../contexts/PostContext'
import { useNavigate } from 'react-router-dom'

interface Props {
    editMode: boolean
}

const Drafts = ({ editMode }: Props) => {
    const { fields, control } = useDraftContext()!

    return (
        <div className=" flex max-h-[360px] flex-col gap-3 overflow-hidden overflow-y-scroll">
            {fields.map((field, index) => (
                <div key={field.id} className=" flex items-center gap-3">
                    {editMode && (
                        <Controller
                            control={control}
                            name={`drafts.${index}.checked`}
                            render={({ field }) => (
                                <Checkbox
                                    onChange={field.onChange}
                                    checked={field.value}
                                    className="checkbox"
                                />
                            )}
                        />
                    )}
                    <Draft editMode={editMode} draft={field.draft} />
                </div>
            ))}
        </div>
    )
}

export default Drafts

const Draft = ({ draft, editMode }: { draft: IDraft; editMode: boolean }) => {
    const { setFormValues } = usePostContext()!
    const navigate = useNavigate()
    return (
        <button
            onClick={() => {
                setFormValues(draft)
                navigate(-1)
            }}
            className={`  btn  btn-ghost h-20 w-full gap-3 bg-base-200 ${editMode && ' btn-disabled !bg-base-200'}`}
        >
            <div className=" flex flex-1 items-center justify-between gap-2 text-left">
                {draft?.text ? <p>{draft.text}</p> : <p> </p>}
                {draft?.draftImageUrls && (
                    <div className=" h-[60px] w-[60px] flex-shrink-0">
                        <div
                            className={`grid ${
                                draft.draftImageUrls.length === 1
                                    ? 'grid-cols-1 grid-rows-1'
                                    : draft.draftImageUrls.length === 2
                                      ? 'grid-cols-2 grid-rows-1'
                                      : draft.draftImageUrls.length === 3
                                        ? 'grid-cols-2 grid-rows-2'
                                        : 'grid-cols-2 grid-rows-2'
                            } h-full w-full gap-1`}
                        >
                            {draft.draftImageUrls.map((url, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center overflow-hidden"
                                >
                                    <img
                                        src={url}
                                        alt="Draft image"
                                        className={`object-cover ${
                                            draft.draftImageUrls.length === 1
                                                ? 'h-full w-full'
                                                : 'h-[30px] w-[30px]'
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </button>
    )
}
