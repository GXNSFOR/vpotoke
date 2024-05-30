import { ChatPreviewProps } from "./ChatPreview";
import { ChatPreviewsList } from "./ChatPreviewsList";

const chats: ChatPreviewProps[] = [
    {
        img: '/images/chat-1.png',
        message: 'Привет, как дела?',
        messageAuthor: 'Пользователь',
        name: 'Знакомства в Майами'
    },

    {
        img: '/images/chat-2.png',
        message: 'Ну я и сгенерил текст...',
        messageAuthor: 'Пользователь 2',
        name: 'Нейросети сегодня'
    }
];

export const Sidebar = () => {
    return (
        <div className="w-[420px] h-[100vh] p-5 bg-gray-900 flex-col justify-start items-start gap-[25px]">
            <h1 className="text-indigo-500 text-[40px] font-semibold">ВПотоке</h1>

            <ChatPreviewsList className="mt-[25px]" previews={chats} />
        </div>
    );
};