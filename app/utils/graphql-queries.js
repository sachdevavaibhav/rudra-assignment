import { gql } from "@apollo/client";

export const GET_SHOWS = gql`
    query GET_LATEST_SHOWS($limit:Int!, $offset:Int!) {
        netflix_shows(limit: $limit, offset: $offset) {
          title
          release_year
        }
    }
`;