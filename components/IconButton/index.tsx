import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconButtonProps {
  type: "submit" | "button";
  icon: IconProp;
  onClick?: () => void;

}

export default function IconButton({ type, icon, onClick }: IconButtonProps) {
  return (
    <button type={type} onClick={onClick} className='border-2 border-zinc-500 rounded-full size-12'>
      <FontAwesomeIcon icon={icon} size='xl' height={100} className="inset-y-3 left-3 text-gray-500" />
    </button>
  )
}