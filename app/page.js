import { Typography, Button, Box } from '@mui/material';
import Header from './components/header/Header';

export default function Home() {
  console.log('Home')
  return (
    <Box as={"main"}>
      <Header />
    </Box>
  )
}
