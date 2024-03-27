import React, { useEffect, useRef } from "react";

import { Message, useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { SiGoogleassistant } from "react-icons/si";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { FaUserMd } from "react-icons/fa";

import ReactMarkdown from "react-markdown";
import { ClockLoader } from "react-spinners";
import { Textarea } from "./ui/textarea";
interface messageProps {
  message_obj: Message;
}

export const ChatBox = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
          " ullam voluptates perferendis deserunt quos praesentium temporibus i",
      },
      { id: "2", role: "user", content: "Hello prompt user" },
      {
        id: "3",
        role: "assistant",
        content: `
# Markdown Example

This is a **bold** text and this is an _italic_ text. Also, you can use [OpenAI](https://js.langchain.com/docs/get_started/installation), which has also been well documented, but first we install the langchain, which has already been added to the project.

## Lists

### Ordered List
1. First item
2. Second item
3. Third item

### Unordered List
- Item 1
- Item 2
- Item 3

## Links and Images

Here is a [link to Google](https://www.google.com/) and an ![image](https://github.com/joe-jngigi/joe_jngigi-Beta/blob/next/Screenshot%202023-11-29%20170606.png)

## Code

Inline code: const greeting = "Hello, world!"

Block code:
\`\`\`PYTHOn
console.log(greet("Alice"));
if (condition) {
  return User
}
\`\`\`


        `,
      },
      {
        id: "4",
        role: "user",
        content:
          "Hello prompt userp-2p-2p-2p-2p-2p-2p-2p-2Hello promptHello promptHello promptHello promptHello promptHello promptHello promptHello prompt",
      },
      {
        id: "5",
        role: "assistant",
        content: `
\`\`\`PYTHOn
console.log(greet("Alice"));
if (condition) {
  return User
}
\`\`\`

Gemini Messages Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit laudantium aut doloremque exercitationem? Nam eius mollitia obcaecati, asperiores quaerat fugit rem molestias, ullam voluptates perferendis deserunt quos praesentium temporibus i
`,
      },
      { id: "6", role: "user", content: "Hello prompt user" },
      {
        id: "7",
        role: "assistant",
        content:
          "Gemini Messages Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium aut doloremque exercitationem? Nam eius mollitia obcaecati, asperiores quaerat fugit rem molestias, ullam voluptates perferendis deserunt quos praesentium temporibus i",
      },
      {
        id: "8",
        role: "user",
        content: `
- \`{isAImessage ? ... : ...}\` is a conditional (ternary) operator. It checks if \`isAImessage\` is true or false.
- If \`isAImessage\` is true (meaning the message is from the assistant), it renders the content preceded by the word "Assistant".
- If \`isAImessage\` is false (meaning the message is from the user), it renders the content preceded by the word "User".`,
      },
      {
        id: "9",
        role: "assistant",
        content:
          "Gemini Messages Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laudantium aut doloremque exercitationem? Nam eius mollitia obcaecati, asperiores quaerat fugit rem molestias, ullam voluptates perferendis deserunt quos praesentium temporibus i",
      },
      { id: "10", role: "user", content: "Hello prompt user" },
    ],
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  /**
   * This will return a boolean, and what it does is check if the last role is user
   */
  const isLastMessageAssistant = messages[messages.length - 1]?.role === "user";
  return (
    <div className="h-full bg-slate-100 dark:bg-[rgb(15,15,15)] p-2 rounded-md">
      <div className="h-full overflow-auto">
        <div className="h-full overflow-y-auto" ref={scrollRef}>
          {/* Messages */}
          {messages.map((message) => (
            <MessageBox message_obj={message} key={message.id} />
          ))}

          {/* Loading */}
          {isLoading && isLastMessageAssistant && (
            <MessageBox
              message_obj={{
                ui: <ClockLoader color="#10B880" size={40} />,
                role: "assistant",
                id: "assistant",
                content: "",
              }}
            />
          )}

          {/* If Messages is empty */}
          {!error && messages.length === 0 && (
            <div className="flex-c-center flex-col h-full text-center gap-5">
              <SiGoogleassistant size={32} className="text-emerald-500" />
              <p className="flex flex-col items-center">
                <span className="font-medium">Welcome! Start Chat</span>
                <span className="text-xs text-slate-400 pt-2">
                  This is my assistant. It will answer any question about me and
                  any information on the web app
                </span>
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <MessageBox
              message_obj={{
                id: "error",
                content: "Something Went Wrong!",
                role: "assistant",
              }}
            />
          )}
        </div>
      </div>
      <form
        className="my-5 p-2 rounded-lg bg-slate-100 dark:bg-[rgb(22,22,22)]"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between gap-1 h-[70px]">
          <button
            type="button"
            onClick={() => {
              setMessages([]);
              messages.length === 0;
            }}
            className=" p-1 sm:p-3 bg-emerald-500/20 dark:text-emerald-500 rounded-lg"
          >
            <MdOutlineDeleteSweep size={24} className="flex-none" />
          </button>

          {/* Text */}
          <Textarea
            ref={inputRef}
            onChange={handleInputChange}
            value={input}
            placeholder="Hello There, I am excited, lets talk!"
            className=" resize-none border-none bg-slate-100 dark:bg-[rgb(22,22,22)]  focus-visible:ring-slate-300 focus-visible:dark:ring-slate-700"
          />

          {/* Buttons */}

          <button
            disabled={isLoading || input.length === 0}
            type="submit"
            className=" p-1 sm:p-3 dark:text-emerald-500 disabled:opacity-50 rounded-lg "
          >
            <GrSend size={24} className="flex-none " />
          </button>
        </div>
      </form>
    </div>
  );
};

/**
 * This function displays each of the message according to the role.
 *
 * @param param is the messages, of type Messages
 * @returns
 */
const MessageBox: React.FC<messageProps> = ({
  message_obj: { role, content, ui, id },
}) => {
  const isAImessage = role === "assistant";

  console.log(role, content);
  return (
    <div
      className={cn(
        "mb-2 p-2 flex rounded-lg text-xs md:text-sm bg-fuchsia-00",
        isAImessage ? " sm:ms-10 justify-end" : "me-5 wf justify-start"
      )}
    >
      {isAImessage ? (
        <div className="flex flex-row overflow-auto">
          <div className="dark:bg-[rgb(22,22,22)] bg-slate-200 p-2 rounded-lg overflow-x-auto scroll-container">
            {id === "assistant" ? (
              <>{ui}</>
            ) : (
              <ReactMarkdown className="prose prose-p:sm:text-sm prose-p:text-xs prose-ol:sm:text-sm prose-ol:text-xs prose-ul:sm:text-sm prose-ul:text-xs  prose-emerald prose-strong:dark:text-white prose-p:dark:text-white prose-p:text-black prose-h1:text-black prose-h1:dark:text-white prose-h2:text-black prose-h2:dark:text-white prose-h3:text-black prose-h3:dark:text-white prose-li:dark:text-slate-400 prose-blockquote:text-black prose-blockquote:dark:text-white prose-code:text-sky-500 prose-p:my-1  prose-h1:mb-5 prose-h2:my-4 prose-h2:mb-1 prose-h3:m-0 prose-li:m-0">
                {content}
              </ReactMarkdown>
            )}
          </div>
          <SiGoogleassistant
            size={20}
            className="text-emerald-500  flex-none ml-2"
          />
        </div>
      ) : (
        <div className="flex flex-row items-center overflow-auto p-2">
          <span className="h-full">
            <FaUserMd size={20} className="text-emerald-500 flex-none mr-2" />
          </span>
          <div className=" rounded-lg overflow-x-auto scroll-container">
            <ReactMarkdown className="prose prose-p:sm:text-sm prose-p:text-xs prose-ol:sm:text-sm prose-ol:text-xs prose-ul:sm:text-sm prose-ul:text-xs  prose-emerald prose-strong:dark:text-white prose-p:dark:text-white prose-p:text-black prose-h1:text-black prose-h1:dark:text-white prose-h2:text-black prose-h2:dark:text-white prose-h3:text-black prose-h3:dark:text-white prose-li:dark:text-slate-400 prose-blockquote:text-black prose-blockquote:dark:text-white prose-code:text-sky-500 prose-p:my-1  prose-h1:mb-5 prose-h2:my-4 prose-h2:mb-1 prose-h3:m-0 prose-li:m-0">
              {content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

// isAImessage ? "bg-red-600 me-5 justify-start" : "bg-green-500 ms-5 justify-end"
