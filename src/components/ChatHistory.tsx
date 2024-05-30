import { gs } from "get-module-style";
import { UserMessages, UserMessagesProps } from "./UserMessages";

export interface ChatHistoryProps {
    className?: string;
    userMessages: UserMessagesProps[];
}

export const ChatHistory = (props: ChatHistoryProps) => {
    const { className, userMessages } = props;

    return (
        <div className={gs("p-[30px] flex flex-col gap-[20px]", className)}>
            {userMessages.map((msg, i) => {
                return (
                    <UserMessages key={i} {...msg} />
                );
            })}
        </div>
    );
};