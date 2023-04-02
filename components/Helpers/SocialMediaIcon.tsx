import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

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

                <AlertDialogTrigger>  {name === 'Facebook' && <FacebookIcon size={24} />} </AlertDialogTrigger>
                <AlertDialogTrigger>   {name === 'Twitter' && <TwitterIcon size={24} />} </AlertDialogTrigger>
                <AlertDialogTrigger>  {name === 'Instagram' && <InstagramIcon size={24} />}</AlertDialogTrigger>
            </div>
            {isInputOpen && (



                <AlertDialogContent className=" ">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            <Input
                                placeholder={`Enter ${name} link`}
                                value={inputValue}
                                onChange={handleInputChange}
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