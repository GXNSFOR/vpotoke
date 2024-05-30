import Image from "next/image";
import { Message } from "./Message";

export interface UserMessagesProps {
    messages: string[];
    authorImage: string;
    author: string;
}

export const UserMessages = (props: UserMessagesProps) => {
    const {
        messages,
        authorImage,
        author,
    } = props;

    return (
        <div className="flex gap-[20px]">
            <Image className="w-[50px] h-[50px]" alt={author} width={50} height={50} src={authorImage} />

            <div className="flex flex-col gap-[10px]">
                {messages.map((msg, i) => {
                    return (
                        <Message key={i} message={msg} messageAuthor={i === 0 ? author : undefined} />
                    );
                })}
            </div>
        </div>
    );
};