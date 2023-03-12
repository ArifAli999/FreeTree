import React, { useState } from 'react'
import { Button } from '../ui/button'
import { SheetContent, SheetFooter } from '../ui/sheet'
import PageOneform from '../Helpers/PageOneform';
import PageTwoform from '../Helpers/PageTwoform';



function NewPage() {

    const [formNumber, setNumber] = useState(1);

    function nextStep() {
        if (formNumber >=4 )return null;
        setNumber(prev=> prev + 1);
    }

    function backStep() {
        if(formNumber <=1) return null;
        setNumber(prev => prev -1);
    }
    

    return (
        <SheetContent position='right' className='relative w-full z-20  md:w-[38%] h-full flex flex-col justify-between' >
            {formNumber === 1 && <PageOneform  formNumber={formNumber}/>}
            {formNumber === 2 && <PageTwoform formNumber={formNumber}/>}

          
            <SheetFooter className=' bottom-6 flex w-full justify-between items-center'>
                <Button type="submit" onClick={nextStep}>Next</Button>

                <Button type="submit" onClick={backStep} disabled={formNumber === 1? true : false}>Back</Button>

            </SheetFooter>
        </SheetContent>
    )
}

export default NewPage