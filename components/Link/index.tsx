import NextLink, { type LinkProps } from "next/link"

export default function Link({ children, ...props }: LinkProps & { children: React.ReactNode }) {
  return (
    <NextLink className="text-blue-500" {...props} > {children} </NextLink>
  )
}