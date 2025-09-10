import Image from "next/image"
const PostInfo =() =>{
    return(
        <div className=" cursor-pointer w4 h-4 ">
            <Image src="/icons/infoMore.svg" alt="More" width={16} height={16}/>
        </div>
    )
}
export default PostInfo;
