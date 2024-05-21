import useGetBookmarkedPosts from '../hooks/useGetBookmarkedPosts'
import Post from './Post'

const BookmarkedPostsFlow = () => {
    const { data, isPending, isError } = useGetBookmarkedPosts()

    return (
        <div className=" flex flex-col">
            {data && data.map((post) => <Post key={post._id} post={post} />)}
        </div>
    )
}

export default BookmarkedPostsFlow
