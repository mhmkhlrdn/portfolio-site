import Content from "./components/content";
import SidebarComponent from "./components/sidebar";

export default function Home() {
  return (
    <>
      <div className="rounded-full bg-white size-24 z-10 absolute"></div>
      <div className="rounded-full bg-white size-24 z-10 bottom-0 absolute"></div>
      <div className="rounded-full bg-white size-28 z-10 left-73 absolute"></div>
      <div className="rounded-full bg-white size-24 z-10 right-0 absolute"></div>
      <div className="rounded-full bg-white size-24 z-10 bottom-0 right-0 absolute"></div>
      <div className="rounded-full bg-white size-28 z-10 left-73 bottom-0 absolute"></div>
      <div className="bg-white p-16 h-screen overflow-hidden flex flex-col">
        <div className="flex flex-1 bg-yellow-200 rounded-2xl">
          <SidebarComponent />
          <div className="flex-col absolute top-45 left-83 justify-around space-y-8">
            <div className="rounded-full bg-white size-8"></div>
            <div className="rounded-full bg-white size-8"></div>
            <div className="rounded-full bg-white size-8"></div>
            <div className="rounded-full bg-white size-8"></div>
            <div className="rounded-full bg-white size-8"></div>
          </div>
          <div className="flex-1 overflow-auto">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
