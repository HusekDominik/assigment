import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
    query Query {
        posts {
            authorId
            createdAt
            postImg
            id
            text
            title
            updatedAt
        }
    }
`

export const GET_SINGLE_POST = gql`
    query Query($postId: Int!) {
        post(id: $postId) {
            authorId
            createdAt
            id
            text
            postImg
            title
            updatedAt
        }
    }
`