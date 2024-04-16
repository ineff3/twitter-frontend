import { IPost } from '../interfaces'
import { convertPostDate } from '../utils/dateConvertions'
import UserIconLink from '../../../components/ui/UserIconLink'
import { SlOptions } from 'react-icons/sl'

interface Props {
    post: IPost
}

const Post = ({ post }: Props) => {
    const createdDate = new Date(post.dateCreated)
    return (
        <div className=" border-b border-accent p-10">
            <div className=" flex gap-3">
                <UserIconLink
                    username={post.author.username}
                    userImage={post.author.userImage}
                />

                <div className=" flex flex-1 flex-col gap-5">
                    <div className=" flex flex-col gap-1">
                        <div className=" flex justify-between ">
                            <div className="flex items-center gap-2 text-[12px]">
                                <p className=" font-medium text-secondary">
                                    {post.author.firstName}{' '}
                                    {post.author.secondName}
                                </p>
                                <p>@{post.author.username}</p>
                                <p>·</p>
                                <p>{convertPostDate(createdDate)}</p>
                            </div>
                            <SlOptions size={15} />
                        </div>
                        {post.text && (
                            <p className=" text-sm text-secondary">
                                {post.text}
                            </p>
                        )}
                        {post?.postImages?.length > 0 && (
                            <div
                                className={` grid  grid-cols-[repeat(auto-fit,minmax(230px,1fr))]  overflow-hidden rounded-lg ${post.postImages.length > 2 ? 'max-h-[550px] grid-rows-2 ' : 'max-h-[500px] grid-rows-1'}  `}
                            >
                                {post.postImages?.map((path, index) => (
                                    <div
                                        key={index}
                                        className={` ${post.postImages.length === 3 && index === 0 && 'col-span-2'}`}
                                    >
                                        <img
                                            src={String(
                                                new URL(
                                                    path || '',
                                                    import.meta.env.VITE_BASE_URL
                                                )
                                            )}
                                            alt="Post Image"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className=" flex max-w-lg justify-between">
                        <div className=" flex items-center gap-1.5">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.6449 9.18102L10.8533 10.8696C10.9068 11.3132 10.4312 11.6231 10.0518 11.3933L7.81274 10.0627C7.56693 10.0627 7.32646 10.0467 7.09134 10.0146C7.48678 9.54973 7.7219 8.9619 7.7219 8.326C7.7219 6.80837 6.40733 5.57933 4.78283 5.57933C4.16296 5.57933 3.59118 5.75566 3.11559 6.0656C3.09956 5.93201 3.09421 5.79841 3.09421 5.65947C3.09421 3.22806 5.20499 1.25623 7.81274 1.25623C10.4205 1.25623 12.5313 3.22806 12.5313 5.65947C12.5313 7.10228 11.7885 8.37945 10.6449 9.18102Z"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.72191 8.32601C7.72191 8.96191 7.48679 9.54975 7.09135 10.0147C6.56232 10.6559 5.72334 11.0674 4.78284 11.0674L3.38812 11.8956C3.153 12.0399 2.85375 11.8422 2.88581 11.5697L3.0194 10.517C2.30334 10.02 1.84378 9.22376 1.84378 8.32601C1.84378 7.38551 2.3461 6.55724 3.1156 6.06561C3.59119 5.75568 4.16297 5.57935 4.78284 5.57935C6.40734 5.57935 7.72191 6.80838 7.72191 8.32601Z"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p>3</p>
                        </div>
                        <div className=" flex items-center gap-1.5">
                            <svg
                                width="15"
                                height="17"
                                viewBox="0 0 11 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.35475 2.94482H8.75052C9.63758 2.94482 10.3536 3.66089 10.3536 4.54795V6.32208"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.04338 1.25623L1.35475 2.94484L3.04338 4.63348"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.3536 10.2551H2.95788C2.07081 10.2551 1.35475 9.53906 1.35475 8.652V6.87787"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.66501 11.9437L10.3536 10.2551L8.66501 8.56647"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p>12</p>
                        </div>
                        <div className=" flex items-center gap-1.5">
                            <svg
                                width="17"
                                height="18"
                                viewBox="0 0 13 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.85218 11.3078C6.67049 11.372 6.37124 11.372 6.18956 11.3078C4.63987 10.7788 1.17712 8.57184 1.17712 4.83121C1.17712 3.17999 2.50771 1.84406 4.14824 1.84406C5.12081 1.84406 5.98115 2.31431 6.52087 3.04106C7.06059 2.31431 7.92628 1.84406 8.89349 1.84406C10.534 1.84406 11.8646 3.17999 11.8646 4.83121C11.8646 8.57184 8.40187 10.7788 6.85218 11.3078Z"
                                    fill="#F61164"
                                />
                            </svg>
                            <p>156</p>
                        </div>
                        <div className=" flex items-center gap-1.5">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 14 14"
                                fill=""
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.76321 1.25623H4.61184C3.47362 1.25623 2.54915 2.18604 2.54915 3.31891V10.8483C2.54915 11.8101 3.23849 12.2163 4.0828 11.7513L6.69055 10.3032C6.96843 10.1482 7.4173 10.1482 7.68984 10.3032L10.2976 11.7513C11.1419 12.2216 11.8312 11.8155 11.8312 10.8483V3.31891C11.8259 2.18604 10.9014 1.25623 9.76321 1.25623Z"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M9.76321 1.25623H4.61184C3.47362 1.25623 2.54915 2.18604 2.54915 3.31891V10.8483C2.54915 11.8101 3.23849 12.2163 4.0828 11.7513L6.69055 10.3032C6.96843 10.1482 7.4173 10.1482 7.68984 10.3032L10.2976 11.7513C11.1419 12.2216 11.8312 11.8155 11.8312 10.8483V3.31891C11.8259 2.18604 10.9014 1.25623 9.76321 1.25623Z"
                                    stroke="#9099AF"
                                    strokeWidth="1.06875"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
