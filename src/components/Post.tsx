import Image from "next/image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";


const Post =() =>{
    return(
        <div className="p-4 rounded-2xl bg-Dark_dull m-4">
           {/* POST TYPE */}
           <div className=" flex item-center gap-2 text-sm text-Muted_text mb-2 font-bold">
            {/* icon */}
            <span>User1 Re-posted</span>

           </div>
           {/* POST CONTENT */}
           <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/general/User_Image.png" alt="user1" width={100} height={100} className=""/>
                </div>
                {/* CONTENT */}
                <div className="flex-1 flex flex-col gap-2">
                    {/* TOP */}
                    <div className="flex item-center justify-between gap-2">
                        <div className="flex  items-center gap-2 flex-wrap">
                            <h1 className="text-md font-bold">User1</h1>
                            <span className="text-Muted_text">@User_Id</span>
                            <span className="text-Muted_text">1 day ago</span>
                        </div>
                        <PostInfo/>
                    </div>
                    {/* TEXT & MEDIA */}
                    <div>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo asperiores architecto accusamus dignissimos odit facilis commodi eos, labore praesentium? Expedita ex totam est libero reiciendis saepe ducimus error? Tenetur.</p>
                        <Image className="rounded-2xl " src="/general/post.jpeg" alt="Post" width={600} height={500}/>
                        <PostInteraction/>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default Post;