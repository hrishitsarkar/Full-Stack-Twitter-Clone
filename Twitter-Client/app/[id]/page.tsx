"use client"
import { useRouter } from 'next/navigation';
import TwitterLayout from '@/components/FeedCard/Layout/TwitterLayout';
import type { GetServerSideProps, NextPage } from 'next'
import { BsArrowLeftShort } from 'react-icons/bs';
import ClientSideProfile from '../../components/UserProfile/ClientSideProfile'
import Image from 'next/image'
import { useCurrentUser } from '@/hooks/user';
import FeedCard from '@/components/FeedCard';
import { Tweet, User } from '@/gql/graphql';
import { graphqlClient } from '@/clients/api';
import { getUserByIdQuery } from '@/graphql/query/user';


const UserProfilePage = async ({ params }: { params: { id: string } }) => {
    const userInfo = await graphqlClient.request(getUserByIdQuery, { id: params.id });
    console.log(userInfo)
    return (
        <div>
            <TwitterLayout>
                {userInfo.getUserById && <ClientSideProfile userInfo={userInfo.getUserById as User} />}
            </TwitterLayout>

        </div>
    )
}


export default UserProfilePage;