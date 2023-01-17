import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import Searchbar from "@/components/Searchbar";

export default function Header() {
  return (
    <header className="border-b py-4 px-8 bg-white w-full flex items-center justify-between">
      <Logo />
      <Searchbar />
      <Menu />
    </header>
  );
}
