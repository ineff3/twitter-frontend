import LikeIconSvg from '../../../../components/ui/icons/LikeIconSvg'
import useLikePost from '../../hooks/useLikePost'

interface Props {
    postId: string
    isLiked: boolean
    likesCount: number
}

const LikeSection = ({ postId, isLiked, likesCount }: Props) => {
    const postLikeMutation = useLikePost(postId)
    const onPostLike = () => {
        postLikeMutation.mutate()
    }
    return (
        <>
            <button
                onClick={onPostLike}
                className=" btn btn-circle btn-ghost btn-sm"
            >
                <div
                    className={` transform transition duration-500 ${isLiked && 'animate-slide-up-and-down text-[#F61164]'}`}
                >
                    <LikeIconSvg
                        width={22}
                        height={22}
                        stroke={isLiked ? 'none' : 'currentColor'}
                        strokeWidth={1.4}
                        fill={isLiked ? 'currentColor' : 'none'}
                    />
                </div>
            </button>

            <p>{likesCount}</p>
        </>
    )
}

export default LikeSection
