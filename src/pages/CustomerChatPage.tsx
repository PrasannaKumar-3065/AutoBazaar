import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Send, Paperclip, Image as ImageIcon, FileText, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Message {
  id: string;
  sender: "customer" | "admin";
  text: string;
  time: string;
  type: "text" | "image" | "document";
  fileName?: string;
  fileUrl?: string;
}

const mockAdminMessages: Message[] = [
  { id: "1", sender: "admin", text: "Hello! How can I help you today?", time: "10:00 AM", type: "text" },
  { id: "2", sender: "customer", text: "Hi, I need help choosing the right accessories for my car", time: "10:01 AM", type: "text" },
  { id: "3", sender: "admin", text: "I'd be happy to help! What type of car do you have?", time: "10:02 AM", type: "text" },
];

export default function CustomerChatPage() {
  const [messages, setMessages] = useState<Message[]>(mockAdminMessages);
  const [messageInput, setMessageInput] = useState("");
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAttachedFile(file);
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() && !attachedFile) return;

    if (attachedFile) {
      const fileMessage: Message = {
        id: Date.now().toString(),
        sender: "customer",
        text: messageInput || `Sent ${attachedFile.type.startsWith('image/') ? 'an image' : 'a document'}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: attachedFile.type.startsWith('image/') ? "image" : "document",
        fileName: attachedFile.name,
        fileUrl: previewUrl || undefined
      };

      setMessages(prev => [...prev, fileMessage]);
      
      console.log('File would be uploaded to:', `/uploads/${attachedFile.type.startsWith('image/') ? 'images' : 'documents'}/${attachedFile.name}`);
      
      setAttachedFile(null);
      setPreviewUrl(null);
    } else if (messageInput.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "customer",
        text: messageInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "text"
      };
      setMessages(prev => [...prev, newMessage]);
    }

    setMessageInput("");
  };

  const removeAttachment = () => {
    setAttachedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="border-b bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Customer Support Chat</h1>
          <p className="text-muted-foreground">Chat with our support team</p>
        </div>
      </div>

      <div className="flex-1 flex justify-center overflow-hidden">
        <Card className="w-full max-w-4xl m-4 flex flex-col">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 flex items-center justify-center bg-primary text-primary-foreground">
                AS
              </Avatar>
              <div>
                <CardTitle className="text-lg">AutoParts Support</CardTitle>
                <p className="text-xs text-muted-foreground">Typically replies instantly</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "customer" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        message.sender === "customer"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.type === "text" && (
                        <p className="text-sm">{message.text}</p>
                      )}
                      {message.type === "image" && message.fileUrl && (
                        <div>
                          {message.text && <p className="text-sm mb-2">{message.text}</p>}
                          <img
                            src={message.fileUrl}
                            alt={message.fileName}
                            className="rounded max-w-full h-auto max-h-64 object-contain"
                          />
                          <p className="text-xs opacity-70 mt-1">{message.fileName}</p>
                        </div>
                      )}
                      {message.type === "document" && (
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          <div>
                            <p className="text-sm font-medium">{message.fileName}</p>
                            <p className="text-xs opacity-80">Document attached</p>
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

          {attachedFile && (
            <div className="p-4 bg-muted/50">
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="h-16 w-16 object-cover rounded" />
                ) : (
                  <div className="h-16 w-16 bg-muted rounded flex items-center justify-center">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{attachedFile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(attachedFile.size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <Button size="icon" variant="ghost" onClick={removeAttachment}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          <div className="p-4">
            <div className="flex gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf,.doc,.docx,.txt"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                size="icon"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                title="Attach file"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
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
            <p className="text-xs text-muted-foreground mt-2">
              You can attach images and documents (PDF, DOC, TXT)
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
