import { FieldArrayWithId, UseFieldArrayRemove } from 'react-hook-form'
import { CreatePostFormType } from '../../interfaces'
import { useEffect, useState } from 'react'
import ArrowIcon from '../../../../components/ui/icons/ArrowIcon'

interface Props {
    attachedFiles: FieldArrayWithId<CreatePostFormType>[]
    remove: UseFieldArrayRemove
}

const SHOW_PER_PAGE = 2

const calcRange = (
    array: FieldArrayWithId<CreatePostFormType>[],
    startIndex: number
) => {
    if (array.length > 0) {
        if (array.length === SHOW_PER_PAGE) {
            return array
        }
        return array.slice(startIndex, startIndex + SHOW_PER_PAGE)
    }
    return []
}

const AttachedPictures = ({ attachedFiles, remove }: Props) => {
    const [page, setPage] = useState(0)
    const hasNextPage = page + SHOW_PER_PAGE < attachedFiles.length
    const hasPrevPage = page > 0

    const nextPage = () => {
        setPage((prev) => prev + 1)
    }
    const prevPage = () => {
        setPage((prev) => prev - 1)
    }

    useEffect(() => {
        if (attachedFiles.length === SHOW_PER_PAGE) {
            setPage(0)
        }
        if (
            attachedFiles.length > 1 &&
            calcRange(attachedFiles, page).length === 1
        ) {
            prevPage()
        }
        /*
        eslint-disable-next-line react-hooks/exhaustive-deps
        */
    }, [attachedFiles])

    return (
        <>
            {attachedFiles.length > 0 && (
                <div className="relative flex justify-end gap-3">
                    {calcRange(attachedFiles, page).map(
                        ({ id, file }, index) => (
                            <div
                                className={`relative ${attachedFiles.length > 1 ? ' h-[170px] flex-1 ' : 'h-[240px] w-[240px]'} overflow-hidden rounded-lg`}
                                key={id}
                            >
                                <img
                                    className="h-full w-full object-cover"
                                    src={URL.createObjectURL(file)}
                                    alt={'Content ' + index}
                                />
                                <div
                                    className="tooltip tooltip-left absolute right-0 top-0 !p-0 "
                                    data-tip="Remove"
                                >
                                    <button
                                        onClick={() => remove(index + page)}
                                        className="btn btn-circle btn-accent btn-sm "
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className=" absolute left-2 top-0 ">
                                    {index + 1 + page}
                                </div>
                            </div>
                        )
                    )}
                    {hasNextPage && (
                        <div className=" absolute right-0 top-1/2 -translate-y-1/2 rotate-180">
                            <button
                                type="button"
                                onClick={nextPage}
                                className=" btn btn-circle btn-accent btn-sm"
                            >
                                <ArrowIcon />
                            </button>
                        </div>
                    )}
                    {hasPrevPage && (
                        <div className=" absolute left-0 top-1/2 -translate-y-1/2">
                            <button
                                type="button"
                                onClick={prevPage}
                                className=" btn btn-circle btn-accent btn-sm"
                            >
                                <ArrowIcon />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default AttachedPictures
