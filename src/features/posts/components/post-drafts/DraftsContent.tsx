import { useNavigate } from 'react-router-dom'
import ArrowIconSvg from '../../../../components/ui/icons/ArrowIconSvg'
import { useState } from 'react'
import Drafts from './Drafts'
import { useGetDrafts } from '../../hooks/drafts/drafts'
import ErrorAlert from '../../../../components/ui/ErrorAlert'
import { DraftProvider, useDraftContext } from '../../contexts/DraftContext'

const DraftsContentParent = () => {
    const { data, isLoading, isError } = useGetDrafts()
    if (isLoading) {
        return <div className=" loading-spinner loading-sm text-center"></div>
    }
    if (isError || !data) {
        return (
            <ErrorAlert errorMessage="An error occured while receiving the drafts" />
        )
    }

    return (
        <DraftProvider data={data}>
            <DraftsContent />
        </DraftProvider>
    )
}

const DraftsContent = () => {
    const [editMode, setEditMode] = useState(false)
    const { deleteSelectedDrafts, selectAll, deselectAll, hasSelected } =
        useDraftContext()!

    const navigate = useNavigate()
    const onClickBack = () => {
        navigate(-1)
    }
    const changeMode = () => {
        setEditMode((prev) => {
            if (prev) {
                deselectAll()
            }
            return !prev
        })
    }

    return (
        <div className=" flex flex-1 flex-col">
            <div className=" flex items-center gap-4">
                <button
                    className=" btn btn-circle btn-ghost"
                    onClick={onClickBack}
                >
                    <ArrowIconSvg width={18} height={18} fill="currentColor" />
                </button>
                <div className=" flex flex-1 items-center justify-between">
                    <p className=" text-lg font-semibold">Drafts</p>
                    <button
                        className="btn btn-ghost text-base text-primary"
                        onClick={changeMode}
                    >
                        {!editMode ? 'Edit' : 'Done'}
                    </button>
                </div>
            </div>
            <div className={` divider  `}></div>
            <div className=" h-[400px]">
                <Drafts editMode={editMode} />
            </div>
            <section className={` ${!editMode && 'hidden'}`}>
                <div className=" divider  divider-primary"></div>
                <div className=" flex flex-1 justify-between">
                    {hasSelected ? (
                        <button onClick={deselectAll} className=" btn btn-sm">
                            Deselect All
                        </button>
                    ) : (
                        <button onClick={selectAll} className=" btn btn-sm">
                            Select All
                        </button>
                    )}
                    <button
                        onClick={deleteSelectedDrafts}
                        className=" btn  btn-error btn-sm"
                    >
                        Delete
                    </button>
                </div>
            </section>
        </div>
    )
}

export default DraftsContentParent
