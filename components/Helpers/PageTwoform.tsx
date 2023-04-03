import React from 'react'
import { SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'
import PortalComp from './PortalComp'

function PageTwoform({ formNumber, inputs, setInputs }) {
  return (
      <SheetHeader>
          <SheetTitle className=''>
              
              <h2 className=''>PAGE SETUP</h2>
            </SheetTitle>
          <SheetDescription className='text-xs '>
        Feel free to drag them around or go back and add more links.
        You will be able to fully customize the page in the next step so for now just make sure your links look good!
          </SheetDescription>

          <PortalComp inputs={inputs} setInputs={setInputs}/>
      </SheetHeader>
  )
}

export default PageTwoform