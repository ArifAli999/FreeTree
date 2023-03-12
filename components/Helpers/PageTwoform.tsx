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
              Please define the layout of your page, feel free to drag them around or go back and add more links
          </SheetDescription>

          <PortalComp inputs={inputs} setInputs={setInputs}/>
      </SheetHeader>
  )
}

export default PageTwoform