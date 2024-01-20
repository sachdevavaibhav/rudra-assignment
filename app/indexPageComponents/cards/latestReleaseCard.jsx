import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

// import Image from "next/image";

import apolloClient from "@/app/utils/apollo-client";
import { LATEST_RELEASE } from "@/app/utils/graphql-queries";

async function getLatestRelease() {
    const { data } = await apolloClient.query({
        query: LATEST_RELEASE,
    });

    return data;
}

async function LatestReleaseCard() {
    const {netflix_shows:data} = await getLatestRelease();
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
                    Latest Release
                </Typography>
                    {data?.map((show) => (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                                width: '100%',
                                height: '100%',
                                // rowGap: '1rem',
                                // marginBottom: '1rem',
                                padding: '0rem 1rem 0rem 0rem',
                            }}
                            key={show?.title}
                        >

                            <Box display="flex" alignItems="center" gap={2} marginBottom="1rem">
                                <Box
                                    padding=".5rem"
                                    border= "1px solid #8A92A6"
                                    borderRadius="50%"
                                >
                                    <Avatar
                                        alt="post"
                                        src="/netflix.jpg"
                                        sx={{
                                            width: '2.3rem',
                                            height: '2.3rem',
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        fontWeight={500}
                                        fontSize="1rem"
                                    >
                                        {show?.title}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                    >
                                        @jane59
                                    </Typography>
                                </Box>

                            </Box>
                            <Typography marginBottom=".5rem" color="text.secondary">{show?.description}</Typography>
                            <Typography color="primary.dark" marginBottom=".5rem">#html #bootstrap</Typography>
                            <Typography marginBottom=".5rem" color="text.secondary">{show?.date_added}</Typography>

                            <Divider sx={{marginBottom: '1rem'}}/>
                        </Box>
                    ))}
            </CardContent>
    </Card>
    )
};

export default LatestReleaseCard;