'use client';

import { useState } from "react";
import { ChatHistory } from "@/components/ChatHistory";
import { MessageInput } from "@/components/MessageInput";
import { Sidebar } from "@/components/Sidebar";
import { UserMessagesProps } from "@/components/UserMessages";

const userMessages: UserMessagesProps[] = [
  {
    author: 'Великий маг',
    authorImage: '/images/user-1.png',
    messages: [
      "Forgotten Realms (рус. Забытые Королевства) — сеттинг для ролевой игры Dungeons & Dragons, разработанный канадским писателем и игровым дизайнером Эдом Гринвудом (Ed Greenwood). Этот сеттинг был самым популярным сеттингом D&D в 90-х. В деле популяризации Забытых Королевств большие заслуги принадлежат серии романов Р. Сальваторе и многочисленным компьютерным ролевым играм, таким как: Pool of Radiance и Baldur's Gate. Основное место действия сеттинга — континент Фаэрун, часть подобной Земле планеты Торил."
    ]
  },

  {
    author: 'Оверлорд',
    authorImage: '/images/user-2.png',
    messages: [
      'Какой унылый лор, кто бы мог подумать...',
      'Ну да ладно, зато играется норм',
    ],
  },

  {
    author: 'Ультра нагибатор',
    authorImage: '/images/user-3.png',
    messages: [
      'Я буду кастовать что @&@!&@!!!!',
      'Как хочеца маны... уфф',
    ],
  },
];

export default function Home() {
  const [chatMessages, setChatMessages] = useState(userMessages);

  const onMessageSent = (msg: string) => {
    const newMessages = [...chatMessages];
    newMessages[newMessages.length - 1].messages.push(msg);

    setChatMessages(newMessages);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />

        <main className="flex flex-col flex-grow">
          <ChatHistory className="flex-grow" userMessages={chatMessages} />
          <MessageInput onMessageSend={onMessageSent} />
        </main>
      </div>
    </>
  );
}
