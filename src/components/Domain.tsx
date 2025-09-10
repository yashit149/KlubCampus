import Image from 'next/image';
const Domain =() =>{
    return(
        <div className="flex items-center justify-center space-x-2 font-bold  p-2">
           <div className=''>
            <Image src="/general/DomainLogo.jpeg" alt="Domain name" width={24} height={24} />
           </div>

              <div className=''>
                Chitkara University
              </div>
        </div>
        
    )
}

export default Domain;