import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralTab from './GeneralTab'

function DashMenu() {
    return (
        <div className='' >
            <Tabs defaultValue="account" className=" mt-6">
                <TabsList className='overflow-hidden text-left flex flex-row gap-4 flex-wrap '>
                    <TabsTrigger value="general">Dashboard</TabsTrigger>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy</TabsTrigger>

                </TabsList>


                <GeneralTab />
            </Tabs>
        </div>
    )
}

export default DashMenu