import { useInView } from 'react-intersection-observer'
import useGetPosts from '../hooks/useGetPosts'
import Post from './Post'
import { useEffect } from 'react'

const PostsFlow = () => {
    const { ref, inView } = useInView()
    const { data, fetchNextPage, hasNextPage } = useGetPosts({ limit: 5 })

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

export default PostsFlow
