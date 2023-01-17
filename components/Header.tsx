import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Searchbar from "@/components/Searchbar";

export default function Header() {
  return (
    <header className="border-b bg-white w-full flex items-center">
      <Logo />
      <Searchbar />
      <Menu />
    </header>
  );
}
