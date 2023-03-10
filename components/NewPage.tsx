import { Label } from '@radix-ui/react-dropdown-menu'
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
import { BsTrash2 } from 'react-icons/bs';


function InputComponent({ id, handleClick, showOtherComponent, handleDeleteInput }) {



    return (
        <>

            {showOtherComponent ? (
                <Popover>
                    <div className='flex flex-row w-full items-center relative gap-4 ' >
                        <input id='seearcb' className=" w-[90%] p-3 break-words overflow-scroll pr-4 text-sm  text-black border leading-2  border-gray-500 rounded-lg bg-white focus:ring-blue-0 dark:border-slate-600 dark:placeholder-slate-400 dark:bg-transparent dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:text-white" placeholder="Enter link" />
                        <PopoverTrigger onClick={() => handleClick(id)} className=''><BsTrash2 /></PopoverTrigger>
                    </div>
                    <PopoverContent className=' mt-4 mr-4 flex flex-col gap-6 border-gray-600'>
                        <p className='text-sm font-medium'>This is a permanent action. Do you want to continue?</p>
                        <div className='flex justify-end gap-4 mt-4'>
                            <Button variant='destructive' onClick={() => handleDeleteInput(id)}>Yes</Button>
                        <Button variant='outline'>No</Button>
                        </div>
                    </PopoverContent>
                </Popover>) : null}
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
        <SheetContent className='relative  h-full' >
            <SheetHeader>
                <SheetTitle>Page Settings</SheetTitle>
                <SheetDescription>
                    Please fill out all the fields as mentioned, these can be changed
                    at any time so dont worry.
                </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-8 py-4 mt-4">
                <div className="grid w-full  items-center gap-1.5">
                    <Label className='text-xs dark:text-slate-300 mb-1 leading-relaxed  uppercase'  >Page Name</Label>
                    <Input type="email" id="email-2" placeholder="Email" />
                </div>

                <div className="flex flex-col w-full  gap-2.5 relative ">
                    <div className='flex flex-row items-center justify-between mb-2.5'>
                        <Label className='text-lg dark:text-slate-300' >Links</Label>
                        <Button onClick={handleAddInput} variant='subtle' className=' right-0 top-20 w-[30px] h-[30px] text-right rounded-full bg-black dark:bg-slate-700 text-white'>+</Button>

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