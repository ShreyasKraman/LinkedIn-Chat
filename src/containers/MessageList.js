import { connect } from "react-redux"
import MessageListComponent from "../components/MessageList"


export const MessageList = connect(state => ({
    messages: state.messages
}), {})(MessageListComponent)
