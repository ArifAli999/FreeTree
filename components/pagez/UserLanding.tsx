import { useUser } from '@clerk/nextjs'
import React from 'react'
import DashMenu from '../Tabs/dashMenu'

function UserLanding() {
    const { isLoaded, isSignedIn, user } = useUser()

    return (
        <div className='container mt-10 mb-10 '>
            <h2 className='font-sans font-medium text-2xl'>Hello {user.firstName}!</h2>
            <DashMenu />
        </div>
    )
}

export default UserLanding