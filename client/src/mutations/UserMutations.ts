import { gql } from '@apollo/client';

export const LOGIN_APP_USER = gql`
    mutation LoginAppUser($loginAppUserInput: LoginAppUserInput!) {
        loginAppUser(loginAppUserInput: $loginAppUserInput) {
            id
            email
            username
            password
        }
    }
`