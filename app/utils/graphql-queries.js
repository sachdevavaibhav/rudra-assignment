import { gql } from "@apollo/client";

export const GET_SHOWS = gql`
    query GET_LATEST_SHOWS($limit:Int!, $offset:Int!) {
        netflix_shows(limit: $limit, offset: $offset) {
          title
          release_year
        }
    }
`;

export const GET_SHOWS_DIRECTORS = gql`
    query GET_SHOWS_DIRECTORS($limit:Int!, $offset:Int!) {
        netflix_shows(limit: $limit, offset: $offset, distinct_on: director, where: {country: {_neq: "null"}}) {
            director
            country
        }
    }
`;