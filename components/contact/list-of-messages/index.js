import { useEffect, useState } from "react";

export default function ListOfMessages({ isLoading, messages }) {
  if (isLoading) {
    return (
      <div className="w-full grid grid-cols-3 gap-4 mt-10">
        <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse"></div>
        <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse"></div>
        <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4">
        {messages.map((message, index) => (
          <div key={index} className="bg-gray-200 py-3 px-6 rounded">
            <p className="font-medium text-xl">
              {message.name ? message.name : "not provided"}
            </p>
            <p>{message.email ? message.email : "not provided"}</p>
            <p>
              {message.message ? (
                message.message
              ) : (
                <span className="italic text-gray-500">Not provided</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
