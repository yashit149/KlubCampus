"use client"
import Image from "next/image"
import React from "react"
const PostInteraction =() =>{
    return(
        <div className="flex items-center justify-between gap-4 lg:gap-16 my=2 text-Muted_text mt-4">
            <div className="flex items-center justify-between  flex-1">
                <div className="group flex items-center gap-2 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0" 
                    strokeLinecap="round" 
                    strokeLinejoin="round">
                    <path className="fill text-Muted_text group-hover:fill-Red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                    </svg>
                    <span className="group-hover:text-Red text-sm">157</span>
                </div>
{/* ////////////////////////////////////////////////// */}

                <div className="group flex items-center gap-2 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                         
                        >
                        <path className="fill text-Muted_text group-hover:fill-Blue"
                            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            fill="currentColor"
                        />
                    </svg>


                    
                    <span className="group-hover:text-Blue text-sm">157</span>
                </div>
{/* ////////////////////////////////////////////////// */}
                <div className="group flex items-center gap-2 cursor-pointer">
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                   
                    >
                    <path className="fill text-Muted_text group-hover:fill-Green"   
                        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.13-4.11c.52.47 1.2.77 1.96.77 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-12 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                        fill="currentColor"
                    />
                    </svg>


                    
                    
                    <span className="group-hover:text-Green text-sm">157</span>
                </div>
{/* ////////////////////////////////////////////////// */}
                <div className="group flex items-center gap-2 cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    
                    >
                    <path className="fill text-Muted_text group-hover:fill-Accent_col"
                        d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 10V2h8l10.59 10.59a2 2 0 0 1 0 2.82z"
                        fill="currentColor"
                    />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>

                    
                    <span className="group-hover:text-Accent_col text-sm">157</span>
                </div>

            </div>
            <div className="flex items-center justify-between ">
                <div className="group flex items-center gap-2 cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    
                    >
                    <path className="fill text-Muted_text group-hover:text-Blue"
                        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                        fill="currentColor"
                    />
                    
                    </svg>


                </div>
            </div>
        </div>
    )
}
export default PostInteraction;
