"use client";
import MainBoard from "../components/board/mainBoard";
import { CustomButton } from "../components/icons/button";
import Sidebar from "../components/sidebar";
import useStore from "../hooks/store";
import BoardWritePage from "./write/page";

export default function BoardBody() {
  const { isSidebarOpen, currentComponent, toggleSidebar } = useStore(); // Zustand의 상태와 액션 사용
  const sidebarHandle = () => {
    toggleSidebar();
  };

  return (
    <div className="flex flex-row pt-0 w-custom-width h-custom-height">
      <div className="w-custom-sidew h-custom-sideh">
        {isSidebarOpen && <Sidebar />}
      </div>
      <div className="w-custom-width h-custom-height flex flex-row">
        <div className="flex justify-start w1 px-4 mb-3 items-center justify-center">
          {isSidebarOpen ? (
            <CustomButton label="◀" onClick={sidebarHandle} sizetype="mini" />
          ) : (
            <CustomButton label="▶" onClick={sidebarHandle} sizetype="mini" />
          )}
        </div>
        {(() => {
          switch (currentComponent) {
            case "board":
              return <MainBoard />;
            case "create":
              return <BoardWritePage />;
            case "login":
            // return <Login />;
            default:
              return <div>잘못된 컴포넌트 상태입니다.</div>;
          }
        })()}
      </div>
      <sub className="w-custom-rsidew"></sub>
    </div>
  );
}
