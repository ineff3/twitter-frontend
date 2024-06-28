import { useNavigate } from 'react-router-dom'
import ArrowIconSvg from '../../../../components/ui/icons/ArrowIconSvg'
import { useState } from 'react'
import Drafts from './Drafts'

const DraftsContent = () => {
    const [editMode, setEditMode] = useState(false)
    const navigate = useNavigate()
    const onClickBack = () => {
        navigate(-1)
    }
    const changeMode = () => {
        setEditMode((prev) => !prev)
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
                <Drafts />
            </div>
            <section className={` ${!editMode && 'hidden'}`}>
                <div className=" divider  divider-primary"></div>
                <div className=" flex flex-1 justify-between">
                    <button className=" btn   btn-sm">Select All</button>
                    <button className=" btn btn-outline btn-error btn-sm">
                        Delete
                    </button>
                </div>
            </section>
        </div>
    )
}

export default DraftsContent
