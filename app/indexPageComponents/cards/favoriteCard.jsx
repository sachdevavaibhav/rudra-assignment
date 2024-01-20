import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import Image from "next/image";

import apolloClient from "@/app/utils/apollo-client";
import { GET_FAVORITE_SHOWS } from "@/app/utils/graphql-queries";

async function getFavoriteShow() {
    const { data } = await apolloClient.query({
        query: GET_FAVORITE_SHOWS,
    });

    return data;
}

async function FavoriteCard() {
    const {netflix_shows_by_pk:data} = await getFavoriteShow();
    return (
        <Card
            sx={{
                margin: '1.5rem 3rem',
                borderRadius: '0.5rem',
                width: '30rem',
                height: '20rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: '0rem 1rem 0rem 0rem',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        padding: '1rem 1.5rem',
                        fontWeight: '500',
                        fontSize: '1.5rem',
                    }}
                >
                    Favorite Show
                </Typography>
                <Image src="/red_smile.svg" alt="red smile" width={45} height={45} />
            </Box>
            <CardContent
                key={data.title}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    padding: '0.5rem 1.5rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.8rem',
                        width: '100%',
                    }}
                >
                    <Avatar
                        alt={data.title}
                        src="/kota_factory.jpg"
                        sx={{
                            width: '5rem',
                            height: '5rem',
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'center',
                            height: '5rem',
                            marginLeft: '1rem',
                        }}
                    >
                        <Box as="span" fontWeight="500">{data.title}</Box>
                        <Box display="flex" flexDirection="row" gap="0.5rem">
                            <Box as="span">{data.country}</Box>
                            <Box as="span">{data.release_year}</Box>
                            <Box as="span">{data.type}</Box>
                        </Box>
                        <Box as="span" color="text.secondary">{data.duration}</Box>
                    </Box>
                </Box>

                <Box>
                    <Typography
                        color="text.secondary"
                        sx={{
                            marginTop: '2rem',
                        }}
                    >
                        {data.description}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default FavoriteCard;