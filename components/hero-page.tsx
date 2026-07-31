import Link from "next/link"

const HeroPage = () => {
    return (
        <div className='h-dvh flex flex-col justify-center items-center gap-8 lg:gap-12'>
            <div className="space-y-4 md:space-y-6 flex flex-col items-center">
                <span className='text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter border-3 -rotate-2 shadow-[-8px_8px_0px_0px_#000]'>FIND</span>
                <span className='text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter border-3 rotate-2 shadow-[-8px_8px_0px_0px_#000] bg-amber-300 text-white'>HIDDEN GEMS</span>
                <span className='text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter border-3 -rotate-3 shadow-[-8px_8px_0px_0px_#000]'>NEAR YOU</span>
            </div>
            <div className='flex flex-col lg:items-center lg:justify-center lg:flex-row gap-4 px-8 lg:px-0 w-full md:w-md lg:w-2xl'>
                <Link href={'/merchant/auth/register'} className='border bg-white text-center text-lg lg:text-2xl px-4 md:px-6 py-2 md:py-4 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-300 ease-in-out cursor-pointer'>
                    Start selling
                </Link>
                <Link href={'/discover'} className='bg-black text-white text-lg text-center lg:text-2xl px-4 md:px-6 py-2 md:py-4 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-300 ease-in-out cursor-pointer'>
                    Discover shops
                </Link>
            </div>
            <img src="./hero-landing-image.png" alt="hero" className='absolute object-cover z-[-1] w-full h-full' />
        </div>
    )
}

export default HeroPage