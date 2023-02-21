import {GET_ALL_POSTS} from "../queries/postQuery";
import {useMutation, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import {formatDateFunc} from "../functions/date";
import {useState} from "react";
import ModalService from "./modal/ModalService";
import EditPostForm from "./Form/EditPostForm";
import Button from "./buttons/Button";
import {DELETE_POST, UPDATE_POST} from "../mutations/PostMutations";


type IPost =  {
    id: number;
    authorId: number;
    title: string;
    text: string;
    postImg: string;
    createdAt: any;
    updatedAt: any;
}

export function Posts() {
    const [isMenuOpenIndex, setIsMenuOpenIndex] = useState(0);
    const { loading, error, data } = useQuery(GET_ALL_POSTS);
    const [deletePost] = useMutation(DELETE_POST, { refetchQueries: [ { query: GET_ALL_POSTS }]});
    const [editPost] = useMutation(UPDATE_POST, { refetchQueries: [ { query: GET_ALL_POSTS }]});

    if (loading) return 'Loading...';

    if (error) return `Error! ${error.message}`;

    const handleOpenMenu = (id : number) => {
        if(isMenuOpenIndex === id) return setIsMenuOpenIndex(0);
        setIsMenuOpenIndex(id);
    }

    if(data.posts && data.posts.length === 0) {
        return <p>No posts</p>
    }

    return (
        <div className={"posts-wrapper"}>
            {data.posts.map(({ id, title, text, postImg, createdAt, updatedAt } : IPost) => (
                <div className={"posts-wrapper__post"} key={id}>
                   <div className={"posts-wrapper__post__header"}>
                       <span className={"posts-wrapper__post__header__title"}>{title}</span>
                       <div className={"posts-wrapper__post__header__menu"}>
                           <button onClick={() => handleOpenMenu(id)} type={"button"}>...</button>
                           { isMenuOpenIndex === id ? (
                               <ul>
                                   <li>
                                       <Button className={"w-full"} background={"transparent"} onClick={() => ModalService.open(({ onClose }) => {
                                           return (
                                               <EditPostForm
                                                   title={"Edit post"}
                                                   onClose={onClose}
                                                   defaultValues={{ title, text, postImg}}
                                                   onSubmit={async (data) => {
                                                       const finalObject = { ...data };
                                                       finalObject.id = id;

                                                       await editPost({ variables: {updatePostInput : finalObject}});
                                                       onClose();
                                                   }}
                                               />
                                           )
                                       })
                                       }>Edit</Button>
                                   </li>
                                   <li>
                                       <Button onClick={() => deletePost({ variables: { removePostId: id}})} className={"w-full"} background={"transparent"} type={"button"}>
                                           Delete
                                       </Button>
                                   </li>
                               </ul>
                           ) : null }
                       </div>
                   </div>
                   <div className={"posts-wrapper__post__img"}>
                       <img src={postImg} alt={"post-img"} />
                   </div>
                    <div className={"posts-wrapper__post__description"}>
                        { text }
                    </div>
                    <div className={"posts-wrapper__post__footer"}>
                        { updatedAt ? formatDateFunc(updatedAt) : formatDateFunc(createdAt) }
                        <div className={"posts-wrapper__post__footer__view-post"}>
                            <Link to={`/post/${id}`}>View Post</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    );
}
