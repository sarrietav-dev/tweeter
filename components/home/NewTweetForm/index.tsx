"use client";

import Avatar from "@/components/shared/Avatar";
import { faImage, faEarth } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineImage, MdOutlinePublic } from "react-icons/md";
import { useRef } from "react";

export default function NewTweetForm() {
  const textbox = useRef<HTMLTextAreaElement>(null);

  function handleTextareaHeight(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    const element = e.target as HTMLTextAreaElement;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  }

  return (
    <div className="rounded-md bg-white p-3 md:rounded-xl">
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
          <div className="flex items-center sm:ml-14">
            <button type="button" className="rounded p-1 text-blue-500 transition active:bg-gray-100">
              <MdOutlineImage size={20} />
            </button>
            <button type="button" className="flex items-center rounded p-1 text-blue-500 transition active:bg-gray-100">
              <MdOutlinePublic size={20} className="inline-block" />
              <span className="ml-2 text-sm font-medium">
                Everyone can reply
              </span>
            </button>
          </div>
          <button type="submit" className="rounded bg-blue-500 px-7 py-2.5 text-xs font-medium text-white transition active:bg-blue-600">
            Tweet
          </button>
        </div>
      </form>
    </div>
  )
}