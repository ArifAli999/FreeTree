import { Lock, Settings, TextCursorInput, Trash } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';


function LinkDropDowns() {
  return (

      <DropdownMenu>
          <DropdownMenuTrigger>
              <Button variant='ghost' className=''><Settings /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[250px] md:mr-0 mr-4'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='flex items-center justify-between'>
                  <DropdownMenuLabel>Lock</DropdownMenuLabel>
                  <Lock className="mr-2 h-4 w-4 " />
              </DropdownMenuItem> 

              <DropdownMenuItem className='flex items-center justify-between'>
                  <DropdownMenuLabel>Add Title</DropdownMenuLabel>
                  <TextCursorInput className="mr-2 h-4 w-4 " />
              </DropdownMenuItem> 

              <DropdownMenuItem className='flex items-center justify-between'>
                  <DropdownMenuLabel>Delete</DropdownMenuLabel>
                  <Trash className="mr-2 h-4 w-4 " />
              </DropdownMenuItem> 


          </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default LinkDropDowns