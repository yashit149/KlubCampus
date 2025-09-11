import Link from "next/link"
import Image from "next/image"
import Feed from "@/components/Feed"
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
                <div className="">
                    <h1 className="text-2xl font-bold">User Name</h1>
                    <span className="text-Muted_text text-sm">@user_Id</span>
                </div>
                 <p>Use X Youtube Channel</p>
                        {/* JOB & LOCATION & DATE */}
                    <div className="flex flex-col gap-4 text-textGray text-[15px]">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <Image
                                
                                src="/icons/userLocation.svg"
                                alt="location"
                                width={20}
                                height={20}
                                />
                                <span>India</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Image
                                
                                src="/icons/date.svg"
                                alt="date"
                                width={20}
                                height={20}
                                />
                                <span>Joined August 2025</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <span className="font-bold">100</span>
                                <span className="text-textGray text-[15px]">Followers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">100</span>
                                <span className="text-textGray text-[15px]">Followings</span>
                            </div>
                            </div>

                    </div>

            </div>
        </div>
        <div className=" flex flex-col items-start justify-start gap-4 p-4">
            
                
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-lg font-bold ">● Skils & Hobbies</h1>
                    <div className="flex flex-col justify-start gap-2 p-4  bg-Dark_dull rounded-2xl h-22 ">
                    
                    <p>Java,python,Cpp,
                    Painting,
                    Singing,
                    Editing</p>
                    <Link href="" className="text-Blue text-sm justify-center">See more</Link>
                  
                    </div>
                  
                </div>

                <div className="flex flex-col gap-4 ">
                     <h1  className="text-lg font-bold">● Achievements</h1>
                    <div className="flex flex-col justify-start gap-2 p-4  bg-Dark_dull rounded-2xl h-22 ">
                    
                   
                    <p>XYZ Hackathon winner,
                    Second runner up in PaintLife
                    Abcd competition winner</p>

                    <Link href="" className="text-Blue text-sm justify-center">See more</Link>
                  
                    </div>
                  
                </div>
           
           
                
        </div>

        <div className="">
            <div className="p-4 ">
                <span className="font-bold border-b-[4px] border-Accent_col">Posts</span>
                <Feed/>
            </div>
            
        </div>
        

    </div>
  )
}
export default UserPage