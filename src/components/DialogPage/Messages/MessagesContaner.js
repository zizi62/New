
import { addMessageActionCreator } from '../../../Redux/Redusers/DialogReducer'
import Messages from './Messages';
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => { dispatch(addMessageActionCreator(message)) },

    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer