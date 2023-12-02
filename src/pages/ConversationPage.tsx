import { Outlet, useParams } from "react-router-dom"
import { ConversationSideBar } from "../components/conversations/ConversationSideBar"
import { Page } from "../utils/styles"
import { ConversationPanel } from "../components/conversations/ConversationPanel";
import mockConversations from '../__mocks__/conversation';

export const ConversationsPage = () => {
    const { id } = useParams();
    return (
        <Page>
            <ConversationSideBar conversations={mockConversations}/>
            {!id && <ConversationPanel/> }
            <Outlet/>
        </Page>
    )
}