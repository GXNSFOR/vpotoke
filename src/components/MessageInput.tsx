'use client';

import { gs } from "get-module-style";
import { useState } from "react";

export interface MessageInputProps {
    className?: string;
    onMessageSend: (message: string) => void;
}

export const MessageInput = (props: MessageInputProps) => {
    const { onMessageSend, className } = props;

    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message) return;

        onMessageSend(message);
        setMessage("");
    };

    return (
        <div className={gs("bg-gray-900 flex gap-[10px] items-center", className)}>
            <input
                type="text"
                value={message}
                placeholder="Введите сообщение..."
                onChange={(e) => setMessage(e.target.value)}
                className={gs("flex-1 text-lg p-[15px] bg-gray-900 text-zinc-50 outline-none")}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSend();
                    }
                }}
            />

            <button className="p-[15px] text-white" onClick={handleSend}>Отправить</button>
        </div>
    );
};