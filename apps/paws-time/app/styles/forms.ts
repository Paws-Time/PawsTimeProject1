export const formStyles = {
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
    height: "900px",
    overflow: "auto",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
  },
  heading: {
    textAlign: "center" as const,
    fontSize: "24px",
    color: "#333",
  },
  field: {
    marginBottom: "5px",
  },
  label: {
    display: "block",
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
    height: "380px",
    minHeight: "150px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box" as const,
    lineHeight: "1.5",
    resize: "none" as const,
  },
  postimagelabel: {
    width: "100%",
    height: "30px",
    minHeight: "50px",
    fontSize: "16px",
    borderRadius: "5px",
    boxSizing: "border-box" as const,
    lineHeight: "1.5",
    resize: "none" as const,
  },
  postimagefield: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap" as const,
    width: "100%",
    padding: "5px",
    boxSizing: "border-box" as const,
    gap: "16px",
    overflowY: "auto" as const,
  },
  posttextarea: {
    width: "100%",
    height: "380px",
    minHeight: "150px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box" as const,
    lineHeight: "1.5",
    resize: "none" as const,
    overflowWrap: "break-word" as const,
    overflowY: "auto" as const,
  },
  imagePreview: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100px",
    gap: "5px",
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    boxSizing: "border-box" as const,
    backgroundColor: "#fff",
    appearance: "none" as const,
  },
  button: {
    marginTop: "auto",
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
