import {store} from "../Data";

const postsPageReducer = (action, postsPage) => {
    switch (action.type) {
        case 'POST-CONTENT-TEXTAREA-CHANGES':
            postsPage.textareaPostText = action.text
            return postsPage
        case 'POST-IMAGE-TEXTAREA-CHANGES':
            postsPage.textareaPostImage = action.text
            return postsPage
        case 'POST-HEADER-TEXTAREA-CHANGES':
            postsPage.textareaPostHeader = action.text
            return postsPage
        case 'PUBLISH-POST':
            if (postsPage.textareaPostText != '' && postsPage.textareaPostHeader != '') {
                let newPost = {
                    id: (postsPage.postsData.length + 1),
                    heading: postsPage.textareaPostHeader,
                    previewImage: postsPage.textareaPostImage,
                    postContent: postsPage.textareaPostText
                }
                postsPage.postsData.push(newPost)
                postsPage.textareaPostHeader = ''
                postsPage.textareaPostImage = ''
                postsPage.textareaPostText = ''
            }
            return postsPage
        default:
            return postsPage
    }
}

export const onHeaderTextareaPostCreator = (text) => store.dispatch({type:'POST-HEADER-TEXTAREA-CHANGES', text:text})
export const onContentTextareaPostCreator = (text) => store.dispatch({type: 'POST-CONTENT-TEXTAREA-CHANGES', text:text})
export const onImageTextareaPostCreator = (text) => store.dispatch({type: 'POST-IMAGE-TEXTAREA-CHANGES', text:text})
export const publishPostCreator = () => store.dispatch({type: 'PUBLISH-POST'})

export default postsPageReducer