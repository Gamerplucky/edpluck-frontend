import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function Dashboard({ darkMode }) {
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

  const stats = [
    ["▥", "Attendance", "92%", "+4% this month", "/attendance"],
    ["▣", "Homework", "4", "Pending tasks", "/homework"],
    ["🏆", "Momentum", "Level 7", "820 XP earned", "/progress"],
    ["🧪", "Weekly Test", "86%", "Top 15% of class", "/progress"],
  ];

  const theme = {
    pageBg: darkMode
      ? "radial-gradient(circle at top left,#1e293b 0,transparent 32%), linear-gradient(135deg,#020617,#0f172a)"
      : "radial-gradient(circle at top left,#dbeafe 0,transparent 32%), radial-gradient(circle at top right,#bfdbfe 0,transparent 30%), linear-gradient(135deg,#f8fbff,#eef5ff)",
    glassBg: darkMode ? "rgba(15,23,42,0.82)" : "rgba(255,255,255,0.72)",
    text: darkMode ? "#f8fafc" : "#0f172a",
    subText: darkMode ? "#cbd5e1" : "#64748b",
    softText: darkMode ? "#cbd5e1" : "#475569",
    border: darkMode ? "1px solid rgba(148,163,184,0.22)" : "1px solid rgba(255,255,255,0.65)",
    softBg: darkMode ? "rgba(30,41,59,0.9)" : "rgba(255,255,255,0.75)",
  };

  const glass = {
    background: theme.glassBg,
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: theme.border,
    boxShadow: darkMode
      ? "0 20px 50px rgba(0,0,0,0.35)"
      : "0 20px 50px rgba(15,23,42,0.10)",
  };

  return (
    <div style={{ ...page, background: theme.pageBg }}>
      <aside style={{ ...sidebar, ...glass }}>
        <div style={brandBox}>
          <img src={edpluckLogo} alt="EdPluck" style={logo} />
          <p style={{ ...brandSub, color: theme.subText }}>Smart School Partner</p>
        </div>

        {menu.map(([icon, label, path]) => (
          <div
            key={label}
            onClick={() => navigate(path)}
            style={{
              ...menuItem,
              color: darkMode ? "#e2e8f0" : "#334155",
              ...(label === "Dashboard" ? activeMenu : {}),
            }}
          >
            <span style={menuIcon}>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <main style={{ ...main, color: theme.text }}>
        <div style={{ ...topBar, ...glass }}>
          <div>
            <h1 style={title}>Hello, Manas 👋</h1>
            <p style={{ ...subtitle, color: theme.subText }}>Welcome back to EdPluck</p>
          </div>

          <div style={btnGroup}>
            <button onClick={() => navigate("/settings")} style={secondaryBtn}>
              ⚙ Settings
            </button>
            <button onClick={() => navigate("/ai")} style={primaryBtn}>
              ✦ Ask AI
            </button>
          </div>
        </div>

        <div style={cardGrid}>
          {stats.map(([icon, label, value, sub, path]) => (
            <div key={label} onClick={() => navigate(path)} style={{ ...statCard, ...glass }}>
              <div style={iconCircle}>{icon}</div>
              <p style={{ ...cardTitle, color: theme.softText }}>{label}</p>
              <h2 style={cardValue}>{value}</h2>
              <p style={{ ...smallText, color: theme.subText }}>{sub}</p>
            </div>
          ))}
        </div>

        <div style={middleGrid}>
          <div style={{ ...panel, ...glass }}>
            <h2 style={sectionTitle}>Performance Progress</h2>

            {[["Biology", 88], ["Physics", 72], ["Chemistry", 64]].map(
              ([subject, score]) => (
                <div key={subject} style={{ marginTop: "22px" }}>
                  <div style={row}>
                    <b>{subject}</b>
                    <b>{score}%</b>
                  </div>
                  <div style={progressBg}>
                    <div style={{ ...progressFill, width: `${score}%` }} />
                  </div>
                </div>
              )
            )}
          </div>

          <div
            style={{
              ...aiBox,
              background: darkMode
                ? "linear-gradient(135deg,rgba(30,41,59,0.95),rgba(15,23,42,0.9))"
                : "linear-gradient(135deg,rgba(239,246,255,0.9),rgba(255,255,255,0.65))",
            }}
          >
            <div>
              <h2 style={{ margin: 0 }}>AI Assistant</h2>
              <p style={{ ...aiText, color: theme.softText }}>
                Ask school-related doubts instantly with controlled AI support.
              </p>
              <p style={aiLimit}>💬 5 doubts remaining today</p>
              <button onClick={() => navigate("/ai")} style={aiBtn}>
                Start Chat
              </button>
            </div>
            <div style={botCircle}>🤖</div>
          </div>
        </div>

        <div style={bottomGrid}>
          <div style={{ ...panel, ...glass }}>
            <h2 style={sectionTitle}>Upcoming Homework</h2>
            <p style={{ ...normalText, color: theme.softText }}>
              • Biology: Human Reproduction notes — Due Tomorrow
            </p>
            <p style={{ ...normalText, color: theme.softText }}>
              • Physics: Electric Charges worksheet — Due Friday
            </p>

            <button onClick={() => navigate("/homework")} style={outlineBtn}>
              View Homework →
            </button>
          </div>

          <div style={{ ...panel, ...glass }}>
            <h2 style={sectionTitle}>Today's Focus</h2>
            <p style={{ ...normalText, color: theme.softText }}>✅ Complete 2 homework tasks</p>
            <p style={{ ...normalText, color: theme.softText }}>✅ Revise Biology Chapter 1</p>
            <p style={{ ...normalText, color: theme.softText }}>✅ Ask 1 doubt from AI Assistant</p>
          </div>
        </div>
      </main>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  fontFamily: "Inter, Arial, sans-serif",
};

const sidebar = {
  width: "245px",
  padding: "26px 18px",
  margin: "18px",
  borderRadius: "28px",
};

const brandBox = { textAlign: "center", marginBottom: "34px" };

const logo = {
  width: "155px",
  height: "auto",
  objectFit: "contain",
};

const brandSub = {
  marginTop: "8px",
  fontSize: "12px",
  fontWeight: "800",
  letterSpacing: "0.4px",
};

const menuItem = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
  padding: "14px 16px",
  marginBottom: "10px",
  borderRadius: "16px",
  cursor: "pointer",
  fontWeight: "800",
};

const menuIcon = {
  width: "22px",
  display: "inline-flex",
  justifyContent: "center",
};

const activeMenu = {
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "#ffffff",
  boxShadow: "0 16px 30px rgba(37,99,235,0.30)",
};

const main = {
  flex: 1,
  padding: "34px 34px 34px 12px",
};

const topBar = {
  borderRadius: "28px",
  padding: "22px 26px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
};

const title = {
  fontSize: "34px",
  margin: 0,
  letterSpacing: "-0.8px",
};

const subtitle = {
  margin: "6px 0 0",
  fontWeight: "700",
};

const btnGroup = { display: "flex", gap: "12px" };

const primaryBtn = {
  padding: "13px 24px",
  borderRadius: "16px",
  border: "none",
  background: "linear-gradient(135deg,#2563eb,#1e40af)",
  color: "#fff",
  fontWeight: "900",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "13px 24px",
  borderRadius: "16px",
  border: "1px solid rgba(226,232,240,0.9)",
  background: "rgba(255,255,255,0.75)",
  fontWeight: "900",
  cursor: "pointer",
  color: "#334155",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,minmax(0,1fr))",
  gap: "18px",
};

const statCard = {
  padding: "24px",
  borderRadius: "26px",
  cursor: "pointer",
};

const iconCircle = {
  width: "46px",
  height: "46px",
  borderRadius: "16px",
  background: "linear-gradient(135deg,#eff6ff,#dbeafe)",
  display: "grid",
  placeItems: "center",
  marginBottom: "14px",
};

const cardTitle = { margin: 0, fontWeight: "900" };

const cardValue = {
  fontSize: "30px",
  margin: "12px 0 6px",
};

const smallText = { margin: 0, fontWeight: "700" };

const middleGrid = {
  display: "grid",
  gridTemplateColumns: "1.35fr 1fr",
  gap: "20px",
  marginTop: "24px",
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginTop: "24px",
};

const panel = {
  padding: "24px",
  borderRadius: "26px",
};

const sectionTitle = {
  marginTop: 0,
  fontSize: "21px",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
};

const progressBg = {
  height: "10px",
  background: "rgba(226,232,240,0.9)",
  borderRadius: "999px",
  marginTop: "10px",
  overflow: "hidden",
};

const progressFill = {
  height: "10px",
  background: "linear-gradient(90deg,#2563eb,#60a5fa)",
  borderRadius: "999px",
};

const aiBox = {
  borderRadius: "26px",
  padding: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid rgba(219,234,254,0.9)",
  boxShadow: "0 20px 50px rgba(37,99,235,0.12)",
};

const aiText = {
  lineHeight: "1.6",
  fontWeight: "700",
};

const aiLimit = {
  color: "#2563eb",
  fontWeight: "900",
};

const aiBtn = {
  padding: "13px 24px",
  borderRadius: "16px",
  border: "none",
  background: "linear-gradient(135deg,#2563eb,#1e40af)",
  color: "#fff",
  fontWeight: "900",
  cursor: "pointer",
};

const botCircle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.85)",
  display: "grid",
  placeItems: "center",
  fontSize: "44px",
};

const normalText = {
  fontWeight: "700",
};

const outlineBtn = {
  marginTop: "12px",
  padding: "13px 22px",
  borderRadius: "16px",
  border: "1px solid #bfdbfe",
  background: "rgba(239,246,255,0.78)",
  color: "#2563eb",
  fontWeight: "900",
  cursor: "pointer",
};

export default Dashboard;