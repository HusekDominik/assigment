import * as React from 'react';
import withNavbarComponent from "../components/Navbar";
import { useParams } from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_ALL_POSTS, GET_SINGLE_POST} from "../queries/postQuery";

type Props = {

}

const PostDetailPage: React.FC<Props> = () => {
    let { id } = useParams();

    if(!id) return <p>Not a valid post</p>

    const {  loading, error, data } = useQuery(GET_SINGLE_POST, { variables: { postId: parseInt(id) }  });

    if(loading) return <p>Loading...</p>

    if(error) return <p>{error.message}</p>


    if(!data.post) return <p>No data</p>

    return (
        <div>
            <p>Všechny informace o postu</p>

            <p> Id: {data.post.id}</p>
            <p> Author ID: {data.post.authorId}</p>
            <p> Title: {data.post.title}</p>
            <p> Description: {data.post.text}</p>
            <p> Image: {data.post.postImg}</p>
            <p> Created At: {data.post.createdAt}</p>
            <p> Updated At: {data.post.updatedAt}</p>
        </div>
    )
}

export default withNavbarComponent(PostDetailPage);