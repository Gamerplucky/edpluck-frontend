import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function AIChat({ darkMode }) {
  const navigate = useNavigate();

  const menu = [
    ["⌂", "Dashboard", "/dashboard"],
    ["▣", "Homework", "/homework"],
    ["▥", "Attendance", "/attendance"],
    ["◴", "Progress", "/progress"],
    ["✦", "AI Assistant", "/ai"],
    ["♙", "Parent View", "/parent"],
    ["⚙", "Settings", "/settings"],
  ];

  const messages = [
    ["student", "What is photosynthesis?"],
    ["ai", "Photosynthesis is the process by which green plants make food using sunlight, carbon dioxide, and water."],
    ["student", "Explain it in simple words."],
    ["ai", "Plants use sunlight, water and carbon dioxide to make food and release oxygen."],
  ];

  const quickDoubts = [
    "Explain photosynthesis",
    "Solve physics numericals",
    "Make biology notes",
    "Prepare quiz questions",
  ];

  const theme = {
    pageBg: darkMode
      ? "linear-gradient(135deg,#020617,#0f172a)"
      : "linear-gradient(135deg,#f8fbff,#dbeafe)",
    cardBg: darkMode ? "rgba(30,41,59,0.92)" : "rgba(255,255,255,0.76)",
    sidebarBg: darkMode ? "rgba(15,23,42,0.94)" : "rgba(255,255,255,0.72)",
    text: darkMode ? "#ffffff" : "#0f172a",
    softText: darkMode ? "#cbd5e1" : "#334155",
    muted: darkMode ? "#94a3b8" : "#64748b",
    lightBox: darkMode ? "#334155" : "#f1f5f9",
    border: darkMode ? "#334155" : "#e2e8f0",
  };

  return (
    <div style={{ ...page, background: theme.pageBg, color: theme.text }}>
      <aside style={{ ...sidebar, background: theme.sidebarBg }}>
        <div style={brandBox}>
          <img src={edpluckLogo} alt="EdPluck" style={logo} />
          <p style={{ ...brandSub, color: theme.muted }}>Smart School Partner</p>
        </div>

        {menu.map(([icon, label, path]) => (
          <div
            key={label}
            onClick={() => navigate(path)}
            style={{
              ...menuItem,
              color: darkMode ? "#e2e8f0" : "#334155",
              ...(label === "AI Assistant" ? activeMenu : {}),
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}

        <div style={{ ...creditBox, background: theme.cardBg }}>
          <p style={{ ...smallText, color: theme.muted }}>AI Credits</p>
          <h2 style={creditTitle}>5 / 10 Left</h2>
          <div style={{ ...bar, background: theme.lightBox }}>
            <div style={barFill} />
          </div>
          <p style={{ ...smallText, color: theme.muted }}>Daily controlled usage</p>
        </div>
      </aside>

      <main style={main}>
        <header style={{ ...topCard, background: theme.cardBg }}>
          <div>
            <h1 style={title}>AI Assistant 🤖</h1>
            <p style={{ ...subtitle, color: theme.muted }}>
              School-related doubts, notes, quizzes and safe AI support
            </p>
          </div>

          <button style={settingsBtn} onClick={() => navigate("/settings")}>
            ⚙ Settings
          </button>
        </header>

        <div style={grid}>
          <section style={{ ...chatCard, background: theme.cardBg }}>
            <div style={{ ...chatHeader, borderBottom: `1px solid ${theme.border}` }}>
              <div>
                <h2 style={{ ...sectionTitle, color: theme.text }}>School AI Tutor</h2>
                <p style={{ ...muted, color: theme.muted }}>Class 12 PCB Assistant</p>
              </div>
              <span style={online}>● Online</span>
            </div>

            <div style={chatBody}>
              {messages.map(([sender, text], index) => {
                const isStudent = sender === "student";

                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: isStudent ? "flex-end" : "flex-start",
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        ...bubble,
                        ...(isStudent
                          ? studentBubble
                          : {
                              ...aiBubble,
                              background: theme.lightBox,
                              color: theme.softText,
                            }),
                      }}
                    >
                      {text}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ ...inputBox, borderTop: `1px solid ${theme.border}` }}>
              <input placeholder="Type your doubt here..." style={input} />
              <button style={sendBtn}>Send</button>
            </div>
          </section>

          <aside style={rightPanel}>
            <div style={{ ...infoCard, background: theme.cardBg }}>
              <h2 style={{ ...sectionTitle, color: theme.text }}>Safety Rules</h2>
              <p style={{ ...para, color: theme.softText }}>
                AI only answers school-related questions and blocks unrelated doubts.
              </p>
            </div>

            <div style={{ ...infoCard, background: theme.cardBg }}>
              <h2 style={{ ...sectionTitle, color: theme.text }}>Quick Doubts</h2>
              {quickDoubts.map((item) => (
                <div
                  key={item}
                  style={{
                    ...quickItem,
                    background: theme.lightBox,
                    color: theme.softText,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={highlightCard}>
              <h2 style={{ margin: 0 }}>Smart Limit</h2>
              <p style={{ lineHeight: 1.6 }}>
                Each student gets limited AI credits to control school cost.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default AIChat;

const page = {
  minHeight: "100vh",
  display: "flex",
  fontFamily: "Inter, Arial, sans-serif",
};

const sidebar = {
  width: 280,
  padding: "26px 20px",
  backdropFilter: "blur(22px)",
  boxShadow: "18px 0 45px rgba(30,64,175,0.12)",
};

const brandBox = {
  textAlign: "center",
  marginBottom: 30,
};

const logo = {
  width: 155,
  background: "white",
  padding: 18,
  borderRadius: 20,
};

const brandSub = {
  fontWeight: 700,
  fontSize: 13,
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "15px 18px",
  marginBottom: 12,
  borderRadius: 18,
  fontWeight: 800,
  cursor: "pointer",
};

const activeMenu = {
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  boxShadow: "0 16px 30px rgba(37,99,235,0.28)",
};

const creditBox = {
  marginTop: 28,
  padding: 20,
  borderRadius: 24,
  boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
};

const smallText = {
  fontSize: 13,
  fontWeight: 700,
};

const creditTitle = {
  margin: "8px 0",
};

const bar = {
  height: 10,
  borderRadius: 20,
  overflow: "hidden",
};

const barFill = {
  width: "50%",
  height: "100%",
  background: "linear-gradient(90deg,#2563eb,#60a5fa)",
};

const main = {
  flex: 1,
  padding: 32,
};

const topCard = {
  backdropFilter: "blur(22px)",
  borderRadius: 28,
  padding: "24px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 22px 60px rgba(30,64,175,0.14)",
};

const title = {
  margin: 0,
  fontSize: 36,
};

const subtitle = {
  margin: "6px 0 0",
  fontWeight: 700,
};

const settingsBtn = {
  border: "1px solid #dbeafe",
  background: "rgba(255,255,255,0.8)",
  padding: "14px 22px",
  borderRadius: 16,
  fontWeight: 800,
  cursor: "pointer",
  color: "#334155",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 24,
  marginTop: 24,
};

const chatCard = {
  height: 560,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: 28,
  backdropFilter: "blur(22px)",
  boxShadow: "0 22px 60px rgba(15,23,42,0.12)",
};

const chatHeader = {
  padding: "20px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const sectionTitle = {
  margin: 0,
};

const muted = {
  margin: "5px 0 0",
  fontWeight: 700,
};

const online = {
  color: "#16a34a",
  fontWeight: 900,
};

const chatBody = {
  flex: 1,
  padding: 24,
  overflowY: "auto",
};

const bubble = {
  maxWidth: "72%",
  padding: "14px 16px",
  lineHeight: 1.5,
  fontWeight: 600,
};

const studentBubble = {
  borderRadius: "18px 18px 4px 18px",
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
};

const aiBubble = {
  borderRadius: "18px 18px 18px 4px",
};

const inputBox = {
  padding: 18,
  display: "flex",
  gap: 12,
};

const input = {
  flex: 1,
  padding: 15,
  borderRadius: 16,
  border: "1px solid #cbd5e1",
  outline: "none",
  background: "white",
  fontWeight: 600,
};

const sendBtn = {
  padding: "15px 28px",
  border: "none",
  borderRadius: 16,
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};

const rightPanel = {
  display: "flex",
  flexDirection: "column",
  gap: 18,
};

const infoCard = {
  backdropFilter: "blur(22px)",
  padding: 22,
  borderRadius: 24,
  boxShadow: "0 18px 50px rgba(15,23,42,0.1)",
};

const para = {
  lineHeight: 1.6,
  fontWeight: 600,
};

const quickItem = {
  padding: 13,
  borderRadius: 14,
  marginTop: 10,
  fontWeight: 700,
};

const highlightCard = {
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  padding: 24,
  borderRadius: 24,
  boxShadow: "0 20px 45px rgba(37,99,235,0.28)",
};