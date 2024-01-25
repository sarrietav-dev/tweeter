import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  type: "heading" | "paragraph" | "secondary";
  className?: string;
}

export default function Text({ children, type, className }: TextProps) {
  if (type === "heading") {
    const classes = clsx(
      "text-lg font-semibold text-zinc-800",
      className
    )
    return <h1 className={classes}>{children}</h1>;
  }

  if (type === "paragraph") {
    const classes = clsx(
      "text-zinc-800 text-sm font-normal",
      className
    )

    return <p className={classes}>{children}</p>;
  }

  if (type === "secondary") {
    const classes = clsx(
      "text-gray-400 text-sm",
      className
    )
    return <p className={classes}>{children}</p>;
  }
}
