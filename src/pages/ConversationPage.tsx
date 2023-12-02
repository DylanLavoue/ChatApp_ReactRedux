import { Outlet, useParams } from "react-router-dom"
import { ConversationSideBar } from "../components/conversations/ConversationSideBar"
import { Page } from "../utils/styles"
import { ConversationPanel } from "../components/conversations/ConversationPanel";

export const ConversationsPage = () => {
    const { id } = useParams();
    return (
        <Page>
            <ConversationSideBar/>
            {!id && <ConversationPanel/> }
            <Outlet/>
        </Page>
    )
}