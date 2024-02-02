import clsx from "clsx";

interface TextProps {
  children: React.ReactNode;
  type: "heading" | "paragraph" | "secondary";
  className?: string;
}

export default function Text({ children, type, className }: TextProps) {
  if (type === "heading") {
    const classes = clsx(
      "font-poppins  text-lg font-semibold text-zinc-800",
      className
    )
    return <h1 className={classes}>{children}</h1>;
  }

  if (type === "paragraph") {
    const classes = clsx(
      "text-sm font-normal text-zinc-800",
      className
    )

    return <p className={classes}>{children}</p>;
  }

  if (type === "secondary") {
    const classes = clsx(
      "text-sm text-gray-400",
      className
    )
    return <p className={classes}>{children}</p>;
  }
}
