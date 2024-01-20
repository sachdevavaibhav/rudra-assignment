import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import CustomButton from "@/app/components/customButton/CustomButton";

import apolloClient from "@/app/utils/apollo-client";
import { GET_INDIAN_SHOWS } from "@/app/utils/graphql-queries";

async function getIndianShows() {
    const { data } = await apolloClient.query({
        query: GET_INDIAN_SHOWS,
    });

    return data;
};

async function IndianShowsCard() {
    const {netflix_shows:data} = await getIndianShows();
    return (
        <Card
            sx={{
                margin: '1.5rem 3rem',
                borderRadius: '0.5rem',
                height: '25rem',
            }}
        >
            <CardContent
                sx={{
                    padding: '1rem 1.5rem',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: '500',
                        fontSize: '1.45rem',
                        marginBottom: '1rem',
                    }}
                >
                    Indian Shows
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        rowGap: '1rem',
                        marginBottom: '1rem',
                        padding: '0rem 1rem 0rem 0rem',
                    }}
                >
                    {data?.map((show) => (
                        <Box key={show.title} display="flex" gap={2} alignItems="center">
                            <Avatar alt="indian shows" src="/netflix.jpg" sx={{ width: '3rem', height: '3rem', }} />
                            <Box>
                                <Typography fontWeight={500} fontSize={"1.18rem"}>{show.title}</Typography>
                                <Typography color="text.secondary">{show.duration}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <CustomButton>
                    View All
                </CustomButton>
            </CardContent>
        </Card>
    )
}

export default IndianShowsCard;