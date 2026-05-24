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
            className="block text-white font-medium text-xl hover:bg-gray-900 w-full p-5 duration-200 hover:text-2xl cursor-pointer"
          >
            {title}
          </Link>
        </li>
  );
};