import { authConfig } from '@/config/auth';
import { getServerSession } from 'next-auth/next';
import React from 'react';


const Page = async () => {

    const session = await getServerSession(authConfig);

    return (
        <div>
            Profile of {session?.user?.name}
        </div>
    )
}

export default Page