
import {addPostActionCreator, onPostChangeActionCreator} from '../../Redux/Redusers/ProfileReducer'
import MyPost from './MyPost/MyPost';
import { connect } from 'react-redux';


let mapDispatchToProps=(dispatch)=>{
    return{
        addPosts:(text)=>{dispatch(addPostActionCreator(text))}
    }
   
}

let mapStateToProps =(state)=> {
        return{
            postData: state.profilePage.postData,      
        }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
export default MyPostContainer;