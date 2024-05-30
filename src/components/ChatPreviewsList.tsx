import { gs } from "get-module-style";
import { ChatPreview, ChatPreviewProps } from "./ChatPreview";

interface ChatPreviewsListProps {
    previews: ChatPreviewProps[];
    className?: string;
}

export const ChatPreviewsList = (props: ChatPreviewsListProps) => {
    return (
        <div className={gs("flex flex-col items-start", props.className)}>
            {props.previews.map(p => <ChatPreview {...p} key={p.name} />)}
        </div>
    );
};