import { type ReactNode } from "react"

interface Props{
    children:ReactNode
}
export const MessageError = ({children}:Props) => {
    return(
        <article className={`bg-red-400 fixed p-4 rounded-lg top-5 left-140`}>
            {children}
        </article>
    )
}