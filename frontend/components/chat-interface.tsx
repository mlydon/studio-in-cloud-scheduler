"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

export function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi, how can I help you today?",
      sender: "agent",
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      content: "Hey, I'm having trouble with my account.",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
    {
      id: 3,
      content: "What seems to be the problem?",
      sender: "agent",
      timestamp: new Date().toISOString(),
    },
    {
      id: 4,
      content: "I can't log in.",
      sender: "user",
      timestamp: new Date().toISOString(),
    },
  ])

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-1 row-span-2">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sofia Davis" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-xs text-muted-foreground">m@example.com</p>
          </div>
        </div>
      </div>
      <div className="p-4 h-[200px] overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-lg px-3 py-2 max-w-[80%] ${
                message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-9">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </div>
    </div>
  )
}
