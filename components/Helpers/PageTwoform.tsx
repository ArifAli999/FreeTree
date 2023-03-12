import React from 'react'
import { SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet'

function PageTwoform({ formNumber }) {
  return (
      <SheetHeader>
          <SheetTitle className=''>
              
              <h2 className=''> PAGE SETUP</h2>
            </SheetTitle>
          <SheetDescription className='text-xs '>
              This is a multistep proceess, to begin provide us with all the links you want to share
              to see some magic!
          </SheetDescription>
      </SheetHeader>
  )
}

export default PageTwoform