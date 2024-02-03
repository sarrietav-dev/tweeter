import clsx from "clsx";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  type: "submit" | "button";
  icon?: IconType;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, type, icon: Icon, onClick, className }: ButtonProps) {
  const classes = clsx(
    'w-full rounded-lg bg-blue-500 px-5 py-2 text-white transition active:bg-blue-600',
    className
  )

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon && <Icon height={100} className="inset-y-3 left-3 text-gray-500" />}
      {label}
    </button>
  )
}