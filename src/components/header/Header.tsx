import Link from 'next/link';


function Header() {
    return (
        <div className='header'>        
            <div className='c bg-transparent'>
                <div className='flex items-center bg-inherit'>
                    <div className="whitespace-nowrap bg-inherit">
                        <Link href={'/'} className='text-3xl bg-inherit'>
                            <b className='text-blue-700 bg-transparent'>B</b>log <b className='text-blue-700 bg-transparent'>M</b>aster 
                        </Link>

                    </div>
                    <div className="nav font-bold bg-inherit">
                        <Link href={'/login'} className='bg-transparent'>Log <b className='text-blue-700 bg-transparent'>in</b></Link>
                        <Link href={'/signup'} className='bg-transparent'>Sign <b className='text-blue-700 bg-transparent'>Up</b></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;