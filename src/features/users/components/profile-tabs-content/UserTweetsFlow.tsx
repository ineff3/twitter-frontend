import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Post from '../../../posts/components/Post'
import useGetUserPosts from '../../../posts/hooks/useGetUserPosts'

const UserTweetsFlow = ({ userId }: { userId: string }) => {
    const { ref, inView } = useInView()
    const { data, fetchNextPage, hasNextPage } = useGetUserPosts({
        limit: 5,
        userId: userId,
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

export default UserTweetsFlow
