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

export const GET_FAVORITE_SHOWS = gql`
    query GET_FAVORITE_SHOW {
        netflix_shows_by_pk(show_id: "s5") {
            country
            description
            duration
            title
            type
            release_year
            cast_members
        }
    }
`;