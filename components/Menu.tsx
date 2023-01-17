import Button from "@/components/Button";

export default function Menu() {
  return (
    <nav className="w-1/4 flex items-center justify-between">
      <Button
        text="Write"
        className="bg-blue-500 w-1/3 text-white px-2 justify-center py-1 text-xl font-medium rounded-full flex items-center hover:opacity-80"
        icon="/pencil.svg"
        iconClassName="w-1/5 mr-1"
      />
      <div className="group w-1/2 flex  justify-end space-x-4">
        <Button icon="/moon.svg" iconClassName="w-40" />
        <Button icon="/bell.svg" iconClassName="w-52" />
        <Button icon="/person.svg" iconClassName="w-40" />
      </div>
    </nav>
  );
}
