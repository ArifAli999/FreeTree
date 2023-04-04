import { Label } from '@radix-ui/react-dropdown-menu'
import { AppleIcon, FacebookIcon, Instagram, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

import { SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'
import { Input } from '../ui/input'
import SocialMediaIcon from './SocialMediaIcon'



function AccountSetup({ inputs, setInputs }) {

    const [facebookLink, setFacebookLink] = useState('');
    const [twitterLink, setTwitterLink] = useState('');
    const [instagramLink, setInstagramLink] = useState('');
    const [spotiftLink, setSpotifyLink] = useState('');
    const [amusicLink, setAMusicLink] = useState('');
    const [linkedInLink, setLinkedLink] = useState('');
    const [pintrestLink, setPintrestLink] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');



    function handleFacebookLinkChange(value) {
        setFacebookLink(value);
        setInputs((prevState) => ({ ...prevState, facebook: value }));

    }

    function handleTwitterLinkChange(value) {
        setTwitterLink(value);
        setInputs((prevState) => ({ ...prevState, twitter: value }));


    }

    function handleInstagramLinkChange(value) {

        setInstagramLink(value);
        setInputs((prevState) => ({ ...prevState, instagram: value }));

    }

    function hanndleSpotifyChange(value) {
        setSpotifyLink(value)
        setInputs((prevState) => ({ ...prevState, spotify: value }));

    }

    function handleAppleMusicChange(value) {
        setAMusicLink(value)
        setInputs((prevState) => ({ ...prevState, amusic: value }));
    }

    function handleLinkedInChange(value) {
        setLinkedLink(value)
        setInputs((prevState) => ({ ...prevState, linkedin: value }))
    }

    function handleYoutubeChange(value) {
        setYoutubeLink(value)
        setInputs((prevState) => ({ ...prevState, youtube: value }))
    }

    function handlePintrestChange(value) {
        setYoutubeLink(value)
        setInputs((prevState) => ({ ...prevState, pintrest: value }))
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
                    <SocialMediaIcon name='Spotify' onChange={hanndleSpotifyChange} />
                    <SocialMediaIcon name='Music' onChange={handleAppleMusicChange} />
                    <SocialMediaIcon name='Youtube' onChange={handleYoutubeChange} />
                    <SocialMediaIcon name='Pintrest' onChange={handlePintrestChange} />
                </div>


                <div className='flex flex-col mt-6 '>
                    <p className='font-md font-bold mb-6'>Your Accounts</p>
                    {facebookLink && facebookLink.length ?
                        <div className='flex flex-row gap-4 items-center border dark:border-slate-600 rounded p-3.5'>
                            <Instagram color='#FFC0CB' />
                            <p className=''>{facebookLink}</p>
                        </div> : null
                    }

                </div>




            </div></>
    )
}

export default AccountSetup