import { siteConfig } from '@/config/site'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

const GuestLanding = () => {
    return (
        <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                    Modern <span className="line-through">LinkTree</span>

                </h1>
                <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
                    Get started by simply creating an account, it only takes a minute!
                </p>
            </div>
            <div className="flex gap-4">
                <Link
                    href='/sign-up'
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ size: "lg" })}
                >
                    Register
                </Link>
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href={siteConfig.links.github}
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                    Login
                </Link>

            </div>
        </section>
    )
}

export default GuestLanding