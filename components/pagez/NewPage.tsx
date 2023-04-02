import React, { useState } from 'react'
import { Button } from '../ui/button'
import { SheetContent, SheetFooter } from '../ui/sheet'
import PageOneform from '../Helpers/PageOneform';
import PageTwoform from '../Helpers/PageTwoform';
import AccountSetup from '../Helpers/AccountSetup';



function NewPage() {

    const [formNumber, setNumber] = useState(1);
    const [inputs, setInputs] = useState([]);
    const [accounts, setAccounts] = useState([])

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

            <div>
                {/* {formNumber === 1 && <PageOneform inputs={inputs} setInputs={setInputs} formNumber={formNumber}/>}
            {formNumber === 2 && <PageTwoform formNumber={formNumber} inputs={inputs} setInputs={setInputs}/>} */}


                {formNumber === 1 && <AccountSetup />}
            </div>
          
            <SheetFooter className=' bottom-6 flex w-full justify-between items-center'>

                <Button type="submit" variant='subtle' onClick={backStep} disabled={formNumber === 1? true : false}>Back</Button>
                <Button type="submit" onClick={nextStep}>Next</Button>

            </SheetFooter>
        </SheetContent>
    )
}

export default NewPage