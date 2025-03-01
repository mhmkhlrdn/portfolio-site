import Content from "./components/content";
import SidebarComponent from "./components/sidebar";

export default function Home() {
  return (
    <div className="">
      <div className="rounded-full bg-white size-24 z-10 absolute"></div>
      <div className="rounded-full bg-white size-24 z-10 bottom-0 absolute"></div>
      <div className="rounded-full bg-white size-28 z-10 left-73 absolute"></div>
      <div className="rounded-full bg-white size-24 z-10 right-0 absolute"></div>
      <div className="rounded-full bg-white size-24 z-10 bottom-0 right-0 absolute"></div>
      <div className="rounded-full bg-white size-28 z-10 left-73 bottom-0 absolute"></div>
      <div className="bg-white p-16 h-screen overflow-hidden flex flex-col shadow-lg" >
        <div className="flex flex-1 bg-yellow-200 rounded-2xl">
          <SidebarComponent />
          <div className="absolute top-50 left-83 space-y-8 2xl:top-53 3xl:top-65">
            <div className="flex flex-col gap-4 2xl:gap-12">
              <div className="rounded-full bg-white size-8"></div>
              <div className="rounded-full bg-white size-8"></div>
              <div className="rounded-full bg-white size-8"></div>
              <div className="rounded-full bg-white size-8"></div>
              <div className="rounded-full bg-white size-8"></div>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <Content />
          </div>
        </div>
      </div>
    </ div>
  );
}
