import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import { useState, useEffect } from "react";
import Input from "@/components/forms/input";
import ListOfMessages from "@/components/contact/list-of-messages";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    setIsLoading(true);
    const data = await fetch(`/api/contact-messages`);
    const response = await data.json();

    const { messages } = response;

    setMessages(messages);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const getMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const submitForm = async (e) => {
    if (!name) return;
    if (!email) return;
    if (!message) return;

    const response = await fetch(
      `/api/contact?name=${name}&email=${email}&message=${message}`
    );
    const data = await response.json();

    setName("");
    setEmail("");
    setMessage("");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    getMessages();
  };

  return (
    <div className="w-full">
      <Header title="Contact"></Header>
      <Content>
        <form className="flex flex-col space-y-3 w-full sm:w-96">
          <Input
            placeholder="name"
            value={name}
            onChange={(value) => setName(value)}
            type="text"
          ></Input>
          <Input
            placeholder="email"
            value={email}
            onChange={(value) => setEmail(value)}
            type="email"
          ></Input>

          <textarea
            placeholder="Your message"
            type="text"
            className="bg-gray-200 py-3 px-6 w-full rounded"
            value={message}
            onChange={getMessage}
          />
          <button
            className="bg-blue-500 py-3 px-6 w-full rounded text-white"
            onClick={submitForm}
            type="button"
          >
            Submit
          </button>
          {showSuccess === true ? (
            <p className="text-green-500 w-full">Your message was sent</p>
          ) : null}
        </form>
        <ListOfMessages
          isLoading={isLoading}
          messages={messages}
        ></ListOfMessages>
      </Content>
      <Footer title="Home" href="/"></Footer>
    </div>
  );
}
