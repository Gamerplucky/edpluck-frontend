import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function ParentDashboard({ darkMode }) {
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

  const cards = [
    ["▥", "Attendance", "92%", "Present today"],
    ["▣", "Homework", "2 Pending", "1 completed"],
    ["⚗", "Test Score", "86%", "Top 15% of class"],
    ["✦", "AI Usage", "5 Doubts", "Safe usage"],
  ];

  const subjects = [
    ["Biology", 88],
    ["Physics", 72],
    ["Chemistry", 64],
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
    barBg: darkMode ? "#334155" : "#e2e8f0",
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
              ...(label === "Parent View" ? activeMenu : {}),
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}

        <div style={{ ...parentBox, background: theme.cardBg }}>
          <h3 style={{ marginTop: 0, color: theme.text }}>Parent Details</h3>
          <p style={{ ...detail, color: theme.softText }}>Guardian: Rajesh Kumar</p>
          <p style={{ ...detail, color: theme.softText }}>Phone: +91 9876543210</p>
          <p style={{ ...smallText, color: theme.muted }}>Last login: Today 7:30 PM</p>
        </div>
      </aside>

      <main style={main}>
        <header style={{ ...topCard, background: theme.cardBg }}>
          <div>
            <h1 style={title}>Parent Dashboard</h1>
            <p style={{ ...subtitle, color: theme.muted }}>
              Daily progress summary of Manas Jaiswal
            </p>
          </div>

          <button style={primaryBtn}>Download Report</button>
        </header>

        <div style={cardGrid}>
          {cards.map(([icon, label, value, sub]) => (
            <div key={label} style={{ ...statCard, background: theme.cardBg }}>
              <div style={iconBox}>{icon}</div>
              <h3 style={{ ...cardLabel, color: theme.softText }}>{label}</h3>
              <h1 style={cardValue}>{value}</h1>
              <p style={{ ...muted, color: theme.muted }}>{sub}</p>
            </div>
          ))}
        </div>

        <div style={twoCol}>
          <section style={{ ...panel, background: theme.cardBg }}>
            <h2 style={{ ...sectionTitle, color: theme.text }}>Weekly Progress</h2>

            {subjects.map(([subject, score]) => (
              <div key={subject} style={{ marginTop: 22 }}>
                <div style={{ ...row, color: theme.softText }}>
                  <b>{subject}</b>
                  <b>{score}%</b>
                </div>

                <div style={{ ...bar, background: theme.barBg }}>
                  <div style={{ ...barFill, width: `${score}%` }} />
                </div>
              </div>
            ))}
          </section>

          <section style={noticeCard}>
            <h2 style={{ marginTop: 0 }}>School Notice</h2>
            <p style={{ lineHeight: 1.6 }}>
              Parent-teacher meeting scheduled for this Saturday at 10:00 AM.
            </p>

            <button
              onClick={() => alert("PTM Details: Saturday, 10:00 AM")}
              style={whiteBtn}
            >
              View Details
            </button>
          </section>
        </div>

        <div style={twoCol}>
          <section style={{ ...panel, background: theme.cardBg }}>
            <h2 style={{ ...sectionTitle, color: theme.text }}>Teacher Remarks</h2>
            <p style={{ ...para, color: theme.softText }}>
              “Manas is improving in Biology but should revise Physics numericals regularly.”
            </p>
            <p style={{ ...muted, color: theme.muted }}>— Class Teacher</p>
          </section>

          <section style={{ ...panel, background: theme.cardBg }}>
            <h2 style={{ ...sectionTitle, color: theme.text }}>Today’s Activity</h2>
            <p style={{ ...activity, color: theme.softText }}>✓ Present in school</p>
            <p style={{ ...activity, color: theme.softText }}>✓ Biology homework viewed</p>
            <p style={{ ...activity, color: theme.softText }}>
              ✦ Used AI assistant for 2 doubts
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ParentDashboard;

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

const parentBox = {
  marginTop: 28,
  padding: 20,
  borderRadius: 24,
  boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
};

const detail = {
  fontWeight: 700,
};

const smallText = {
  fontSize: 13,
  fontWeight: 700,
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

const primaryBtn = {
  border: "none",
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  padding: "15px 24px",
  borderRadius: 16,
  fontWeight: 900,
  cursor: "pointer",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 18,
  marginTop: 24,
};

const statCard = {
  backdropFilter: "blur(22px)",
  padding: 22,
  borderRadius: 24,
  boxShadow: "0 18px 50px rgba(15,23,42,0.1)",
};

const iconBox = {
  width: 46,
  height: 46,
  borderRadius: 16,
  background: "#e0f2fe",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 22,
  marginBottom: 14,
};

const cardLabel = {
  margin: 0,
};

const cardValue = {
  margin: "14px 0 4px",
  fontSize: 32,
};

const muted = {
  fontWeight: 700,
};

const twoCol = {
  display: "grid",
  gridTemplateColumns: "1.4fr 1fr",
  gap: 22,
  marginTop: 24,
};

const panel = {
  backdropFilter: "blur(22px)",
  padding: 24,
  borderRadius: 24,
  boxShadow: "0 18px 50px rgba(15,23,42,0.1)",
};

const sectionTitle = {
  marginTop: 0,
};

const row = {
  display: "flex",
  justifyContent: "space-between",
};

const bar = {
  height: 11,
  borderRadius: 20,
  marginTop: 10,
  overflow: "hidden",
};

const barFill = {
  height: "100%",
  background: "linear-gradient(90deg,#2563eb,#60a5fa)",
  borderRadius: 20,
};

const noticeCard = {
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  padding: 24,
  borderRadius: 24,
  boxShadow: "0 20px 45px rgba(37,99,235,0.28)",
};

const whiteBtn = {
  marginTop: 18,
  width: "100%",
  padding: 14,
  border: "none",
  borderRadius: 16,
  fontWeight: 900,
  cursor: "pointer",
};

const para = {
  lineHeight: 1.6,
  fontWeight: 600,
};

const activity = {
  fontWeight: 700,
};