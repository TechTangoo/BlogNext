'use client'
import {useState,useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn,signOut,getProviders,useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation';
const Nav = () => {
  const {data:session}= useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setUpProviders = async ()=>{
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])
  
  const listItems = ['createTask', 'delete task'];
  const router = useRouter();
  const handleChange =()=>{ router.push('/cttask')};

  return (
    <div className='bg-white  flex-1'>
      <div className='p-2 text-black text-sm flex-auto'>
      <ul className='flex justify-between gap-2 items-center'>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button 
      onClick={handleChange}>click me</button>
      </div>
      <div className='bg-black'>
        {session?.user ?(
          <div className='flex gap-3'>
            <Link href='/create=blog' className='bg-blue'>create blog</Link>
            <button type='button' onClick={signOut} className='bg-red'>Sign Out</button>
            <Link href='/profile'>
              <Image src={session?.user.image} width={29}
              height={29} alt='profile-pic'/>
            </Link>
          </div>
        ):(
          <>
          {providers && Object.values(providers).map((provider)=>(
            <div className='bg-yellow'>
              <button type='button' onClick={()=>signIn(provider.id)} key={provider.name}>Sign In</button>
            </div>
          ))}
          </> 
        )}
      </div>
    </div>
  );
}

export default Nav;
