"use client";

import { useRouter } from "next/navigation";
import { CustomButton } from "./utils/button";
import useSideBarStore from "@/app/hooks/sidebarStore";

export default function Sidebar() {
  const { sideBarState, sideBarActions } = useSideBarStore();
  const { isShow } = sideBarState;
  const { toggleIsShow } = sideBarActions;

  // const [isShow, setShow] = useState(true);
  const router = useRouter();

  const menus = [
    { id: 1, path: "/board", name: "게시판" },
    { id: 2, path: "/board/createBoard", name: "게시판 작성" },
    { id: 3, path: "/board/write", name: "게시글 작성" },
  ];
  return (
    <aside
      style={{
        position: "fixed",
        top: "80px", // 헤더 아래로 80px 만큼 내려갑니다.
        left: isShow ? 0 : "-300px",
        height: "calc(100% - 80px)", // 전체 화면 높이에서 헤더 높이를 뺍니다.
        width: "300px",
        backgroundColor: "#f8f9fa",
        transition: "left 0.5s ease-in-out",
        boxShadow: "1px 0px 2px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <button
        style={{
          position: "absolute",
          marginTop: "400px",
          top: "10px",
          right: "-40px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={toggleIsShow}
      >
        {isShow ? "◀" : "▶"}
      </button>
      <nav>
        <ul style={{ padding: "20px 0", listStyleType: "none" }}>
          {menus.map((menu) => (
            <li
              key={menu.id}
              style={{ marginBottom: "15px", textAlign: "center" }}
            >
              <CustomButton
                $label={menu.name}
                $sizeType="menu"
                onClick={() => router.push(menu.path)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
