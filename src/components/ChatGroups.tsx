import React from 'react';
const ChatGroups = () => {

        const chats = [
            {
            id: 1,
            name: "Red Hat club",
            message: "Tommorow session at 2pm",
            time: "11:26 AM",
            unread: 0,
            img: "/general/User_Image.png",
            },
            {
            id: 2,
            name: "Batman coders",
            message: "📹 Video",
            time: "9:28 AM",
            unread: 4,
            img: "/general/User_Image.png",
            },
            {
            id: 3,
            name: "Cricket Club",
            message: "Bring Bat!🏏",
            time: "8:15 AM",
            unread: 0,
            img: "/general/User_Image.png",
            },
            {
            id: 4,
            name: "Dance Club",
            message: "GIF",
            time: "8:03 AM",
            unread: 2,
            img: "/general/User_Image.png",
            },
            {
            id: 5,
            name: "Marvel Coders",
            message: "pls tell me the deadline for form su....",
            time: "Yesterday",
            unread: 0,
            img:"/general/User_Image.png",
            },
            {
            id: 6,
            name: "Alice Whitman group",
            message: "📩 How was this 10 yrs ago??",
            time: "Yesterday",
            unread: 0,
            img: "/general/User_Image.png",
            },
            {
            id: 7,
            name: "Jane Whitman & team",
            message: "Did you watch the game?",
            time: "Yesterday",
            unread: 0,
            img: "/general/User_Image.png",
            },
        ];

   
       
        return (
            <div className=' gap-4 sticky top-0 h-max '>
                 <h2 className="text-xl font-bold p-4  text-bg_Light">Teams</h2>

                <div className="rounded-2xl p-2 bg-Dark_dull sticky top-0">

                    <div className="flex flex-col w-full max-w-md mx-auto bg-Dark_dull  overflow-y-auto">
                    {chats.map((chat) => (
                        <div
                        key={chat.id}
                        className="flex items-center justify-between p-3  hover:bg-Dark_Highlited cursor-pointer"
                        >
                        {/* Avatar */}
                        <img
                            src={chat.img}
                            alt={chat.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        {/* Chat Info */}
                        <div className="flex-1 min-w-0 ml-3">
                            <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-bg_Light truncate">{chat.name}</h4>
                            <span className="text-xs text-Muted_text">{chat.time}</span>
                            </div>
                            <p className="text-sm text-Muted_text truncate">{chat.message}</p>
                        </div>

                        
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        );
        }


export default ChatGroups