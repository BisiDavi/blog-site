import Button from "@/components/Button";

export default function Menu() {
  return (
    <nav className="w-1/4 flex items-center justify-between">
      <Button
        text="Write"
        className="bg-blue-500 text-white px-2 justify-center py-1 text-xl font-medium rounded-full flex items-center hover:opacity-80"
        icon="/pencil.svg"
      />
      <div className="group w-full">
        <Button icon="/moon.svg" className="mx-8" />
      </div>
    </nav>
  );
}
