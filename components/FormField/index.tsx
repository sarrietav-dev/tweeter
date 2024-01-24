import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLInputTypeAttribute } from "react";

interface TextFormFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  suggestions?: Array<string>;
  icon?: IconProp;
}

export default function TextFormField({ icon, label, type, name, }: TextFormFieldProps) {
  return (
    <div className="relative">
      {icon && <FontAwesomeIcon icon={icon} size='xl' height={100} className="absolute inset-y-3 left-3 text-gray-500" />}
      <input type={type} name={name} id={name} placeholder={label} className='size-full px-12 py-3' />
    </div>
  )
}