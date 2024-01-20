import Box from '@mui/material/Box';

import Title from './indexPageComponents/title/Title';
import ShowsCard from './indexPageComponents/cards/showsCard';
import DirectorsCard from './indexPageComponents/cards/directorsCard';
import FavoriteCard from './indexPageComponents/cards/favoriteCard';
import ApolloWrapper from './utils/apollo-client-wrapper';

export default function Home() {
  console.log('Home')
  return (
    <Box as={"main"}
      paddingLeft="250px"
    >
      <Title />
      <Box position="relative">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            top: '-60px',
          }}
        >
          <ApolloWrapper>
            <ShowsCard />
            <DirectorsCard />
          </ApolloWrapper>
          <FavoriteCard />
        </Box>
      </Box>
    </Box>
  )
}
