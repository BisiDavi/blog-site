import useScroll from "@/hooks/useScroll";

export default function LeftSidebar() {
  const { scroll } = useScroll();
  const style = scroll > 200 ? "top-0" : "";
  return (
    <aside
      className={`w-72 border ${style} rounded-lg h-96 m-6 bg-white left-0 p-4 fixed`}
    >
      LeftSidebar
    </aside>
  );
}
