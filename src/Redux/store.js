import dialogReducer from "./Redusers/DialogReducer";
import profileReducer from "./Redusers/ProfileReducer";
import sidebarReducer from "./Redusers/SidebarReducer";

let store = {
    _state: {
        dialogPage: {
            dialogList: [{ name: 'Ivan', id: 1 }, { name: 'Bob', id: 2 }, { name: 'Ann', id: 3 }, { name: 'Maks', id: 4 }],
            messages: [{ text: 'Hi', id: 1 },
            { text: 'Hi!!!', id: 1 },
            { text: 'Hello', id: 1 },
            { text: 'Im here', id: 1 },
            { text: 'Thanks', id: 1 },
            { text: 'Ho no', id: 1 }],
            newMessageText: ""
        },

        friendPage: {
            person: [
                { id: 1, name: 'Ivan', ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png' },
                { id: 2, name: 'Ted', ava: 'http://ekladata.com/JHPCvt7p3Te7JSG53dAlYORICUw.png' },
                { id: 3, name: 'Nona', ava: 'https://img1.picmix.com/output/stamp/normal/1/6/4/0/660461_8040a.png' }
            ]
        },
        profilePage: {
            postData: [
                { id: 1, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png', message: 'Who are you?', like: 100 },
                { id: 2, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png', message: 'Who are you?', like: 144 },
                { id: 3, ava: 'https://img1.picmix.com/output/stamp/normal/1/6/4/0/660461_8040a.png', message: 'Hello', like: 120 },
                { id: 4, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png', message: 'Who are you?', like: 111 }
            ],
            newPostText: ""

        }
    },

    getState() {
        return this._state;
    },
    _renderTree() {
        console.log(alert('fhfhhfhf'))
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.friendPage = sidebarReducer(this._state.friendPage, action)
        this._renderTree(this._state)
    },

    subscriber(observer) {
        this._renderTree = observer;
    }

}

export default store