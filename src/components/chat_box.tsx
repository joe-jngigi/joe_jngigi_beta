import React from "react";

import { useChat } from "ai/react";

export const ChatBox = () => {
  const {
    isLoading,
    messages,
    input,
    error,
    handleSubmit,
    handleInputChange,
    setMessages,
  } = useChat();
  return <div className="">ChatBot</div>;
};

