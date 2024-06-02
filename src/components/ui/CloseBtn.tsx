interface Props {
    onClick: () => void
}

const CloseBtn = ({ onClick }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="btn btn-circle btn-ghost btn-sm"
        >
            ✕
        </button>
    )
}

export default CloseBtn
