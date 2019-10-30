
import Friends from './Friends';
import {connect} from 'react-redux'



let mapStateToProps=(state)=>{
    return {friendPage:state.friendPage}
}

let mapDispatchToProps=()=>{

}

const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)

export default FriendsContainer