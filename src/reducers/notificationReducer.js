export const notificationReducer = (state = '', action) => {
    switch(action.type){
        case 'ADDED':
            return `${action.data.notification}`
        case 'VOTED':
            return `${action.data.notification}`
        default:
            return state
    }
}

export const setNotification = (type, notification) => {
    return{
        type,
        data: {
            notification
        }
    }
}