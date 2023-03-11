import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from './ui/sheet'
import { v4 as uuidv4 } from 'uuid';
import { Separator } from "@/components/ui/separator"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {  BsTrash2 } from 'react-icons/bs';
import { FaLockOpen } from 'react-icons/fa'
import { Label } from './ui/label';
import LinkDropDowns from './Helpers/LinkDropDowns';

function InputComponent({ id, handleClick, showOtherComponent, handleDeleteInput }) {



    return (
        <>
            {showOtherComponent ? (
               
                    <div className='flex flex-row w-full items-center relative gap-4 ' >
                        <input id='seearcb' className=" w-[95%] p-3 break-words overflow-scroll pr-4 text-sm  text-black border leading-2  border-gray-500 rounded-lg bg-white focus:ring-blue-0 dark:border-slate-600 dark:placeholder-slate-400 dark:bg-transparent dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:text-white" placeholder="Enter link" />
                        <LinkDropDowns/>
                    </div>
                  
                    
            ) : null}
         
        </>


    )
}

function NewPage() {

    const [inputs, setInputs] = useState([]);
    const [showOtherComponent, setShowOtherComponent] = useState(true);


    const handleAddInput = () => {
        const newInput = { id: uuidv4() };
        setInputs([...inputs, newInput]);
    };

    const handleDeleteInput = (id) => {
        const newInputs = inputs.filter((input) => input.id !== id);
        setInputs(newInputs);

    };

    function handleClick() {
        setShowOtherComponent(true);
    }

    return (
        <SheetContent position='top' className='relative w-full  md:w-[38%] h-full' >
            <SheetHeader>
                <SheetTitle>PAGE SETUP</SheetTitle>
                <SheetDescription className='text-xs'>
                    This is a multistep proceess, to begin provide us with all the links you want to share 
                    to see some magic!
                </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 py-4 mt-4">
                <div className="grid w-full  items-center gap-1.5 mb-2">
                    <Label className='text-xs dark:text-slate-100 mb-1 leading-relaxed'  >page name</Label>
                    <input  className=" w-full p-3 break-words overflow-scroll pr-4 text-sm  text-black border leading-2 focus:ring-2 border-gray-500 rounded-lg bg-white focus:ring-black dark:border-slate-600 dark:placeholder-slate-400 dark:bg-transparent dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:text-white" placeholder="Enter link" />
                </div>

                <div className='flex flex-row justify-between'>
                <Label className='text-lg dark:text-slate-300' >Links</Label>
                <Button onClick={handleAddInput} variant='subtle' className=' w-[30px] h-[30px] text-right rounded-full bg-black dark:bg-slate-700 text-white'>+</Button>
                </div>

                <div className="flex flex-col w-full -mt-2.5 pr-6  gap-2.5 relative h-[340px] overflow-scroll">
                    <div className='flex flex-row items-center justify-between mb-2.5 '>
                        

                    </div>
                    {inputs.map((input) => (
                        <InputComponent
                            key={input.id}
                            id={input.id}
                            handleClick={handleClick}
                            showOtherComponent={showOtherComponent}
                            handleDeleteInput={handleDeleteInput}
                        />
                    ))}
                </div>
            </div>
            <SheetFooter className='absolute bottom-6'>
                <Button type="submit">Save changes</Button>
            </SheetFooter>
        </SheetContent>
    )
}

export default NewPage