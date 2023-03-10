import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralTab from './GeneralTab'

function DashMenu() {
    return (
        <div className='flex  w-full' >
            <Tabs defaultValue="account" className="w-full mt-6">
                <TabsList className='w-full text-left'>
                    <TabsTrigger value="general">Dashboard</TabsTrigger>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                    <TabsTrigger value="customize">Customize</TabsTrigger>

                </TabsList>


                <GeneralTab />
            </Tabs>
        </div>
    )
}

export default DashMenu