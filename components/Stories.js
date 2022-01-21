import React, { useEffect, useState } from 'react';
import * as faker from '@faker-js/faker';
import Story  from './Story';
import {useSession} from "next-auth/react"


const Stories = () => {
    const [suggestions,setSuggestions] = useState([])
    const {data:session} = useSession()

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i) => ({
            ...faker.helpers.contextualCard(),
            id:i
        }))

        setSuggestions(suggestions)
    },[])

    console.log(suggestions)

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {
                session && (
                    <Story 
                        username={session?.user?.username}
                        avatar={session?.user?.image}
                    />
                )
            }
            {
                suggestions.map((profile,i) => (
                    <Story key={i} username={profile.username} avatar={profile.avatar} />
                ))
            }
        </div>
    )
};

export default Stories;
