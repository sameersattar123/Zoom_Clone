'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';  // Changed this import to next/link instead of 'lucide-react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Sidebar = () => {
    const pathName = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // This ensures the component is only fully rendered on the client side
    }, []);

    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn(
                                'flex gap-4 items-center p-4 rounded-lg justify-start',
                                {
                                    'bg-blue-1': isActive,
                                }
                            )}
                        >
                            {isClient && ( // Only render the Image after the component is mounted on the client
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    width={24}
                                    height={24}
                                />
                            )}
                            <p className="text-lg font-semibold max-lg:hidden">
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Sidebar;
