import Image from "next/image";
import Link from "next/link";
const  PopularTags=() =>{
    return(
        <div className="p-4 rounded-2xl  flex flex-col gap-4 bg-Dark_dull">
            <h1 className="font-bold text-lg text-Light_Dull">Now Trending</h1>

            {/* Events */}
             <div className="">
                 <div className="flex items-center justify-between">
                        <span className="text-Muted_text font-semibold text-sm">
                        Technology · Trending
                        </span>
                        <span className="">↗</span>
                    </div>
                    <h2 className="text-textGrayLight font-bold">OpenAI</h2>
                    <span>20K posts</span>
             </div>
             {/* ////////////////////////////////////////////////// */}
             <div className="">
                 <div className="flex items-center justify-between">
                        <span className="text-Muted_text font-semibold text-sm">
                        Technology · Trending
                        </span>
                        <span className="">↗</span>
                    </div>
                    <h2 className="text-textGrayLight font-bold">OpenAI</h2>
                    <span>20K posts</span>
             </div>
             {/* ///////////////////////////////////////////////////////////// */}
             <div className="">
                 <div className="flex items-center justify-between">
                        <span className="text-Muted_text font-semibold text-sm">
                        Technology · Trending
                        </span>
                        <span className="">↗</span>
                    </div>
                    <h2 className="text-textGrayLight font-bold">OpenAI</h2>
                    <span>20K posts</span>
             </div>
             {/* ///////////////////////////////////////////////////////////////////// */}
             <div className="">
                 <div className="flex items-center justify-between">
                        <span className="text-Muted_text font-semibold text-sm">
                        Technology · Trending
                        </span>
                        <span className="">↗</span>
                    </div>
                    <h2 className="text-textGrayLight font-bold">OpenAI</h2>
                    <span>20K posts</span>
             </div>

             <Link href="" className="text-Blue text-sm justify-center">Show more</Link>
        </div>
    )
}

export default PopularTags;