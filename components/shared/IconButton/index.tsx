import { IconType } from "react-icons";

interface IconButtonProps {
  type: "submit" | "button";
  icon: IconType;
  onClick?: () => void;

}

export default function IconButton({ type, icon: Icon, onClick }: IconButtonProps) {
  return (
    <button type={type} onClick={onClick} className='group size-12 rounded-full border-2 border-zinc-500 transition hover:bg-zinc-500'>
      <Icon height={100} className="inset-y-3 left-3 text-gray-500 transition group-hover:text-white" />
    </button>
  )
}