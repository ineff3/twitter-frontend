import LikeIconSvg from '../../../../components/ui/icons/LikeIconSvg'
import useLikePost from '../../hooks/useLikePost'

interface Props {
    postId: string
    isLiked: boolean
    likedBy: number
}

const LikeSection = ({ postId, isLiked, likedBy }: Props) => {
    const postLikeMutation = useLikePost()
    const onPostLike = () => {
        postLikeMutation.mutate({ postId: postId })
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

            <p>{likedBy}</p>
        </>
    )
}

export default LikeSection
