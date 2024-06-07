interface Props {
    onClick: () => void
}

const CloseBtn = ({ onClick }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="btn btn-circle btn-ghost text-base "
        >
            ✕
        </button>
    )
}

export default CloseBtn
