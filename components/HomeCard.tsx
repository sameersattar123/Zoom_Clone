import Image from 'next/image'
import React from 'react'

interface homeCardProps {
    className?: string;
    img: string;
    title: string;
    Description: string;
    handleClick?: () => void;
}

const HomeCard = ({ className, title, Description, img, handleClick }: homeCardProps) => {
    return (
        <div className={`${className} flex flex-col rounded-[14px] 
    min-h-[260px] justify-between px-4 py-6 w-full xl:max-w-[270px] cursor-pointer`}
            onClick={handleClick}
        >
            <div className="flex-center glassmorphism  size-12 rounded-[10px] ">
                <Image
                    src={img}
                    alt='meeting'
                    height={27}
                    width={27}
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p className='text-lg font-normal'>{Description}</p>
            </div>
        </div>
    )
}

export default HomeCard
