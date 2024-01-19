import Box from '@mui/material/Box';

import Title from './indexPageComponents/title/Title';
import ShowsCard from './indexPageComponents/cards/showsCard';
import ApolloWrapper from './utils/apollo-client-wrapper';

export default function Home() {
  console.log('Home')
  return (
    <Box as={"main"}
      paddingLeft="250px"
    >
      <Title />
      <ApolloWrapper>
        <ShowsCard />
      </ApolloWrapper>
    </Box>
  )
}
