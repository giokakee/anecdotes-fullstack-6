

export const filter = ( state = '', action) => {
    switch(action.type){
       case 'SET_FILTER':
           state = action.data.filter
           return state
        default:
            return state
    }
}

export const changeFilter = (content) => {
    return {
        type: 'SET_FILTER',
        data:{
            filter: content
        }
    }
}