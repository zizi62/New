const ADD_MESSAGE = 'ADD-MESSAGE'


let initialState ={
    dialogList: [{ name: 'Ivan', id: 1 }, { name: 'Bob', id: 2 }, { name: 'Ann', id: 3 }, { name: 'Maks', id: 4 }],
            messages: [{ text: 'Hi', id: 1 },
            { text: 'Hi!!!', id: 1 },
            { text: 'Hello', id: 1 },
            { text: 'Im here', id: 1 },
            { text: 'Thanks', id: 1 },
            { text: 'Ho no', id: 1 }],
           
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
    
            let newMessage = { text: action.newMessageText, id: 3 }
            return{
                ...state,
                messages:[...state.messages, newMessage ],
            }  
        }
            
    
            
        default:
            return state
    }
}
export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, newMessageText: text})


export default dialogReducer;