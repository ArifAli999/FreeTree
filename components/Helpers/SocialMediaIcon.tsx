import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { BsSpotify } from 'react-icons/bs';
import { FaItunesNote, FaPinterestSquare } from 'react-icons/fa'

interface SocialMediaIconProps {
    name: string;

}

function SocialMediaIcon({ name, onChange }) {

    const [isInputOpen, setIsInputOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function handleClick() {
        setIsInputOpen(true);
    }

    function handleClose() {
        setIsInputOpen(false);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);
        onChange(value);
    }

    return (

        <AlertDialog>
            <div
                className={` p-2.5 cursor-pointer rounded-md `}
                onClick={handleClick}
            >

                {name === 'Facebook' && <AlertDialogTrigger> <FacebookIcon size={24} /> </AlertDialogTrigger>}
                {name === 'Twitter' && <AlertDialogTrigger>  <TwitterIcon size={24} /> </AlertDialogTrigger>}
                {name === 'Instagram' && <AlertDialogTrigger>  <InstagramIcon size={24} /> </AlertDialogTrigger>}
                {name === 'Spotify' && <AlertDialogTrigger>  <BsSpotify size={24} /> </AlertDialogTrigger>}
                {name === 'Music' && <AlertDialogTrigger>  <FaItunesNote size={24} /> </AlertDialogTrigger>}
                {name === 'Youtube' && <AlertDialogTrigger>  <YoutubeIcon size={24} /> </AlertDialogTrigger>}
                {name === 'Pintrest' && <AlertDialogTrigger>  <FaPinterestSquare size={24} /> </AlertDialogTrigger>}





            </div>
            {isInputOpen && (



                <AlertDialogContent className=" ">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <input
                                placeholder={`Enter ${name} link`}
                                value={inputValue}
                                onChange={handleInputChange}
                                className="h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-50 dark:focus:ring-slate-500"
                            />
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel><button onClick={handleClose}>Close</button></AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleInputChange}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>




            )
            }
        </AlertDialog>

    );
}




export default SocialMediaIcon;