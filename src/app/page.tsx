import LeftSidebar from "./component/LeftSidebar"
import RightSidebar from "./component/RightSidebar";

export default function Home() {
  return (
    <>
      <div className="flex ">
        <div className="hidden sm:block">
          <LeftSidebar/>
        </div>

        <RightSidebar/>
      </div>
    </>
  );
}
