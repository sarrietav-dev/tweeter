
import NewTweetForm from "@/components/home/NewTweetForm";
import Avatar from "@/components/shared/Avatar";
import { MdBookmarkBorder, MdOutlineModeComment, MdFavoriteBorder, MdLoop } from "react-icons/md"
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <NewTweetForm />
      <p className="my-2 flex items-center gap-1 text-sm text-gray-3">
        <MdLoop className="inline-block text-lg" /> Daniel Nelsen retweeted
      </p>
      <article className="rounded bg-white p-4 shadow-sm">
        <header className="flex items-center gap-3">
          <Avatar />
          <div className="flex flex-col">
            <h3 className="font-poppins font-medium text-black">Daniel Nelsen</h3>
            <p className="text-xs text-gray-4">24 August at 20:43</p>
          </div>
        </header>
        <p className="my-4 font-normal text-neutral-600">Here is my first tweet. It&apos;s not much, but it&apos;s a start.</p>
        <Image src="https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?w=311&h=200" width={310} height={200} alt="Unspash img" className="my-4 rounded-lg object-cover" />
        <footer>
          <div className="flex items-baseline justify-end gap-4">
            <p className="text-xs text-gray-4">
              449 Comments
            </p>
            <p className="text-xs text-gray-4">
              59k Retweets
            </p>
            <p className="text-xs text-gray-4">
              234 Saved
            </p>
          </div>
          <div className="my-2 flex justify-around border-y py-1">
            <button className="rounded px-5 py-2 transition active:bg-zinc-100">
              <MdOutlineModeComment className="text-xl text-gray-2" />
            </button>
            <button className="rounded px-5 py-2 transition active:bg-zinc-100">
              <MdLoop className="text-xl text-gray-2" />
            </button>
            <button className="rounded px-5 py-2 transition active:bg-zinc-100">
              <MdFavoriteBorder className="text-xl text-gray-2" />
            </button>
            <button className="rounded px-5 py-2 transition active:bg-zinc-100">
              <MdBookmarkBorder className="text-xl text-gray-2" />
            </button>
          </div>
          <form className="flex items-center gap-4">
            <Avatar />
            <div className="grow">
              <input
                type="text"
                placeholder="Tweet your reply"
                className="w-full rounded-lg border border-zinc-100 bg-zinc-50 placeholder:text-sm placeholder:text-stone-300 focus:outline-none focus:ring-0"
              />
            </div>
          </form>
        </footer>
      </article>
    </main>
  );
}
