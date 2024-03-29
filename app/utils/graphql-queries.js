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

export const GET_SHOW_WITH_DESCRIPTION = gql`
    query GET_SHOW_WITH_DESCRIPTION {
        netflix_shows_by_pk(show_id: "s2") {
            title
            description
            duration
        }
    }
`;

export const GET_INDIAN_SHOWS = gql`
    query GET_INDIAN_SHOWS {
        netflix_shows(limit: 4, where: {country: {_eq: "India"}}) {
            title
            duration
        }
    }
`;

export const TOTAL_UNIQUE_SHOWS = gql`
query TOTAL_UNIQUE_SHOWS {
    netflix_shows_aggregate {
      aggregate {
        count(columns: show_id, distinct: true)
      }
    }
  }
`;

export const LATEST_RELEASE = gql`
query LATEST_RELEASE {
    netflix_shows(limit: 2, order_by: {date_added: desc_nulls_last}) {
      title
      description
      date_added
    }
  }
`;

export const SHOW_RATING = gql`
query SHOW_RATING {
    netflix_shows(limit: 7) {
      title
      rating
    }
  }
`;