"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useHasMounted from "@/app/hooks/useHasMounted";

import { useQuery } from "@apollo/client";
import { GET_LATEST_SHOWS } from "@/app/utils/graphql-queries";



function LatestShowsCard() {
    const hasMounted = useHasMounted();
    const { loading, error, data } = useQuery(GET_LATEST_SHOWS,
        {
            variables: { limit: 5, offset: 0 },
        }
    );

    if (!hasMounted) {
        return null;
    }


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <Card
            sx={{
                margin: '1.5rem 3rem',
            }}
        >
            {data.netflix_shows.map((show) => (
                <CardContent
                    key={show.title}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem 1.5rem',
                    }}
                >
                    <span>{show.title}</span>
                    <span>{show.release_year}</span>
                </CardContent>
            ))}
        </Card>
    );
};

export default LatestShowsCard;