import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="logo flex items-center hover:text-blue-500">
        <Image
          src="/quill.png"
          alt="quill"
          className="w-1/2 border-black-500 border mr-1 rounded hover:bg-b"
          height={96}
          width={96}
        />
        <h4 className="text-2xl">Quill</h4>
      </div>
    </Link>
  );
}
