import {
    onContentTextareaPostCreator,
    onHeaderTextareaPostCreator,
    onImageTextareaPostCreator,
    publishPostCreator
} from "../../../../Redux/Reducer/PostsPageReducer";
import React from "react";
import contentContext from "../../../../ContentContext";
import AddingNewPost from "./AddingNewPost";

const AddingNewPostContainer = () => {
    return (
        <contentContext.Consumer>
            {
                store => {
                    let postsPage = store.getState().postsPage
                    let addPostClickContainer = () => store.dispatch(publishPostCreator())
                    let headerChangesContainer = (event) => store.dispatch(onHeaderTextareaPostCreator(event))
                    let imgUrlChangesContainer = (event) => store.dispatch(onImageTextareaPostCreator(event))
                    let contentChangesContainer = (event) => store.dispatch(onContentTextareaPostCreator(event))

                    return (
                        <AddingNewPost headerText={postsPage.textareaPostHeader}
                                       imageText={postsPage.textareaPostImage}
                                       contentText={postsPage.textareaPostText}
                                       addPostClickContainer={addPostClickContainer}
                                       headerChangesContainer={headerChangesContainer}
                                       imgUrlChangesContainer={imgUrlChangesContainer}
                                       contentChangesContainer={contentChangesContainer}/>
                    )
                }
            }
        </contentContext.Consumer>
    )
}

export default AddingNewPostContainer