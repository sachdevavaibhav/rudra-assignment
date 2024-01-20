import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Title from './indexPageComponents/title/Title';
import ShowsCard from './indexPageComponents/cards/showsCard';
import DirectorsCard from './indexPageComponents/cards/directorsCard';
import FavoriteCard from './indexPageComponents/cards/favoriteCard';
import ConversionCard from './indexPageComponents/cards/conversionCard';
import PostCard from './indexPageComponents/cards/postCard';
import IndianShowsCard from './indexPageComponents/cards/indianShowsCard';
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
          </ApolloWrapper>
          <ConversionCard />
          <FavoriteCard />
        </Box>
      </Box>
        <Grid
          sx={{
            marginTop: '300px',
          }}
          container
        >
          <Grid item xs={4}>
            <ApolloWrapper>
              <DirectorsCard />
            </ApolloWrapper>
          </Grid>
          <Grid item xs={5}>
            <PostCard/>
          </Grid>
          <Grid item xs={3}>
            <IndianShowsCard />
          </Grid>
          <Grid item xs={3}>
            <ApolloWrapper>
              <DirectorsCard />
            </ApolloWrapper>
          </Grid>
        </Grid>
    </Box>
  )
}
