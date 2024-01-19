import { gql } from "@apollo/client";

export const GET_LATEST_SHOWS = gql`
    query GET_LATEST_SHOWS($limit:Int!, $offset:Int!) {
        netflix_shows(limit: $limit, order_by: {release_year: desc}, offset: $offset) {
          title
          release_year
        }
    }
`;