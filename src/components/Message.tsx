import { gs } from "get-module-style";

export interface MessageProps {
    message: string;
    messageAuthor?: string;
    className?: string;
};

export const Message = (props: MessageProps) => {
    const {
        message,
        messageAuthor,
        className,
    } = props;

    return (
        <div className={gs(className, 'flex flex-col gap-[10px] p-[15px] bg-gray-900')}>
            {messageAuthor && (
                <span className="text-violet-400 font-semibold">{messageAuthor}</span>
            )}

            <p className="text-white">
                {message}
            </p>
        </div>
    );
};