export const required= value => {

    if(value) return undefined;
    return 'Field is required'
}

export const maxLengthCreator =(maxNum)=> value => {
    if(value&&value.length > maxNum) return `Max length is ${maxNum} simbols`;
    return undefined
}