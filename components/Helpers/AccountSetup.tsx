import { Label } from '@radix-ui/react-dropdown-menu'
import { AppleIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import { SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'


function AccountDialog() {

    return (
        <AlertDialog defaultOpen={true} open={true}>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
function AccountSetup({ accounts, setAccounts }) {


    function openDialog(name: string) {
        console.log('test')
        return (
            <AccountDialog />
        )

    }
    return (
        <><SheetHeader>
            <SheetTitle>ACCOUNT SETUP</SheetTitle>
            <SheetDescription className='text-xs'>
                This is a multistep proceess, to begin provide us with all the links you want to share
                to see some magic!
            </SheetDescription>
        </SheetHeader>
            <div className="flex flex-col gap-4 py-4 mt-0">
                <div className="grid w-full  items-center gap-1 mb-2">
                    <Label className='text-xs dark:text-slate-100 mb-1 leading-relaxed'>Pick your accounts</Label>

                </div>

                <div className='flex flex-row items-center gap-10'>
                    <div className='bg-slate-600 p-3 cursor-pointer  rounded-md' onClick={() => openDialog('Facebook')}>

                        <FacebookIcon />
                    </div>
                    <div className='bg-slate-600 p-3 cursor-pointer rounded-md'>
                        <TwitterIcon />
                    </div>
                    <div className='bg-slate-600 p-3 cursor-pointer rounded-md'>
                        <InstagramIcon />
                    </div>  <div className='bg-slate-600 p-3 cursor-pointer rounded-md'>
                        <LinkedinIcon />
                    </div>
                    <div className='bg-slate-600 p-3 cursor-pointer rounded-md'>
                        <AppleIcon />
                    </div>
                    <div className='bg-slate-600 p-3 cursor-pointer rounded-md'>
                        <YoutubeIcon />
                    </div>
                </div>

                <div className="flex flex-col w-full  gap-2.5 relative min-h-[320px]">
                    <div className='flex flex-row items-center justify-between mb-25 '>


                    </div>

                </div>
            </div></>
    )
}

export default AccountSetup