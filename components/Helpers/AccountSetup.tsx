import { Label } from '@radix-ui/react-dropdown-menu'
import { AppleIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

import { SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'
import { Input } from '../ui/input'
import SocialMediaIcon from './SocialMediaIcon'



function AccountSetup() {

    const [facebookLink, setFacebookLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [links, setLinks] = useState({
        facebook: '',
        instagram: '',
        twitter: '',
    })

    function handleFacebookLinkChange(value) {
        setFacebookLink(value);
        setLinks({
            facebook: value,
            instagram: instagramLink,
            twitter: twitterLink
        })
    }

    function handleTwitterLinkChange(value) {
        setTwitterLink(value);
        setLinks({
            facebook: facebookLink,
            instagram: instagramLink,
            twitter: value,
        })

    }

    function handleInstagramLinkChange(value) {

        setInstagramLink(value);
        setLinks({
            facebook: facebookLink,
            instagram: value,
            twitter: twitterLink
        })
    }

    return (
        <><SheetHeader>
            <SheetTitle>ACCOUNT SETUP</SheetTitle>
            <SheetDescription className='text-xs'>
                This is a multistep proceess, to begin provide us with all the links you want to share
                to see some magic!
            </SheetDescription>
        </SheetHeader>
            <div className="flex flex-col gap-4 py-4 mt-6">
                <div className="flex w-full  items-center gap-1 mb-2">
                    <Label className='text-sm dark:text-slate-100 mb-1 leading-relaxed'>Pick your accounts</Label>

                </div>

                <div className='flex flex-row items-center gap-8'>
                    <SocialMediaIcon name='Facebook' onChange={handleFacebookLinkChange} />
                    <SocialMediaIcon name='Twitter' onChange={handleTwitterLinkChange} />
                    <SocialMediaIcon name='Instagram' onChange={handleInstagramLinkChange} />
                </div>





            </div></>
    )
}

export default AccountSetup