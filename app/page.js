import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Title from './indexPageComponents/title/Title';
import ShowsCard from './indexPageComponents/cards/showsCard';
import DirectorsCard from './indexPageComponents/cards/directorsCard';
import FavoriteCard from './indexPageComponents/cards/favoriteCard';
import ConversionCard from './indexPageComponents/cards/conversionCard';
import PostCard from './indexPageComponents/cards/postCard';
import IndianShowsCard from './indexPageComponents/cards/indianShowsCard';
import TotalShowsCard from './indexPageComponents/cards/totalShowsCard';
import LatestReleaseCard from './indexPageComponents/cards/latestReleaseCard';
import RatingsCard from './indexPageComponents/cards/ratingCard';
import ApolloWrapper from './utils/apollo-client-wrapper';

import Image from 'next/image';

export default function Home() {
  return (
    <Box as={"main"}
      paddingLeft="250px"
      paddingTop="82px"
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
          <Grid item sm={6} lg={4}>
            <ApolloWrapper>
              <DirectorsCard />
            </ApolloWrapper>
          </Grid>
          <Grid item sm={6} lg={5}>
            <PostCard/>
          </Grid>
          <Grid item sm={6} lg={3}>
            <IndianShowsCard />
          </Grid>
          <Grid item sm={6} lg={4}>
            <TotalShowsCard />
          </Grid>
          <Grid item sm={6} lg={4}>
            <LatestReleaseCard />
          </Grid>
          <Grid item sm={6} lg={4}>
            <RatingsCard/>
          </Grid>
        </Grid>
        <Box
          role="button"
          sx={{
            position: 'fixed',
            top: '40%',
            right: '5px',
            backgroundColor: '#E9671A',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '.5rem',
            cursor: 'pointer',
          }}
        >
          <Image src="/Setting.svg" alt="settings" width={20} height={20} />
        </Box>
    </Box>
  )
}
