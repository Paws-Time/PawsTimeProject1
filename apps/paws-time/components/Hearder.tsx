"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useAuthStore } from "@/app/hooks/authStore";
import useSideBarStore from "@/app/hooks/sidebarStore";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center; /* 로고를 중앙에 배치 */
  height: 60px;
  background-color: #f8f9fa;
  padding: 0 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const BrandLogo = styled.div`
  text-decoration: none;
  font-weight: bold;
  color: #222222;
  cursor: pointer;

  @font-face {
    font-family: "TTHakgyoansimMabeopsaR";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/insungitCutelivelyjisu.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  p {
    margin: 0;
    font-size: 50px;
    font-family: "TTHakgyoansimMabeopsaR";
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  left: 10px; /* 헤더의 왼쪽 상단에 고정 */
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserInfo = styled.div`
  position: absolute;
  right: 20px; /* 헤더의 오른쪽 상단에 고정 */
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Header() {
  const router = useRouter();
  const { sideBarState, sideBarActions } = useSideBarStore();
  const { isShow } = sideBarState;
  const { toggleIsShow } = sideBarActions;

  const email = useAuthStore((state) => state.email);
  const restoreState = useAuthStore((state) => state.restoreState);
  const clearToken = useAuthStore((state) => state.clearToken);
  const clearEmail = useAuthStore((state) => state.clearEmail);

  const handleLogout = () => {
    clearToken();
    clearEmail();
    router.push("/auth/login");
  };

  useEffect(() => {
    restoreState();
  }, []);

  const handleLoginNavigation = () => {
    router.push("/auth/login");
  };

  const handleMypageNavigation = () => {
    router.push("/mypage");
  };

  return (
    <HeaderContainer>
      {/* 사이드바 토글 버튼 */}
      <ToggleButton onClick={toggleIsShow}>☰</ToggleButton>

      {/* 브랜드 로고 */}
      <BrandLogo
        onClick={() => {
          router.push("/");
          router.refresh();
        }}
      >
        <p>PAWS TIME</p>
      </BrandLogo>

      {/* 사용자 정보 */}
      <UserInfo>
        {email ? (
          <>
            <p
              className="text-sm text-neutral-950 cursor-pointer"
              onClick={handleMypageNavigation}
            >
              {email}
            </p>
            <button
              className="text-xs text-red-500 underline"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <p
            className="text-xs text-blue-500 underline cursor-pointer"
            onClick={handleLoginNavigation}
          >
            로그인
          </p>
        )}
      </UserInfo>
    </HeaderContainer>
  );
}
