import Image from "next/image";

export interface ChatPreviewProps {
    img: string;
    name: string;
    message: string;
    messageAuthor: string;
}

export const ChatPreview = (props: ChatPreviewProps) => {
    const {
        img,
        name,
        message,
        messageAuthor
    } = props;

    return (
        <div className="cursor-pointer h-[70px] py-[5px] justify-center items-center gap-[15px] inline-flex">
            <Image src={img} alt={name} width={60} height={60} className="rounded-full" />

            <div className="flex flex-col gap-[10px] whitespace-nowrap overflow-hidden">
                <span className="text-xl font-semibold text-white">{name}</span>

                <div className="gap-[5px] flex">
                    <span className="text-violet-400 ">{messageAuthor}:</span>
                    <span className="text-white text-ellipsis overflow-hidden">{message}</span>
                </div>
            </div>
        </div>
    );
};