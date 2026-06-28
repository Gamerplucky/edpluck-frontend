import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function SubmitHomework({ darkMode }) {
  const navigate = useNavigate();

  const theme = {
    pageBg: darkMode
      ? "linear-gradient(135deg,#020617,#0f172a)"
      : "linear-gradient(135deg,#eef6ff,#dbeafe)",
    boxBg: darkMode ? "rgba(30,41,59,0.94)" : "rgba(255,255,255,0.78)",
    text: darkMode ? "#ffffff" : "#0f172a",
    softText: darkMode ? "#cbd5e1" : "#334155",
    muted: darkMode ? "#94a3b8" : "#64748b",
    inputBg: darkMode ? "#0f172a" : "white",
    uploadBg: darkMode ? "#334155" : "#eff6ff",
    border: darkMode ? "#475569" : "#cbd5e1",
  };

  return (
    <div style={{ ...page, background: theme.pageBg }}>
      <div style={{ ...box, background: theme.boxBg }}>
        <img src={edpluckLogo} alt="EdPluck" style={logo} />

        <h1 style={{ ...title, color: theme.text }}>Submit Homework 📤</h1>
        <p style={{ ...subTitle, color: theme.muted }}>
          Upload your completed assignment for teacher review
        </p>

        <label style={{ ...label, color: theme.softText }}>Select Subject</label>
        <select
          style={{
            ...input,
            background: theme.inputBg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
          }}
        >
          <option>Biology</option>
          <option>Physics</option>
          <option>Chemistry</option>
        </select>

        <label style={{ ...label, color: theme.softText }}>Assignment Title</label>
        <input
          style={{
            ...input,
            background: theme.inputBg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
          }}
          placeholder="Enter homework title"
        />

        <label style={{ ...label, color: theme.softText }}>Upload File</label>
        <div
          style={{
            ...uploadBox,
            background: theme.uploadBg,
            color: theme.softText,
            border: `2px dashed ${darkMode ? "#60a5fa" : "#93c5fd"}`,
          }}
        >
          <h2>📁 Drop your file here</h2>
          <p>PDF, Image or Document supported</p>
          <input type="file" style={fileInput} />
        </div>

        <label style={{ ...label, color: theme.softText }}>Student Note</label>
        <textarea
          style={{
            ...textarea,
            background: theme.inputBg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
          }}
          placeholder="Write a short note for your teacher..."
        />

        <div style={btnRow}>
          <button onClick={() => navigate("/homework")} style={secondaryBtn}>
            Cancel
          </button>

          <button style={primaryBtn}>Submit Homework</button>
        </div>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
};

const box = {
  width: "560px",
  backdropFilter: "blur(18px)",
  padding: "34px",
  borderRadius: "30px",
  boxShadow: "0 25px 60px rgba(37,99,235,0.18)",
};

const logo = {
  width: "150px",
  display: "block",
  margin: "0 auto 18px",
  background: "white",
  padding: "14px",
  borderRadius: "8px",
};

const title = {
  margin: 0,
  textAlign: "center",
  fontSize: "34px",
};

const subTitle = {
  textAlign: "center",
  fontWeight: "700",
  marginBottom: "26px",
};

const label = {
  display: "block",
  marginBottom: "8px",
  marginTop: "16px",
  fontWeight: "900",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "14px",
  outline: "none",
  fontWeight: "700",
  boxSizing: "border-box",
};

const uploadBox = {
  padding: "24px",
  borderRadius: "20px",
  textAlign: "center",
};

const fileInput = {
  marginTop: "12px",
};

const textarea = {
  width: "100%",
  minHeight: "90px",
  padding: "14px",
  borderRadius: "14px",
  outline: "none",
  resize: "none",
  boxSizing: "border-box",
};

const btnRow = {
  display: "flex",
  gap: "14px",
  marginTop: "24px",
};

const primaryBtn = {
  flex: 1,
  border: "none",
  background: "#2563eb",
  color: "white",
  padding: "14px",
  borderRadius: "15px",
  fontWeight: "900",
  cursor: "pointer",
};

const secondaryBtn = {
  flex: 1,
  border: "1px solid #cbd5e1",
  background: "white",
  color: "#334155",
  padding: "14px",
  borderRadius: "15px",
  fontWeight: "900",
  cursor: "pointer",
};

export default SubmitHomework;