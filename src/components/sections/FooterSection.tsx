import React from 'react'
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { Input } from '../ui/input';

function FooterSection() {
    const links = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Shop",
            link: "/shop"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Contact",
            link: "/contact"
        }
    ];
    const help = [
        {
            title: "Payment Options",
            link: "/"
        },
        {
            title: "Returns",
            link: "/"
        },
        {
            title: "Privacy Policies",
            link: "/"
        }
    ];
    return (
        <section className='pb-16'>
            <div className='my-8'>
                <Separator />
            </div>

            <div className='px-4 md:px-[70px] flex justify-between w-full flex-col md:flex-row gap-8'>
                <div>
                    <div>
                        <img src='/images/footer_logo.png' alt='footer logo' />
                    </div>
                    <p className='text-customGray mt-[50px]'>
                        400 University Drive Suite  200 Coral
                        <br />Gables
                        <br />FL 33134 USA
                    </p>
                </div>
                <div>
                    <p className='text-customGray text-normal mb-[55px]'>Links</p>
                    <div className='flex flex-col gap-[46px] font-medium'>
                        {links.map((link, index) => (
                            <Link
                                href={link.link}
                                key={index}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                </div>
                <div>
                    <p className='text-customGray text-normal mb-[55px]'>Helps</p>
                    <div className='flex flex-col gap-[46px] font-medium'>
                        {help.map((help, index) => (
                            <Link
                                href={help.link}
                                key={index}
                            >
                                {help.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <p className='text-customGray text-normal mb-[55px]'>Newletter</p>
                    <div className='flex items-center gap-3'>
                        <Input placeholder='Enter your Email Address' />
                        <div>
                            <p className='font-medium underline underline-offset-4'>
                                SUBSCRIBE
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='px-4 md:px-[70px]'>
                <div className='py-8 pt-[48px]'>
                    <Separator />
                </div>
                <p className='text-customGray'>&copy;{new Date().getFullYear()} Amasia. All rights reserved</p>
            </div>

        </section>
    )
}

export default FooterSection