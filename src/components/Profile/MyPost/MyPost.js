
import React from 'react'
import Post from './Post/Post'
import style from './MyPost.module.css'
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../../utils/validators';

const maxLength20 = maxLengthCreator(20)

let ProfilePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={style.input} type="text" name='postText' component={Textarea} validate={[required, maxLength20]} /> <br></br>
            <button className={style.button}>ADD POST</button>
        </form>
    )

}

ProfilePostForm = reduxForm({ form: 'profilePost' })(ProfilePostForm)


class MyPost extends React.Component  {

//     const MyPost = React.memo(props =>{
//   return<></>
//     }
//     )

    componentDidMount(){
        setTimeout(()=>{
            this.setState({a:1})
        }, 3000)
    }

    onSubmit = (value) => {
        console.log(value.postText)
        this.props.addPosts(value.postText)
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps!=this.props||nextState!=this.state
    }


render(){
    console.log('render')
    return (
       
        <div className={style.myPost}>
            <ProfilePostForm onSubmit={this.onSubmit} />
            {this.props.postData.map(post => {
                return <Post key={post.id}  {...post} />
            })}
        </div>
    )
}
    
}


export default MyPost;