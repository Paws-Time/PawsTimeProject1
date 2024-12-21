"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const BoardWriteBody = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("TECH"); // 기본 카테고리 값
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const postData = {
      title: title,
      content: content,
      boardId: 1, // 임의 값
      category: category, // 선택된 카테고리 값
    };

    try {
      const response = await fetch("http://43.200.46.13:8080/post/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert("글 작성 완료!");
        router.push("/board");
      } else {
        throw new Error("게시글 작성에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 요청에 실패했습니다.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>글 작성하기</h2>
        <div style={styles.field}>
          <label style={styles.label}>게시판</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.select}
          >
            <option value="TECH">TECH</option>
            <option value="EDUCATION">EDUCATION</option>
            <option value="LIFESTYLE">LIFESTYLE</option>
            <option value="ENTERTAINMENT">ENTERTAINMENT</option>
          </select>
        </div>
        <div style={styles.field}>
          <label style={styles.label}>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          작성하기
        </button>
      </form>
    </div>
  );
};

const styles = {
  background: {
    position: "absolute" as const,
    width: "1400px",
    height: "700px",
    borderRadius: "10px",
    backgroundColor: "#19aca4",
    zIndex: 0,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  form: {
    zIndex: 1,
    width: "100%",
    maxWidth: "1200px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    height: "800px",
    overflow: "auto",
  },
  heading: {
    textAlign: "center" as const,
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  field: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "bold" as const,
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box" as const,
  },
  textarea: {
    width: "100%",
    height: "350px",
    minHeight: "150px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box" as const,
    lineHeight: "1.5",
    resize: "none",
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box" as const,
    backgroundColor: "#fff",
    appearance: "none" as const, // 기본 화살표 제거
  },
  button: {
    width: "100%",
    padding: "15px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};
