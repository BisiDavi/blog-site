import Image from "next/image";

export default function Searchbar() {
  return (
    <form className="w-1/2 flex relative">
      <Image
        src="/search.svg"
        alt="search"
        className="absolute ml-4"
        height={40}
        width={40}
      />
      <input
        placeholder="Search for articles"
        className="border bg-gray-100 border border-gray-200  pl-20 rounded-xl w-full px-4 py-1.5"
      />
    </form>
  );
}
