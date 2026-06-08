import { Link } from "react-router-dom";

interface Props{
    address?:string
    title: string
}
export const LiNavComponent = ({address, title}:Props) => {
  return (
        <li>
          <Link
            to={`${address}`}
            className="block font-medium text-xl w-full p-5 duration-200 cursor-pointer hover:text-2xl hover:bg-gray-200 "
          >
            {title}
          </Link>
        </li>
  );
};