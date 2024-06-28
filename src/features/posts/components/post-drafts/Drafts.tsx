import ErrorAlert from '../../../../components/ui/ErrorAlert'
import { useGetDrafts } from '../../hooks/drafts/drafts'
import { IDraft } from '../../interfaces'

const Drafts = () => {
    const { data, isLoading, isError } = useGetDrafts()

    if (isLoading) {
        return <div className=" loading-spinner loading-sm text-center"></div>
    }
    if (isError) {
        return (
            <ErrorAlert errorMessage="An error occured while receiving the drafts" />
        )
    }

    return (
        <div className=" flex flex-col gap-3">
            {data &&
                data?.length > 0 &&
                data.map((draft) => <Draft draft={draft} key={draft._id} />)}
        </div>
    )
}

export default Drafts

const Draft = ({ draft }: { draft: IDraft }) => {
    return (
        <button className="  btn btn-ghost h-16 bg-base-200">
            <div className=" flex flex-1 justify-between">
                {draft?.text && <p>{draft.text}</p>}
                {draft?.draftImageUrls && (
                    <div>
                        {draft?.draftImageUrls.map((url) => (
                            <div
                                className=" flex h-[50px] w-[50px] flex-shrink-0"
                                key={url}
                            >
                                <img src={url} alt="Draft image" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </button>
    )
}
