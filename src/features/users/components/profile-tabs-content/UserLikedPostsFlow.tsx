import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Post from '../../../posts/components/Post'
import useGetLikedPosts from '../../../posts/hooks/useGetLikedPosts'

const UserLikedPostsFlow = () => {
    const { ref, inView } = useInView()
    const { data, fetchNextPage, hasNextPage } = useGetLikedPosts({
        limit: 5,
    })

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [inView, fetchNextPage])

    return (
        <div className=" flex flex-col">
            {data &&
                data.pages.map((page) => (
                    <div key={page.nextPage}>
                        {page.data.map((post) => (
                            <Post key={post._id} post={post} />
                        ))}
                    </div>
                ))}
            {hasNextPage && (
                <span
                    ref={ref}
                    className="loading loading-spinner loading-lg my-4 self-center"
                ></span>
            )}
            {/* {data && data.map((post) => <Post key={post._id} post={post} />)} */}
        </div>
    )
}

export default UserLikedPostsFlow
