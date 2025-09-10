import Image from 'next/image';
const Search =() =>{
    return(
       
            <div className="bg-Dark_dull py-2 px-4 flex items-center gap-4 rounded-full">
            <Image src="/icons/explore.svg" alt='search' width={16} height={16}/>
            <input type="text" placeholder='Search' className='bg-transparent outline-none placeholder:text-Muted_text' />
            </div>
    
        
    )
}

export default Search;