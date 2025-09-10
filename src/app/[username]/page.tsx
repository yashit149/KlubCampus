import Link from "next/link"
import Image from "next/image"
const UserPage= () => {
  return(
    <div className="">
        {/* PROFILE TITLE */}
        <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-bg_Dark">
            <Link href="/"><Image src="/icons/back.svg" alt="back" width={24} height={24}/></Link>
            <h1 className="font-bold text-lg">User Name</h1>

        </div>
        <div className="">
            {/* PROFILE BANNER */}
            <div className="relative w-full">
                <div className="w-full aspect-[3/1]">
                    <Image src="/general/cover.jpg" alt="banner" width={600} height={200} className="w-full h-full object-cover"/>

                </div>

                {/* PFP */}
                <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-bg_Dark bg-Muted_text absolute left-4 -translate-y-1/2">
                    <Image src="/general/User_Image.png" alt="banner" width={100} height={100} className="w-full h-full object-cover"/>

                </div>

            </div>
            <div className=" flex w-full items-center justify-end gap-4 p-2">
                <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-Muted_text cursor-pointer">
                    <Image src="/icons/more.svg" alt="more" width={20} height={20}/>

                </div>

                <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-Muted_text cursor-pointer">
                    <Image src="/icons/explore.svg" alt="explore" width={20} height={20}/>

                </div>

                <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-Muted_text cursor-pointer">
                    <Image src="/icons/message.svg" alt="message" width={20} height={20}/>

                </div>
                <button className="py-2 px-4 bg-Accent_col font-bold rounded-full ">Support</button>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}
export default UserPage