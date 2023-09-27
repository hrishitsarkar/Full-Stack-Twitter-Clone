import HomeClient from "./HomeClient"
import { graphqlClient } from "@/clients/api"
import { getAllTweetsQuery } from "@/graphql/query/tweet"

import { Tweet } from "@/gql/graphql"

const Home = async () => {
    const tweets = await graphqlClient.request(getAllTweetsQuery)
    return (
        <HomeClient allTweets={tweets.getAllTweets as Tweet[]} />
    )
}

export default Home;