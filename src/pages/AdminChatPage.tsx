import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Search, FileText, Image as ImageIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Customer {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
}

interface Message {
  id: string;
  sender: "admin" | "customer";
  text: string;
  time: string;
  type: "text" | "image" | "document";
  fileName?: string;
  fileUrl?: string;
}

const mockCustomers: Customer[] = [
  { id: "1", name: "John Doe", lastMessage: "Need help with installation", time: "2m ago", unread: 2, avatar: "JD" },
  { id: "2", name: "Sarah Smith", lastMessage: "Thanks for the help!", time: "1h ago", unread: 0, avatar: "SS" },
  { id: "3", name: "Mike Johnson", lastMessage: "When will my order arrive?", time: "3h ago", unread: 1, avatar: "MJ" },
  { id: "4", name: "Emily Brown", lastMessage: "Product inquiry", time: "5h ago", unread: 0, avatar: "EB" },
];

const mockMessages: Record<string, Message[]> = {
  "1": [
    { id: "1", sender: "customer", text: "Hi, I need help with installing the LED headlights", time: "10:30 AM", type: "text" },
    { id: "2", sender: "admin", text: "Hello! I'd be happy to help you with that. Do you have the installation kit?", time: "10:32 AM", type: "text" },
    { id: "3", sender: "customer", text: "Yes, I have everything. Here's a photo of my car", time: "10:35 AM", type: "image", fileName: "car-front.jpg", fileUrl: "/stock_images/car_led_headlights_a_04453d5d.jpg" },
    { id: "4", sender: "admin", text: "Great! I can see it's compatible. Let me send you the installation guide.", time: "10:37 AM", type: "text" },
    { id: "5", sender: "admin", text: "Installation Guide", time: "10:37 AM", type: "document", fileName: "LED_Installation_Guide.pdf" },
  ],
  "2": [
    { id: "1", sender: "customer", text: "Thanks for helping me yesterday!", time: "Yesterday", type: "text" },
    { id: "2", sender: "admin", text: "You're welcome! Happy to help anytime.", time: "Yesterday", type: "text" },
  ],
  "3": [
    { id: "1", sender: "customer", text: "When will my order arrive?", time: "Today", type: "text" },
  ],
  "4": [
    { id: "1", sender: "customer", text: "I have a question about the leather seat covers", time: "Today", type: "text" },
  ],
};

export default function AdminChatPage() {
  const [selectedCustomer, setSelectedCustomer] = useState<string>("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Record<string, Message[]>>(mockMessages);

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "admin",
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "text"
    };

    setMessages(prev => ({
      ...prev,
      [selectedCustomer]: [...(prev[selectedCustomer] || []), newMessage]
    }));

    setMessageInput("");
  };

  const currentMessages = messages[selectedCustomer] || [];
  const currentCustomer = mockCustomers.find(c => c.id === selectedCustomer);

  return (
    <div className="h-screen flex flex-col">
      <div className="border-b bg-background p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Admin Chat</h1>
          <p className="text-muted-foreground">Manage customer conversations</p>
        </div>
      </div>

      <div className="flex-1 flex max-w-7xl mx-auto w-full overflow-hidden">
        <Card className="w-80 m-4 flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">Customers</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-hidden">
            <ScrollArea className="h-full">
              {filteredCustomers.map((customer) => (
                <div key={customer.id}>
                  <div
                    className={`p-4 cursor-pointer hover:bg-muted transition-colors ${
                      selectedCustomer === customer.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedCustomer(customer.id)}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground">
                        {customer.avatar}
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm truncate">{customer.name}</h3>
                          {customer.unread > 0 && (
                            <Badge variant="destructive" className="h-5 min-w-5 px-1 text-xs">
                              {customer.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{customer.lastMessage}</p>
                        <p className="text-xs text-muted-foreground mt-1">{customer.time}</p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="flex-1 m-4 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground">
                {currentCustomer?.avatar}
              </Avatar>
              <div>
                <CardTitle className="text-lg">{currentCustomer?.name}</CardTitle>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "admin" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        message.sender === "admin"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.type === "text" && (
                        <p className="text-sm">{message.text}</p>
                      )}
                      {message.type === "image" && message.fileUrl && (
                        <div>
                          <p className="text-sm mb-2">{message.text}</p>
                          <img
                            src={message.fileUrl}
                            alt={message.fileName}
                            className="rounded max-w-full h-auto"
                          />
                        </div>
                      )}
                      {message.type === "document" && (
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          <div>
                            <p className="text-sm font-medium">{message.fileName}</p>
                            <p className="text-xs opacity-80">Click to download</p>
                          </div>
                        </div>
                      )}
                      <p className="text-xs opacity-70 mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          <Separator />

          <div className="p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button size="icon" onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
