import Header from "@/components/shared/header";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import { useState } from "react";
import Input from "@/components/forms/input";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const getMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const submitForm = async (e) => {
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
  };

  return (
    <div className="w-full">
      <Header title="Contact"></Header>
      <Content>
        <form className="flex flex-col space-y-3">
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
            className="bg-gray-200 py-3 px-6 w-96 rounded"
            value={message}
            onChange={getMessage}
          />
          <button
            className="bg-blue-500 py-3 px-6 w-96 rounded text-white"
            onClick={submitForm}
            type="button"
          >
            Submit
          </button>
          {showSuccess === true ? (
            <p className="text-green-500 w-96">Your message was sent</p>
          ) : null}
        </form>
      </Content>
      <Footer title="Home" href="/"></Footer>
    </div>
  );
}
