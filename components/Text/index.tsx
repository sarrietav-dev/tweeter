interface TextProps {
  children: string;
  type: "heading" | "paragraph" | "secondary";
  className?: string;
}

export default function Text({ children, type, className }: TextProps) {
  if (type === "heading") {
    return <h1 className={className}>{children}</h1>;
  }

  if (type === "paragraph") {
    return <p className={className}>{children}</p>;
  }

  if (type === "secondary") {
    return <p className={className}>{children}</p>;
  }
}
