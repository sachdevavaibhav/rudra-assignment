import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Image from "next/image";

import apolloClient from "@/app/utils/apollo-client";
import { TOTAL_UNIQUE_SHOWS } from "@/app/utils/graphql-queries";

async function getTotalUniqueShows() {
    const { data } = await apolloClient.query({
        query: TOTAL_UNIQUE_SHOWS,
    });

    return data;
}

const IMAGE_PATHS = [
    '/unique_show/Cone-min.png',
    '/unique_show/Cube-min.png',
    '/unique_show/Cylinder-min.png',
    '/unique_show/IcoSphere-min.png',
    '/unique_show/Sphere-min.png',
    '/unique_show/Torus-min.png',
    '/unique_show/Cube-min.png',
    '/unique_show/IcoSphere-min.png',
    '/unique_show/Cylinder-min.png',
]

async function TotalShowsCard() {
    const {netflix_shows_aggregate:countObj} = await getTotalUniqueShows();
    const count = countObj?.aggregate?.count;

    return(
        <Card
        sx={{
            margin: '1.5rem 3rem',
            borderRadius: '0.5rem',
            height: '35rem',
        }}
    >
            <CardContent
                sx={{
                    padding: '1rem 1.5rem',
                }}
            >
                <Box display="flex" justifyContent="space-between">
                    <Typography fontWeight={500} fontSize="1.45rem">Total Unique Shows</Typography>
                    <Typography color="text.secondary">{count}</Typography>
                </Box>
                <Grid container spacing={6} sx={{ marginTop: '1rem' }}>
                    {
                        IMAGE_PATHS.map((path, index) => (
                            <Grid item xs={4} key={index}>
                                <Box backgroundColor="primary.light" display="flex" justifyContent="center" borderRadius=".5rem">
                                    <Image src={path} alt="" width={100} height={100} />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
    </Card>
    )
};


export default TotalShowsCard;