import { useState } from "react";
import { Bot, Send, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

type Message = {
  type: "user" | "ai";
  content: string;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    type: "ai",
    content: "Hello! I'm your AI assistant. How can I help you today?",
    timestamp: new Date(),
  },
];

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    const aiMessage: Message = {
      type: "ai",
      content: "Thank you for your message. I'm a demo AI assistant.",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput("");
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full shadow-lg z-50"
      >
        <Bot className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-[90vw] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col bg-white shadow-2xl z-50">
      <div className="p-4 border-b bg-blue-50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-sm text-gray-500">Always here to help</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex gap-2 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  {message.type === "user" ? (
                    <div className="bg-blue-100 w-full h-full rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                  ) : (
                    <div className="bg-blue-500 w-full h-full rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
}
