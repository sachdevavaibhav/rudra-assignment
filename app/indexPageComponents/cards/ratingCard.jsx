import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import apolloClient from "@/app/utils/apollo-client";
import { SHOW_RATING } from "@/app/utils/graphql-queries";

async function getRatings() {
    const { data } = await apolloClient.query({
        query: SHOW_RATING,
    });

    return data;
};

async function RatingsCard() {
    const {netflix_shows:data} = await getRatings();
    return (
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
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: '500',
                        fontSize: '1.45rem',
                        marginBottom: '1rem',
                    }}
                >
                    Show Ratings
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
                        <Box key={show.title} display="flex" justifyContent="space-between" alignItems="center" >
                            <Box display="flex" gap={2} alignItems="center">
                                <Avatar alt="indian shows" src="/netflix.jpg" sx={{ width: '3rem', height: '3rem', }} />
                                <Box>
                                    <Typography fontWeight={500} fontSize={"1.18rem"}>{show.title}</Typography>
                                    <Typography color="text.secondary">{show.rating}</Typography>
                                </Box>
                            </Box>
                            <Box
                                padding=".5rem"
                                border= "1px solid #8A92A6"
                                borderRadius="50%"
                             >
                                <Avatar alt="" src="/user.svg" sx={{ width: '1rem', height: '1rem', }} />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}

export default RatingsCard;