import Box from '@mui/material/Box';

import Title from './indexPageComponents/title/Title';

export default function Home() {
  console.log('Home')
  return (
    <Box as={"main"}
      paddingLeft="250px"
    >
      <Title />
    </Box>
  )
}
