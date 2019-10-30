let renderTree = ()=> {
    console.log(alert('fhfhhfhf'))
}

let state = {
    dialogPage: {
        dialogList: [{name:'Ivan', id:1},{name: 'Bob', id:2},{ name: 'Ann', id:3}, {name: 'Maks', id:4} ],
        messages: [{text: 'Hi', id:1},
        {text: 'Hi!!!', id:1},
        {text: 'Hello', id:1},
        {text: 'Im here', id:1},
        {text: 'Thanks', id:1},
        {text: 'Ho no', id:1}]
    },

    friendPage: {
        person :[
        {id:1 ,name:'Ivan', ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png' },
        {id:2 ,name:'Ted', ava: 'http://ekladata.com/JHPCvt7p3Te7JSG53dAlYORICUw.png' },
        {id:3 ,name:'Nona', ava: 'https://img1.picmix.com/output/stamp/normal/1/6/4/0/660461_8040a.png' }
    ]
    },
    profilePage :{
        postData : [
            {id:1, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png' , message: 'Who are you?',  like: 100},
            {id:2, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png' , message: 'Who are you?', like: 144},
            {id:3, ava: 'https://img1.picmix.com/output/stamp/normal/1/6/4/0/660461_8040a.png' , message: 'Hello', like: 120},
            {id:4, ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png' , message: 'Who are you?', like: 111}
        ],
        newPostText: ""
        
    },

    addPost(){
         let newPost =  {
             id:6, 
             ava: 'https://olimpik24.ru/wp-content/uploads/2017/06/b_1-300x292.png' , 
             message: state.profilePage.newPostText, 
             like: 0}
        state.profilePage.postData.push(newPost)
        renderTree()
        state.profilePage.newPostText = '';
        

    },
    onPostChange(text){
        state.profilePage.newPostText = text;
        renderTree()
    }

}
export const subscriber = (observer) => {
    renderTree = observer;
}

export default state