import { ConversationSideBarStyle, ConversationSidebarContainer, ConversationSidebarHeader, ConversationSidebarItem } from "../../utils/styles"
import { TbEdit } from 'react-icons/tb'
import { ConversationType } from "../../utils/types"
import { FC } from "react";
import styles from './index.module.scss'

type Props = {
    conversations: ConversationType[];
}

export const ConversationSideBar: FC<Props> = ({
    conversations}) => {
    return (
        <ConversationSideBarStyle>
            <ConversationSidebarHeader>
                <h1>Conversations</h1>
                <TbEdit size={40}/>
            </ConversationSidebarHeader>
            <ConversationSidebarContainer>
            {conversations.map((conversation) =>
            <ConversationSidebarItem>
                <div className={styles.conversationAvatar} ></div>
                <div>
                    <span className={styles.conversationName}>{conversation.name}</span>
                    <span className={styles.
                        conversationLastMessage}>
                            {conversation.lastMessage}
                    </span>
                </div>
            </ConversationSidebarItem>
            )}
            </ConversationSidebarContainer>
        </ConversationSideBarStyle>
    )
}