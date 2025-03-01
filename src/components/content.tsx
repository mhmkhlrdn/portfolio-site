import Sidebutton from './button';

export default function Content() {
  return (
    <>
      <div className="size-full bg-gradient-to-r flex flex-col justify-center items-end from-yellow-200 to-orange-300 rounded-r-2xl">
        <div className="bg-orange-300 border-4 drop-shadow-lg z-10 border-amber-200 p-6 rounded-full mr-6 flex flex-col space-y-6 ">
          <Sidebutton to="/"> </Sidebutton>
          <Sidebutton to="/"> </Sidebutton>
          <Sidebutton to="/"> </Sidebutton>
          <Sidebutton to="/"> </Sidebutton>
        </div>
        <div className="absolute w-2 h-[517px] right-35 overflow-hidden top-16 z-0 bg-amber-200"></div>
      </div>
    </>
  );
}
