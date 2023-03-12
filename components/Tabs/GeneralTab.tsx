import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { TabsContent } from '../ui/tabs'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import NewPage from '../pagez/NewPage'
function GeneralTab() {
    return (
        <TabsContent value="general">
            <Sheet>
                <div className='flex flex-col min-h-[300px] gap-4 items-center justify-center'>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Get started by creating a new page
                    </p>
                    <SheetTrigger>  <Button variant='subtle' size='lg'> Create  </Button></SheetTrigger>
                </div>
                <NewPage />
            </Sheet>
        </TabsContent>
    )
}

export default GeneralTab