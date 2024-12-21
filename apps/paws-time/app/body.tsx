"use client";

import { CustomButton } from "./components/icons/button";
import Sidebar from "./components/sidebar";
import useStore from "./hooks/store";
import { useRouter } from "next/navigation";

export default function MainBody() {
  const { isSidebarOpen, toggleSidebar } = useStore(); // Zustand 상태와 액션 사용
  const router = useRouter(); // Next.js 라우터 훅 사용

  // 사이드바 열고 닫기 핸들러
  const sidebarHandle = () => {
    toggleSidebar();
  };

  // "/board"로 라우팅
  const navigateToBoard = () => {
    router.push("/board"); // "/board" 경로로 이동
  };

  return (
    <div className="flex flex-row pt-0 w-custom-width h-custom-height">
      {/* 사이드바 영역 */}
      <div className="w-custom-sidew h-custom-sideh">
        {isSidebarOpen && <Sidebar />}
      </div>

      {/* 메인 영역 */}
      <div className="w-custom-width h-custom-height flex flex-row">
        {/* 사이드바 토글 버튼 */}
        <div className="flex justify-start w1 px-4 mb-3 items-center justify-center">
          {isSidebarOpen ? (
            <CustomButton $label="◀" onClick={sidebarHandle} $sizeType="mini" />
          ) : (
            <CustomButton $label="▶" onClick={sidebarHandle} $sizeType="mini" />
          )}
        </div>

        {/* 보드로 이동 버튼 */}
        <div>
          <CustomButton $label="보드로 들어가기" onClick={navigateToBoard} />
        </div>
      </div>

      {/* 오른쪽 서브 영역 */}
      <sub className="w-custom-rsidew"></sub>
    </div>
  );
}
