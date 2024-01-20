"use client";
import { useRef, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";

import useHasMounted from "@/app/hooks/useHasMounted";
import { useInView } from "react-intersection-observer";

import { useQuery } from "@apollo/client";
import { GET_SHOWS } from "@/app/utils/graphql-queries";



function ShowsCard() {
    const hasMounted = useHasMounted();

    const cardRef = useRef();

    const [ref, inView] = useInView({
        root: cardRef?.current,
    });

    const { loading, error, data, fetchMore } = useQuery(
        GET_SHOWS,
        {variables: { limit: 8, offset: 0 }}
    );

    useEffect(() => {
        if (inView) {
            fetchMore({
                variables: {
                    offset: data?.netflix_shows?.length+1,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return {
                        netflix_shows: [
                            ...prev.netflix_shows,
                            ...fetchMoreResult.netflix_shows,
                        ]
                    }
                },
            });
        }
    }, [inView]);

    if (!hasMounted) {
        return null;
    }

    return (
        <Card
            sx={{
                margin: '1.5rem 3rem',
                borderRadius: '0.5rem',
                width: '30rem',
                height: '20rem',
                overflowY: 'scroll',
            }}
            ref={cardRef}
        >
            <Typography
                variant="h2"
                sx={{
                    padding: '1rem 1.5rem',
                    fontWeight: '500',
                    fontSize: '1.5rem',
                }}
            >
                Available Netflix Shows
            </Typography>
            {data && data.netflix_shows.map((show, index) => (
                <CardContent
                    key={show.title}
                    sx={{
                        padding: '0.5rem 1.5rem',
                    }}
                    ref={index === data.netflix_shows.length - 2 ? ref : null}
                >
                    <Box display="flex" alignItems="center" gap={2}>
                        <Avatar alt={show.title} src="/netflix.jpg" sx={{ width: '2.5rem', height: '2.5rem', }} />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'start',
                            }}
                        >
                            <Box as="span">{show.title}</Box>
                            <Box as="span" color="text.secondary" >{show.release_year}</Box>
                        </Box>
                    </Box>
                    {loading && <p>Loading...</p>}
                </CardContent>
            ))}
            {loading && new Array(8).fill(0).map((_, index) => (
                <CardContent
                    key={index}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        padding: '0.5rem 1.5rem',
                    }}
                >
                    <Box as="span">
                        <Skeleton variant="text" width={210} height={60} />
                    </Box>
                    <Box as="span" color="text.secondary" >
                        <Skeleton variant="text" width={210} height={60} />
                    </Box>
                </CardContent>
            ))}
            {error && <p>Something Went Wrong...</p>}
        </Card>
    );
};

export default ShowsCard;