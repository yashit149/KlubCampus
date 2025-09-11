import Image from 'next/image';
import Link from 'next/link';

const menuList=[
    {
        id:1,
        name:"Home",
        link:"/",
        icon:"home.svg",
    },
    {
        id:2,
        name:"Explore",
        link:"/",
        icon:"explore.svg",
    },
    {
        id:3,
        name:"Clubs & Communities",
        link:"/clubs.html",
        icon:"community.svg",
        
    },
    {
        id:4,
        name:"Notifications",
        link:"/",
        icon:"notification.svg",
    },
    {
        id:5,
        name:"Messeges",
        link:"/chatbox.html",
        icon:"message.svg",
    },
    {
        id:6,
        name:"Team up",
        link:"/",
        icon:"explore.svg",
    },

    {
        id:8,
        name:"Profile",
        link:"/",
        icon:"profile.svg",
    },
    {
        id:9,
        name:"More",
        link:"/",
        icon:"more.svg",
    },
]

const LeftBar =() =>{
    return(
        <div className="h-screen sticky top-0 flex flex-col pt-2 pb-8">
            {/* User */}
            <div className="flex items-center justify-between mt-4">
                
                <div className='flex items-center gap-2'>
                    {/* user display */}
                    <div className='w-10 h-10 relative rounded-full overflow-hidden'>
                        <Image src="/general/User_Image.png" alt='Username' fill/>
                    </div>
                    <div className='hidden xxl:flex flex-col '>
                        <span className='font-bold'>User Name</span>
                        <span className='text-sm text-Muted_text'>@User_ID</span>
                    </div>
 
                </div>
                {/* More  */}
                <div className='hidden xxl:block cursor-pointer font-bold'>
                    ॰॰॰
                </div>
                
            </div>
            {/* LOGO MENU */}
            <div className="flex flex-col gap-4 text-lg items-center xxl:items-start mt-10">
                

                <div className="flex flex-col gap-2">
                    {menuList.map(item=>(
                        <Link href={item.link} className='p-2 rounded-full  hover:bg-[#181818] flex items-center gap-4' key={item.id}>
                            <Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24} />
                            <span className="hidden xxl:inline">{item.name}</span>
                        </Link> 
                        

                    ))}
                        <Link href="/" className='bg-Accent_col rounded-full w-12 h-12 flex item-center justify-center xxl:hidden'>
                        <Image src="icons/post.svg" alt='new post' width={24} height={24}/>
                        </Link>
                        <Link href="/" className='hidden xxl:block bg-Accent_col rounded-full font-bold text-center px-4 py-5 w-1/3'>
                        Post
                        </Link>

                    
                </div>
               
            </div>

            
        </div>
    )
}

export default LeftBar;