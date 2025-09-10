import Link from "next/link";
import Image from "next/image";
const Recommendation =() =>{
    return(
        <div className="p-4 rounded-2xl border-Muted_text flex flex-col gap-4 bg-Dark_dull ">
            {/* CLUBS */}
           <div className="flex  items-center justify-between ">
                <div className="flex  items-center gap-2">
                    <div className=" rounded-full overflow-hidden w-10 h-10 ">
                        <Image src="/general/avatar.png" alt="Club" width={100} height={100} />
                    </div>
                    <div className="">
                        <h1 className="text-sm font-bold">Sports Club</h1>
                        <span className="text-Muted_text text-sm">5.6k members</span>
                    </div>
                </div>
                <button className="p-1 px-4 rounded-full bg-Accent_col">Join</button>
           </div>
           {/* //////////////////// */}
           <div className="flex  items-center justify-between ">
                <div className="flex  items-center gap-2">
                    <div className=" rounded-full overflow-hidden w-10 h-10 ">
                        <Image src="/general/avatar.png" alt="Club" width={100} height={100} />
                    </div>
                    <div className="">
                        <h1 className="text-sm font-bold">Coding Ninjas</h1>
                        <span className="text-Muted_text text-sm">11.3k members</span>
                    </div>
                </div>
                <button className="p-1 px-4 rounded-full bg-Accent_col">Join</button>
           </div>
            {/* //////////////////////// */}
            <div className="flex  items-center justify-between ">
                <div className="flex  items-center gap-2">
                    <div className=" rounded-full overflow-hidden w-10 h-10 ">
                        <Image src="/general/avatar.png" alt="Club" width={100} height={100} />
                    </div>
                    <div className="">
                        <h1 className="text-sm font-bold">Music club</h1>
                        <span className="text-Muted_text text-sm">7.6k members</span>
                    </div>
                </div>
                <button className="p-1 px-4 rounded-full bg-Accent_col">Join</button>
           </div>
            {/* //////////////////////// */}
            


            <Link href="" className="text-Blue text-sm justify-center">Show more</Link>

        </div>
        
    )
}

export default Recommendation;