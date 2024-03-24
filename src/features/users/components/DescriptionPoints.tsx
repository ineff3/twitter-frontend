import { IUser } from '../../authentication/interfaces'

const DescriptionPoints = ({ userData }: { userData: IUser }) => {
    return (
        <div className=" flex justify-between gap-2 text-sm ">
            <div className=" flex items-center gap-1.5">
                <svg
                    width="14"
                    height="16"
                    viewBox="0 0 18 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.99989 12.315C6.91189 12.315 5.21289 10.617 5.21289 8.52899C5.21289 6.44099 6.91289 4.73999 8.99989 4.73999C11.0869 4.73999 12.7869 6.43999 12.7869 8.52699C12.7869 10.614 11.0869 12.312 8.99989 12.312V12.315ZM8.99989 6.24199C7.73989 6.24199 6.71289 7.26799 6.71289 8.52899C6.71289 9.78999 7.73989 10.814 8.99989 10.814C10.2599 10.814 11.2869 9.78899 11.2869 8.52799C11.2869 7.26699 10.2599 6.23999 8.99989 6.23999V6.24199Z"
                        fill="currentColor"
                    />
                    <path
                        d="M17.6921 8.69C17.6921 3.9 13.7921 0 9.0001 0C4.20811 0 0.308105 3.9 0.308105 8.69C0.308105 10.592 0.911106 12.398 2.05111 13.913L2.05411 13.911L2.06111 13.926C3.68911 15.996 8.33911 19.683 8.53611 19.838C8.67411 19.948 8.83811 20.001 9.00111 20.001C9.16411 20.001 9.3281 19.948 9.4661 19.839C9.6631 19.684 14.3131 15.999 15.9411 13.927L15.9481 13.913L15.9501 13.915C17.0901 12.399 17.6921 10.595 17.6921 8.692V8.69ZM9.0001 18.29C7.7761 17.3 4.48011 14.575 3.24411 13.005C2.30411 11.755 1.80811 10.263 1.80811 8.693C1.80811 4.727 5.0351 1.5 9.0001 1.5C12.9651 1.5 16.1921 4.726 16.1921 8.69C16.1921 10.26 15.6951 11.752 14.7561 13.003C13.5201 14.573 10.2241 17.297 9.0001 18.288V18.29Z"
                        fill="currentColor"
                    />
                </svg>
                <p>Kyiv</p>
            </div>
            <div className=" flex items-center gap-1.5">
                <svg
                    width="16"
                    height="17"
                    viewBox="0 0 20 21"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.95979 12.945C9.89279 12.945 9.82379 12.935 9.75679 12.918C8.62679 12.6 7.65979 11.932 6.96179 10.986C6.12979 9.86099 5.78579 8.47799 5.99379 7.09299C6.20179 5.70799 6.93579 4.48799 8.06179 3.65499L11.5918 1.04699C13.9138 -0.669012 17.2018 -0.177012 18.9218 2.14699C19.7518 3.27399 20.0968 4.65699 19.8888 6.04199C19.6808 7.42699 18.9458 8.64699 17.8188 9.47999L16.3388 10.574C16.0058 10.82 15.5348 10.749 15.2888 10.416C15.0428 10.082 15.1128 9.61199 15.4468 9.36599L16.9268 8.27099C17.7298 7.67899 18.2538 6.80799 18.4028 5.82099C18.5508 4.83299 18.3048 3.84599 17.7128 3.04299C16.4878 1.38699 14.1408 1.03299 12.4828 2.25899L8.95279 4.86699C8.15079 5.45999 7.62679 6.33099 7.47779 7.31699C7.32779 8.30699 7.57479 9.29199 8.16779 10.095C8.66579 10.77 9.35479 11.245 10.1598 11.472C10.5598 11.586 10.7928 12 10.6798 12.4C10.5878 12.73 10.2858 12.947 9.95779 12.947L9.95979 12.945Z"
                        fill="currentColor"
                    />
                    <path
                        d="M5.2698 20.054C3.6598 20.054 2.0728 19.319 1.0448 17.929C0.212796 16.802 -0.131204 15.419 0.0767959 14.035C0.284796 12.651 1.0198 11.43 2.1468 10.597L3.6248 9.50298C3.9588 9.25798 4.4298 9.32798 4.6748 9.66098C4.9198 9.99398 4.8518 10.465 4.5178 10.711L3.0378 11.806C2.2348 12.399 1.7118 13.27 1.5628 14.256C1.4148 15.246 1.6598 16.231 2.2528 17.034C3.4778 18.691 5.8228 19.044 7.4828 17.819L11.0108 15.211C12.6688 13.986 13.0208 11.641 11.7958 9.98097C11.2978 9.30697 10.6088 8.83097 9.8038 8.60497C9.4038 8.49197 9.1708 8.07798 9.2838 7.67798C9.3958 7.27798 9.8118 7.04798 10.2098 7.15598C11.3398 7.47398 12.3058 8.14198 13.0038 9.08798C14.7208 11.412 14.2278 14.7 11.9038 16.418L8.3738 19.026C7.4408 19.719 6.3508 20.052 5.2688 20.052L5.2698 20.054Z"
                        fill="currentColor"
                    />
                </svg>
                <p className=" link link-primary">t.me/maksym_bochkarov</p>
            </div>
            <div className=" flex items-center gap-1.5">
                <svg
                    width="14"
                    height="17"
                    viewBox="0 0 18 21"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.75 10.083C4.336 10.083 4 9.747 4 9.333C4 6.393 6.243 4 9 4C9.414 4 9.75 4.336 9.75 4.75C9.75 5.164 9.414 5.5 9 5.5C7.07 5.5 5.5 7.22 5.5 9.333C5.5 9.747 5.164 10.083 4.75 10.083Z"
                        fill="currentColor"
                    />
                    <path
                        d="M17.75 9.333C17.75 4.323 13.825 0.25 9 0.25C4.175 0.25 0.25 4.324 0.25 9.333C0.25 13.938 3.57 17.745 7.855 18.33L6.155 20.16C6.018 20.305 5.982 20.517 6.062 20.7C6.142 20.882 6.322 21 6.522 21H11.479C11.677 21 11.857 20.882 11.936 20.7C12.016 20.517 11.98 20.305 11.844 20.16L10.144 18.33C14.429 17.745 17.749 13.938 17.749 9.333H17.75ZM9 16.917C5.002 16.917 1.75 13.515 1.75 9.333C1.75 5.151 5.002 1.75 9 1.75C12.998 1.75 16.25 5.15 16.25 9.333C16.25 13.516 12.998 16.917 9 16.917Z"
                        fill="currentColor"
                    />
                </svg>
                <p>Born July 04, 2004</p>
            </div>
            <div className=" flex items-center gap-1.5">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.708 0H2.292C1.028 0 0 1.028 0 2.292V17.708C0 18.972 1.028 20 2.292 20H17.708C18.972 20 20 18.972 20 17.708V2.292C20 1.028 18.972 0 17.708 0ZM18.5 17.708C18.5 18.145 18.145 18.5 17.708 18.5H2.292C1.855 18.5 1.5 18.145 1.5 17.708V4.418C1.5 3.981 1.854 3.628 2.29 3.626H17.71C18.146 3.626 18.5 3.981 18.5 4.416V17.71V17.708Z"
                        fill="currentColor"
                    />
                    <path
                        d="M5.03207 8.035C5.74176 8.035 6.31707 7.45968 6.31707 6.75C6.31707 6.04031 5.74176 5.465 5.03207 5.465C4.32238 5.465 3.74707 6.04031 3.74707 6.75C3.74707 7.45968 4.32238 8.035 5.03207 8.035Z"
                        fill="currentColor"
                    />
                    <path
                        d="M5.03207 12.441C5.74176 12.441 6.31707 11.8657 6.31707 11.156C6.31707 10.4463 5.74176 9.871 5.03207 9.871C4.32238 9.871 3.74707 10.4463 3.74707 11.156C3.74707 11.8657 4.32238 12.441 5.03207 12.441Z"
                        fill="currentColor"
                    />
                    <path
                        d="M14.9681 8.035C15.6778 8.035 16.2531 7.45968 16.2531 6.75C16.2531 6.04031 15.6778 5.465 14.9681 5.465C14.2584 5.465 13.6831 6.04031 13.6831 6.75C13.6831 7.45968 14.2584 8.035 14.9681 8.035Z"
                        fill="currentColor"
                    />
                    <path
                        d="M14.9681 12.441C15.6778 12.441 16.2531 11.8657 16.2531 11.156C16.2531 10.4463 15.6778 9.871 14.9681 9.871C14.2584 9.871 13.6831 10.4463 13.6831 11.156C13.6831 11.8657 14.2584 12.441 14.9681 12.441Z"
                        fill="currentColor"
                    />
                    <path
                        d="M9.99984 8.035C10.7095 8.035 11.2848 7.45968 11.2848 6.75C11.2848 6.04031 10.7095 5.465 9.99984 5.465C9.29016 5.465 8.71484 6.04031 8.71484 6.75C8.71484 7.45968 9.29016 8.035 9.99984 8.035Z"
                        fill="currentColor"
                    />
                    <path
                        d="M9.99984 12.441C10.7095 12.441 11.2848 11.8657 11.2848 11.156C11.2848 10.4463 10.7095 9.871 9.99984 9.871C9.29016 9.871 8.71484 10.4463 8.71484 11.156C8.71484 11.8657 9.29016 12.441 9.99984 12.441Z"
                        fill="currentColor"
                    />
                    <path
                        d="M5.03207 16.771C5.74176 16.771 6.31707 16.1957 6.31707 15.486C6.31707 14.7763 5.74176 14.201 5.03207 14.201C4.32238 14.201 3.74707 14.7763 3.74707 15.486C3.74707 16.1957 4.32238 16.771 5.03207 16.771Z"
                        fill="currentColor"
                    />
                    <path
                        d="M9.99984 16.771C10.7095 16.771 11.2848 16.1957 11.2848 15.486C11.2848 14.7763 10.7095 14.201 9.99984 14.201C9.29016 14.201 8.71484 14.7763 8.71484 15.486C8.71484 16.1957 9.29016 16.771 9.99984 16.771Z"
                        fill="currentColor"
                    />
                </svg>
                <p>Joined May 2020</p>
            </div>
        </div>
    )
}

export default DescriptionPoints
