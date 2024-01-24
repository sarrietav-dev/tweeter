import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  label: string;
  type: "submit" | "button";
  icon?: IconProp;
  onClick?: () => void;
}

export default function Button({ label, type, icon, onClick }: ButtonProps) {
  return (
    <button type={type} className='bg-blue-500 w-full px-5 py-2 text-white rounded-lg'>
      {icon && <FontAwesomeIcon icon={icon} size='xl' height={100} className="inset-y-3 left-3 text-gray-500" />}
      {label}
    </button>
  )
}