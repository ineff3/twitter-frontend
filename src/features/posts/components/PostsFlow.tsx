import React from 'react'
import useGetPosts from '../hooks/useGetPosts'
import Post from './Post'

const PostsFlow = () => {
    const { data, isPending, isError } = useGetPosts()

    // if (isPending) {
    //     return (
    //         <div className=" mt-12 flex justify-center">
    //             <span className="loading loading-spinner loading-lg"></span>
    //         </div>
    //     )
    // }

    return (
        <div className=" flex flex-col">
            {data &&
                data.map((post, index) => <Post key={index} post={post} />)}
        </div>
    )
}

export default PostsFlow
