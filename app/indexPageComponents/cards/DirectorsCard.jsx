"use client";
import { useRef, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import useHasMounted from "@/app/hooks/useHasMounted";
import { useInView } from "react-intersection-observer";

import { useQuery } from "@apollo/client";
import { GET_SHOWS_DIRECTORS } from "@/app/utils/graphql-queries";



function DirectorsCard() {
    const hasMounted = useHasMounted();

    const cardRef = useRef();

    const [ref, inView] = useInView({
        root: cardRef?.current,
    });

    const { loading, error, data, fetchMore } = useQuery(
        GET_SHOWS_DIRECTORS,
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Card
            sx={{
                margin: '1.5rem 3rem',
                borderRadius: '1rem',
                width: '25rem',
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
                Directors of Netflix Shows
            </Typography>
            {data.netflix_shows.map((show, index) => (
                <CardContent
                    key={show.director}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'start',
                        padding: '0.5rem 1.5rem',
                    }}
                    ref={index === data.netflix_shows.length - 2 ? ref : null}
                >
                    <Box as="span">{show.director}</Box>
                    <Box as="span" color="text.secondary" >{show.country}</Box>
                    {loading && <p>Loading...</p>}
                </CardContent>
            ))}
        </Card>
    );
};

export default DirectorsCard;