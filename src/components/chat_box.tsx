import React from "react";

import { Message, useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { SiGoogleassistant } from "react-icons/si";
import { FaUserMd } from "react-icons/fa";

interface messageProps {
  messages: Message;
}

export const ChatBox = () => {
  const {
    isLoading,
    messages,
    input,
    error,
    handleSubmit,
    handleInputChange,
    setMessages,
  } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content:
          "Gemini Messages Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium aut doloremque exercitationem? Nam eius mollitia obcaecati, asperiores quaerat fugit rem molestias, ullam voluptates perferendis deserunt quos praesentium temporibus i",
      },
      { id: "2", role: "user", content: "Hello prompt user" },
    ],
  });
  return (
    <div className="overflow-y-auto h-full">
      {messages.map((message) => (
        <MessageBox messages={message} key={message.id} />
      ))}
    </div>
  );
};

const MessageBox: React.FC<messageProps> = ({
  messages: { role, content },
}) => {
  const isAImessage = role === "assistant";
  return (
    <div className={cn("mb-4 flex p-2 rounded-lg", isAImessage ? "bg-red-600 me-5 justify-start" : "bg-green-500 ms-5 justify-end")}>
      {isAImessage ? (
        <SiGoogleassistant size={17} className="text-emerald-500 flex-none mr-2" />
      ) : (
        <FaUserMd />
      )}
      {content}
    </div>
  );
};
