import { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface TextFormFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  suggestions?: Array<string>;
  icon?: IconType;
}

type NativeTextFormProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function TextFormField({ icon: Icon, label, type, name, ...props }: TextFormFieldProps & NativeTextFormProps) {
  return (
    <div className="relative">
      {Icon && <Icon size={23} className="absolute inset-y-3 left-3 text-gray-500" />}
      <input type={type} name={name} id={name} {...props} placeholder={label} className='size-full rounded-md border border-stone-300 px-12 py-3 font-noto placeholder:font-light' />
    </div>
  )
}