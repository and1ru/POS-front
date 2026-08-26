import { type ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const MessageSuccess = ({ children }: Props) => {
  return (
    <article className="bg-green-400 fixed top-5 right-5 p-4 rounded-lg shadow-lg z-50">
      <p className="font-bold text-lg text-white">{children}</p>
    </article>
  )
}