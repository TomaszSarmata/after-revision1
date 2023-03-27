import Input from "@/components/forms/input";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
  const [locations, setLocations] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await fetch(`/api/locations`, {
      method: "GET",
      headers: {
        "Content-Type": "applications",
      },
    });
    const data = await response.json();
    setLocations(data);
  };

  return (
    <div className="w-full">
      <Header title="Search"></Header>
      <Content>
        <div className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 flex flex-row space-x-2">
          <Input value={input} onChange={(value) => setInput(value)}></Input>
          <button
            className="bg-blue-500 text-white rounded px-6 py-2"
            type="button"
          >
            S
          </button>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {locations.map((location) => (
            <div key={location.id} className="w-full h-40 bg-red-100">
              <img src={location.img_url} alt="" />
              <p>{location.title}</p>
            </div>
          ))}
        </div>
      </Content>
      <Footer href="/" title="Home"></Footer>
    </div>
  );
}
