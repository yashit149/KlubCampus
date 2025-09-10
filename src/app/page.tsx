import Feed from '@/components/Feed'
import Domain from '@/components/Domain'
import Link from 'next/link'
import Search from '@/components/Search'
const Homepage = () => {
  return (
    <div className='flex flex-col'>
      
      <Domain/>

      <div className='px-12 sticky top-0 bg-bg_Dark py-2'>
        <Search/>
      </div>

      <div className='px-4 pt-4 flex justify-between text-Muted_text font-bold  bg-bg_Dark'>
        <Link href="/" className='pb-3 flex items-center rounded-t-lg px-4 p-2 border-b-4 border-Accent_col text-Light_Highlited '>For you</Link>
        <Link href="/" className='pb-3 flex items-center rounded-t-lg px-4 p-2 hover:bg-[#181818] hover:text-Light_Highlited'>Trending</Link>
        <Link href="/" className='pb-3 flex items-center rounded-t-lg px-4 p-2 hover:bg-[#181818] hover:text-Light_Highlited'>Events</Link>
        <Link href="/" className='pb-3 flex items-center rounded-t-lg px-4 p-2 hover:bg-[#181818] hover:text-Light_Highlited'>Clubs</Link>
        <Link href="/" className='pb-3 flex items-center rounded-t-lg px-4 p-2 hover:bg-[#181818] hover:text-Light_Highlited'>Following</Link>
      </div>
      <Feed/>
    </div>
  )
}

export default Homepage