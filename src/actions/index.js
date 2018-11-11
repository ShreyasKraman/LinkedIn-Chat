import * as types from '../constants/ActionTypes'

let nextMessageID = 0
const nextUserUD = 0

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageID++,
    message,
    author
})

export const addUser = name => ({
    type: types.ADD_USER,
    id:nextUserUD,
    name
})

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageID++,
    message,
    author
})

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})

