import { useNavigate } from "react-router-dom";

interface Props {
  address?: string
  title: string
}
export const NavBarLi = ({ address, title }: Props) => {
  const navegar = useNavigate()

  function handleClick() {
    navegar(`${address}`, { replace: true })
  }
  return (
    <li
      className="block font-medium rounded-lg text-xl w-full p-5 duration-200 cursor-pointer hover:text-2xl hover:bg-gray-200 "
      onClick={handleClick}>
      {title}
    </li>
  );
};