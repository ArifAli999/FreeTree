import { useToast } from '@/hooks/use-toast';
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'
import { v4 as uuidv4 } from 'uuid';
import LinkDropDowns from './LinkDropDowns';




function InputComponent({ index, handleDeleteInput, setInputs, inputs }) {
    const handleInputChange = (event) => {
        const newInputs = [...inputs];
        newInputs[index].value = event.target.value;
        setInputs(newInputs);
    };
    return (
        <>
           

                <div className='flex flex-row w-full items-center relative gap-4 justify-between' >
                    <LinkDropDowns />
                    <input 
                    value={inputs[index].value}
                    onChange={handleInputChange}
                    id='seearcb' className=" w-full p-3 break-words overflow-scroll pr-4 text-sm  text-black border leading-2  border-gray-500 rounded-lg bg-white focus:ring-blue-0 dark:border-slate-600 dark:placeholder-slate-400 dark:bg-transparent dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:text-white" placeholder="Enter link" />
                </div>



            

        </>


    )
}


function PageOneform({ formNumber, inputs, setInputs }) {

   
    const [disabled, setDisabled] = useState(false);
    

    const { toast } = useToast()


    const handleAddInput = () => {
        const newInput = { id: uuidv4(), value: '' };
        if (inputs.length >= 5) return handleToast();
        setInputs([...inputs, newInput]);
    };

    const handleDeleteInput = (id) => {
        const newInputs = inputs.filter((input) => input.id !== id);
        setInputs(newInputs);

    };


    function handleToast() {
        setDisabled(true);

    }

    
  return (
   <><SheetHeader>
          <SheetTitle>PAGE SETUP</SheetTitle>
          <SheetDescription className='text-xs'>
              This is a multistep proceess, to begin provide us with all the links you want to share
              to see some magic!
          </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col gap-4 py-4 mt-0">
              <div className="grid w-full  items-center gap-1 mb-2">
                  <Label className='text-xs dark:text-slate-100 mb-1 leading-relaxed'>page name</Label>
                  <input className=" w-full p-3 break-words pr-4 text-sm  text-black border leading-2 focus:ring-2 border-gray-500 rounded-lg bg-white focus:ring-black dark:border-slate-600 dark:placeholder-slate-400 dark:bg-transparent dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:text-white" placeholder='Riffy' />
              </div>

              <div className='flex flex-row justify-between'>
                  <Label className='text-lg dark:text-slate-300'>Links</Label>
                  <div className='flex gap-4 items-center'>
                      <span className='text-md font-bold'>{inputs.length}/5</span>
                      <Button disabled={disabled} onClick={handleAddInput} variant='subtle' className=' w-[30px] h-[30px] text-right rounded-full bg-black dark:bg-slate-700 text-white'>+</Button>
                  </div>
              </div>

              <div className="flex flex-col w-full  gap-2.5 relative min-h-[320px]">
                  <div className='flex flex-row items-center justify-between mb-25 '>


                  </div>
                  {inputs.map((input, index) => (
                      <InputComponent
                          key={input.id}
                          inputs={inputs}
                          setInputs={setInputs}
                          index={index}
                          handleDeleteInput={handleDeleteInput} />
                  ))}
              </div>
          </div></>
  )
}

export default PageOneform