import { useState } from "react";
import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const roles = {
    student: {
      icon: "🎓",
      title: "Student Login",
      subtitle: "Access homework, tests and AI doubts",
      userPlaceholder: "Student ID",
      button: "Login as Student",
      path: "/dashboard",
      color: "#2563eb",
    },
    teacher: {
      icon: "👩‍🏫",
      title: "Teacher Login",
      subtitle: "Manage classes, homework and attendance",
      userPlaceholder: "Teacher ID",
      button: "Login as Teacher",
      path: "/teacher-dashboard",
      color: "#10b981",
    },
    principal: {
      icon: "🏫",
      title: "Principal Login",
      subtitle: "View complete school performance",
      userPlaceholder: "Principal ID",
      button: "Login as Principal",
      path: "/admin-dashboard",
      color: "#7c3aed",
    },
    parent: {
      icon: "👨‍👩‍👧",
      title: "Parent / Guardian Login",
      subtitle: "Track attendance, homework and child progress",
      userPlaceholder: "Parent / Guardian ID",
      button: "Login as Parent / Guardian",
      path: "/parent",
      color: "#f59e0b",
    },
  };

  const current = roles[role];

  return (
    <div style={page}>
      <div style={card}>
        <img src={edpluckLogo} alt="EdPluck Logo" style={logo} />

        <h1 style={title}>Welcome to EdPluck</h1>
        <p style={subTitle}>Smart School Partner powered by AI</p>

        <div style={formBox}>
          <label style={label}>School Name</label>
          <input style={input} placeholder="Enter school name" />

          <label style={label}>Login As</label>

          <div style={roleGrid}>
            {Object.entries(roles).map(([key, item]) => (
              <div
                key={key}
                onClick={() => setRole(key)}
                style={{
                  ...roleCard,
                  ...(role === key
                    ? {
                        border: `1.5px solid ${item.color}`,
                        boxShadow: `0 0 25px ${item.color}55`,
                        transform: "translateY(-4px)",
                      }
                    : {}),
                }}
              >
                <div style={{ fontSize: "28px" }}>{item.icon}</div>

                <h3 style={roleTitle}>
                  {key === "principal"
                    ? "Principal"
                    : key === "parent"
                    ? "Parent"
                    : key}
                </h3>

                <p style={roleText}>
                  {key === "student"
                    ? "Learn smarter"
                    : key === "teacher"
                    ? "Manage classes"
                    : key === "principal"
                    ? "Manage school"
                    : "Track child"}
                </p>
              </div>
            ))}
          </div>

          <div style={{ ...loginHeader, color: current.color }}>
            {current.icon} {current.title}
          </div>

          <p style={loginSub}>{current.subtitle}</p>

          <label style={label}>User ID</label>
          <input style={input} placeholder={current.userPlaceholder} />

          <label style={label}>Password</label>
          <input type="password" style={input} placeholder="Enter password" />

          <button
            onClick={() => navigate(current.path)}
            style={{
              ...button,
              background: `linear-gradient(90deg, ${current.color}, #3b82f6)`,
              boxShadow: `0 14px 35px ${current.color}55`,
            }}
          >
            {current.button}
          </button>

          <p style={footer}>Powered by EdPluck AI Platform</p>
        </div>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top left, #dbeafe, transparent 35%), linear-gradient(135deg, #eaf2ff, #f8fbff)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
  padding: "30px",
};

const card = {
  width: "820px",
  background: "rgba(255,255,255,0.62)",
  backdropFilter: "blur(22px)",
  border: "1px solid rgba(255,255,255,0.8)",
  borderRadius: "34px",
  padding: "34px",
  textAlign: "center",
  boxShadow: "0 30px 80px rgba(37,99,235,0.18)",
};

const logo = {
  width: "150px",
  marginBottom: "12px",
};

const title = {
  margin: "0",
  fontSize: "34px",
  color: "#0f172a",
};

const subTitle = {
  marginTop: "8px",
  marginBottom: "28px",
  color: "#64748b",
  fontWeight: "600",
};

const formBox = {
  background: "rgba(255,255,255,0.65)",
  border: "1px solid rgba(226,232,240,0.9)",
  borderRadius: "26px",
  padding: "26px",
  textAlign: "left",
};

const label = {
  display: "block",
  marginTop: "14px",
  marginBottom: "8px",
  color: "#334155",
  fontWeight: "800",
  fontSize: "14px",
};

const input = {
  width: "100%",
  padding: "16px",
  borderRadius: "15px",
  border: "1px solid #dbe3ef",
  background: "rgba(255,255,255,0.92)",
  color: "#0f172a",
  boxSizing: "border-box",
  fontSize: "15px",
  outline: "none",
};

const roleGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "14px",
  marginTop: "12px",
  marginBottom: "22px",
};

const roleCard = {
  background: "rgba(248,250,252,0.85)",
  border: "1px solid #e2e8f0",
  borderRadius: "20px",
  padding: "18px 10px",
  textAlign: "center",
  cursor: "pointer",
  transition: "0.25s",
};

const roleTitle = {
  margin: "10px 0 5px",
  textTransform: "capitalize",
  color: "#0f172a",
};

const roleText = {
  margin: 0,
  color: "#64748b",
  fontSize: "13px",
  fontWeight: "600",
};

const loginHeader = {
  fontSize: "24px",
  fontWeight: "900",
  textAlign: "center",
  marginTop: "10px",
};

const loginSub = {
  textAlign: "center",
  color: "#64748b",
  fontWeight: "600",
  marginBottom: "18px",
};

const button = {
  width: "100%",
  padding: "16px",
  marginTop: "25px",
  borderRadius: "16px",
  border: "none",
  color: "white",
  fontSize: "17px",
  fontWeight: "bold",
  cursor: "pointer",
};

const footer = {
  textAlign: "center",
  marginTop: "18px",
  color: "#64748b",
  fontSize: "13px",
  fontWeight: "600",
};

export default Login;