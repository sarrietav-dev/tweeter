import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface ButtonProps {
  label: string;
  type: "submit" | "button";
  icon?: IconProp;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, type, icon, onClick, className }: ButtonProps) {
  const classes = clsx(
    'w-full rounded-lg bg-blue-500 px-5 py-2 text-white transition active:bg-blue-600',
    className
  )

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon && <FontAwesomeIcon icon={icon} size='xl' height={100} className="inset-y-3 left-3 text-gray-500" />}
      {label}
    </button>
  )
}