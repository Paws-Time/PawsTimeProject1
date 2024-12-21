"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainBoard from "../components/board/mainBoard";
import Sidebar from "../components/sidebar";
import useStore from "../hooks/store";

export default function BoardBody() {
  const router = useRouter(); // Next.js 라우터 훅
  const { isSidebarOpen, currentComponent, toggleSidebar } = useStore(); // Zustand의 상태와 액션 사용

  // 사이드바 토글 핸들러
  const sidebarHandle = () => {
    toggleSidebar();
  };

  // currentComponent 값 변경 시 페이지 이동
  useEffect(() => {
    switch (currentComponent) {
      case "board":
        router.push("/board");
        break;
      case "create":
        router.push("/board/write");
        break;
      case "login":
        router.push("/login");
        break;
      default:
        console.error("잘못된 currentComponent 상태입니다.");
        break;
    }
  }, [currentComponent, router]);

  return (
    <div className="flex flex-row pt-0 w-custom-width h-custom-height">
      {/* 사이드바 */}
      <div className="w-custom-sidew h-custom-sideh">
        {isSidebarOpen && <Sidebar />}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="w-custom-width h-custom-height flex flex-row">
        <div className="flex justify-start w1 px-4 mb-3 items-center justify-center">
          <button onClick={sidebarHandle} className="bg-gray-200 p-2 rounded">
            {isSidebarOpen ? "◀" : "▶"}
          </button>
        </div>

        {/* 현재 페이지의 컴포넌트 */}
        {(() => {
          switch (currentComponent) {
            case "board":
              return <MainBoard />;
            default:
              return <div>잘못된 컴포넌트 상태입니다.</div>;
          }
        })()}
      </div>

      <sub className="w-custom-rsidew"></sub>
    </div>
  );
}
