import * as React from "react";
import withNavbarComponent from "../components/Navbar";
import Button from "../components/buttons/Button";
import ModalService from "../components/modal/ModalService";
import EditPostForm from "../components/Form/EditPostForm";
import {Posts} from "../components/Posts";
import "../components/post.scss";
import {useMutation} from "@apollo/client";
import {ADD_POST} from "../mutations/PostMutations";
import {GET_ALL_POSTS} from "../queries/postQuery";
import {LoginContext} from "../context/LoginContext";
import {useContext} from "react";

type Props = {

}

const MainPage : React.FC<Props> = () => {
    const { userData } = useContext(LoginContext);
    const [ addPost ] = useMutation(ADD_POST, { refetchQueries: [ { query: GET_ALL_POSTS }]});

    return (
       <div>
           <Button background={"grey"} onClick={() => ModalService.open(({ onClose }) => {
               return (
                   <EditPostForm
                        title={"Add post"}
                        onClose={onClose}
                        onSubmit={async(data) => {
                            const updatedData = {...data};
                            updatedData.authorId = userData.id;
                            await addPost({ variables: {createPostInput : updatedData} });
                            onClose();
                        }}
                    />
               )
           })
           }>Add post</Button>
           {Posts()}
       </div>
    );
};

export default withNavbarComponent(MainPage);
