
import { gql } from '@apollo/client';

export const ADD_POST = gql`
    mutation CreateAppUser($createPostInput: CreatePostInput!) {
        createPost(createPostInput: $createPostInput) {
            authorId
            postImg
            text
            title
        }
    }
`

export const UPDATE_POST = gql`
    mutation UpdatePost($updatePostInput: UpdatePostInput!) {
        updatePost(updatePostInput: $updatePostInput) {
            id
            authorId
            postImg
            text
            title
            createdAt
            updatedAt
        }
    }
`

export const DELETE_POST = gql`
    mutation CreateAppUser($removePostId: Int!) {
        removePost(id: $removePostId) {
            id
        }
    }
`