"use client";

import Avatar from "@/components/shared/Avatar";
import { faEarth, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function Home() {
  const textbox = useRef<HTMLTextAreaElement>(null);

  function handleTextareaHeight(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    const element = e.target as HTMLTextAreaElement;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  }

  return (
    <main className="container mx-auto p-4">
      <div className="rounded-md bg-white p-3">
        <p className="font-poppins text-xs font-semibold text-gray-2">Tweet something</p>
        <hr className="my-2" />
        <form>
          <div className="flex items-start">
            <Avatar size="lg" />
            <textarea
              className="max-h-60 w-full resize-none border-none placeholder:text-gray-4 focus:outline-none focus:ring-0"
              onInput={handleTextareaHeight}
              ref={textbox}
              maxLength={280}
              placeholder="What's happening?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-x-3 sm:ml-14">
              <button type="button" className="rounded p-1 text-blue-500 transition active:bg-gray-100">
                <FontAwesomeIcon icon={faImage} size="lg" />
              </button>
              <button type="button" className="rounded p-1 text-blue-500 transition active:bg-gray-100">
                <FontAwesomeIcon icon={faEarth} size="lg" />
                <span className="ml-2 text-sm">
                  Everyone can reply
                </span>
              </button>
            </div>
            <button type="submit" className="rounded bg-blue-500 px-7 py-2.5 text-xs text-white transition active:bg-blue-600">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
