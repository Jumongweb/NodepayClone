import LeftSidebar from "./component/LeftSidebar"
import RightSidebar from "./component/RightSidebar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <LeftSidebar/>
        <RightSidebar/>
      </div>
    </>
  );
}
