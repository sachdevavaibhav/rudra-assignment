import Box from '@mui/material/Box';

import Title from './indexPageComponents/title/Title';
import LatestShowsCard from './indexPageComponents/cards/latestShowsCard';
import ApolloWrapper from './utils/apollo-client-wrapper';

export default function Home() {
  console.log('Home')
  return (
    <Box as={"main"}
      paddingLeft="250px"
    >
      <Title />
      <ApolloWrapper>
        <LatestShowsCard />
      </ApolloWrapper>
    </Box>
  )
}
