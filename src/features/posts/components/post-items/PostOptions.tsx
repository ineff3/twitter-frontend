import { SlOptions } from 'react-icons/sl'
import MenuDropdown from '../../../../components/ui/MenuDropdown'
import { MenuItem, MenuItems } from '@headlessui/react'
import { GoTrash } from 'react-icons/go'
import useDeletePost from '../../hooks/useDeletePost'

interface Props {
    isPostAuthor: boolean
    postId: string
}
const PostOptions = ({ isPostAuthor, postId }: Props) => {
    const deletePostMutation = useDeletePost()
    const onDeletePost = () => {
        deletePostMutation.mutate(postId)
    }
    return (
        <MenuDropdown
            btnContent={
                <div className=" btn btn-ghost btn-sm">
                    <SlOptions size={18} />
                </div>
            }
        >
            <MenuItems
                anchor="bottom end"
                className=" absolute z-[60] flex w-[240px] origin-center flex-col overflow-hidden rounded-xl bg-base-200 shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
                {isPostAuthor && (
                    <MenuItem>
                        <button
                            className={` flex items-center gap-3 px-5 py-3 text-error data-[focus]:bg-neutral`}
                            onClick={onDeletePost}
                        >
                            <GoTrash size={18} />
                            <p>Delete</p>
                        </button>
                    </MenuItem>
                )}
            </MenuItems>
        </MenuDropdown>
    )
}

export default PostOptions
