import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function ProgressAnalytics({ darkMode }) {
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

  const theme = {
    pageBg: darkMode
      ? "linear-gradient(135deg,#020617,#0f172a)"
      : "linear-gradient(135deg,#eef6ff,#dbeafe)",
    cardBg: darkMode ? "rgba(30,41,59,0.92)" : "rgba(255,255,255,0.82)",
    sidebarBg: darkMode ? "rgba(15,23,42,0.92)" : "rgba(255,255,255,0.82)",
    text: darkMode ? "#ffffff" : "#111827",
    softText: darkMode ? "#cbd5e1" : "#334155",
    muted: darkMode ? "#94a3b8" : "#64748b",
    track: darkMode ? "#334155" : "#e2e8f0",
    softBox: darkMode ? "#334155" : "#eff6ff",
  };

  const subjects = [
    ["Biology", 88, "+12%", "Strong"],
    ["Physics", 72, "+6%", "Needs Practice"],
    ["Chemistry", 64, "+4%", "Weak"],
  ];

  const tests = [
    ["Week 1", 68],
    ["Week 2", 74],
    ["Week 3", 81],
    ["Week 4", 86],
  ];

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
              ...(path === "/progress" ? activeMenu : {}),
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <main style={main}>
        <div style={{ ...hero, background: theme.cardBg }}>
          <div>
            <h1 style={{ ...title, color: theme.text }}>Progress Analytics</h1>
            <p style={{ ...subtitle, color: theme.muted }}>
              Marks, Momentum Score, streaks and AI improvement insights
            </p>
          </div>

          <button onClick={() => navigate("/ai")} style={button}>
            Generate Plan
          </button>
        </div>

        <div style={statsGrid}>
          {[
            ["🧪", "Average Score", "78%", "+8% this month"],
            ["🏆", "Class Rank", "#5", "Improved by 3 ranks"],
            ["🔥", "Streak", "12 Days", "Consistent learner"],
            ["⚡", "Momentum Score", "820 XP", "Level 7"],
          ].map(([icon, title, value, desc]) => (
            <div key={title} style={{ ...card, background: theme.cardBg }}>
              <div style={iconBox}>{icon}</div>
              <h3 style={{ ...cardTitle, color: theme.softText }}>{title}</h3>
              <h1 style={{ ...number, color: theme.text }}>{value}</h1>
              <p style={{ ...muted, color: theme.muted }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={gridTwo}>
          <div style={{ ...wideCard, background: theme.cardBg }}>
            <h2 style={sectionTitle}>Subject Performance</h2>

            {subjects.map(([subject, score, growth, status]) => (
              <div key={subject} style={barBox}>
                <div style={{ ...barTop, color: theme.softText }}>
                  <b>{subject}</b>
                  <b>{score}% • {growth}</b>
                </div>

                <div style={{ ...track, background: theme.track }}>
                  <div style={{ ...fill, width: `${score}%` }} />
                </div>

                <p style={{ ...muted, color: theme.muted }}>Status: {status}</p>
              </div>
            ))}
          </div>

          <div style={gradientCard}>
            <h2>AI Recommendation</h2>
            <p style={whiteText}>
              Focus more on Chemistry and Physics numericals. EdPluck AI will
              generate daily practice questions.
            </p>

            <div style={miniGlass}>🎯 Today’s target: +25 XP</div>

            <button onClick={() => navigate("/ai")} style={whiteButton}>
              Generate Practice Plan
            </button>
          </div>
        </div>

        <div style={gridTwo}>
          <div style={{ ...wideCard, background: theme.cardBg }}>
            <h2 style={sectionTitle}>Weekly Test Trend</h2>

            {tests.map(([week, score]) => (
              <div key={week} style={barBox}>
                <div style={{ ...barTop, color: theme.softText }}>
                  <b>{week}</b>
                  <b>{score}%</b>
                </div>

                <div style={{ ...track, background: theme.track }}>
                  <div style={{ ...greenFill, width: `${score}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div onClick={() => navigate("/homework")} style={{ ...wideCard, background: theme.cardBg }}>
            <h2 style={sectionTitle}>Streak System</h2>
            <p style={{ ...line, color: theme.softText }}>✅ Login Streak: 12 Days</p>
            <p style={{ ...line, color: theme.softText }}>✅ Homework Streak: 8 Days</p>
            <p style={{ ...line, color: theme.softText }}>✅ Test Practice Streak: 6 Days</p>

            <div style={{ ...softBox, background: theme.softBox }}>
              Next Reward: 15 Day Streak Badge
            </div>
          </div>
        </div>

        <div style={gridTwo}>
          <div onClick={() => navigate("/ai")} style={{ ...wideCard, background: theme.cardBg }}>
            <h2 style={sectionTitle}>Weak Topics</h2>
            <p style={{ ...line, color: theme.softText }}>🧪 Chemical Bonding</p>
            <p style={{ ...line, color: theme.softText }}>⚡ Electric Charges</p>
            <p style={{ ...line, color: theme.softText }}>📘 Numericals in Physics</p>

            <div style={{ ...softBox, background: theme.softBox }}>
              Priority: Revise 30 min daily
            </div>
          </div>

          <div style={{ ...wideCard, background: theme.cardBg }}>
            <h2 style={sectionTitle}>Momentum Score Breakdown</h2>
            <p style={{ ...line, color: theme.softText }}>📚 Homework Completed: +220 XP</p>
            <p style={{ ...line, color: theme.softText }}>🧪 Weekly Tests: +300 XP</p>
            <p style={{ ...line, color: theme.softText }}>🤖 AI Doubts Solved: +180 XP</p>
            <p style={{ ...line, color: theme.softText }}>🔥 Streak Bonus: +120 XP</p>
          </div>
        </div>

        <div onClick={() => navigate("/parent")} style={{ ...teacherCard, background: theme.cardBg }}>
          <h2 style={sectionTitle}>Teacher Remark</h2>
          <p style={{ ...remark, color: theme.softText }}>
            “Student is improving consistently. Momentum Score is strong, but
            Chemistry concepts and Physics numericals need more focus.”
          </p>
          <p style={{ ...muted, color: theme.muted }}>— Class Teacher</p>
        </div>
      </main>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  display: "flex",
};

const sidebar = {
  width: "260px",
  margin: "28px 0 28px 28px",
  borderRadius: "28px",
  padding: "28px 18px",
  boxShadow: "0 25px 60px rgba(15,23,42,0.12)",
  height: "calc(100vh - 56px)",
  position: "sticky",
  top: "28px",
};

const brandBox = { textAlign: "center", marginBottom: "36px" };

const logo = {
  width: "170px",
  height: "95px",
  objectFit: "contain",
};

const brandSub = { fontWeight: 700, fontSize: "13px" };

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px 22px",
  marginBottom: "14px",
  borderRadius: "16px",
  fontSize: "19px",
  fontWeight: 800,
  cursor: "pointer",
};

const activeMenu = {
  background: "#2563eb",
  color: "white",
  boxShadow: "0 18px 30px rgba(37,99,235,0.28)",
};

const main = { flex: 1, padding: "34px" };

const hero = {
  borderRadius: "28px",
  padding: "24px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
};

const title = { margin: 0, fontSize: "38px" };

const subtitle = {
  margin: "6px 0 0",
  fontSize: "18px",
  fontWeight: 700,
};

const button = {
  border: "none",
  background: "#2563eb",
  color: "white",
  padding: "16px 24px",
  borderRadius: "16px",
  fontWeight: 800,
  fontSize: "15px",
  cursor: "pointer",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: "20px",
  marginTop: "24px",
};

const card = {
  borderRadius: "24px",
  padding: "24px",
  textAlign: "center",
  boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
};

const iconBox = {
  width: "48px",
  height: "48px",
  borderRadius: "16px",
  background: "#dbeafe",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 14px",
  fontSize: "22px",
};

const cardTitle = { fontSize: "18px" };

const number = { fontSize: "32px", margin: "12px 0" };

const muted = { fontWeight: 700 };

const gridTwo = {
  display: "grid",
  gridTemplateColumns: "1.4fr 1fr",
  gap: "22px",
  marginTop: "24px",
};

const wideCard = {
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
  cursor: "pointer",
};

const sectionTitle = { marginTop: 0 };

const barBox = { marginTop: "22px" };

const barTop = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
};

const track = {
  height: "10px",
  borderRadius: "999px",
  overflow: "hidden",
};

const fill = {
  height: "100%",
  background: "linear-gradient(90deg,#2563eb,#60a5fa)",
  borderRadius: "999px",
};

const greenFill = {
  height: "100%",
  background: "linear-gradient(90deg,#22c55e,#2563eb)",
  borderRadius: "999px",
};

const gradientCard = {
  background: "linear-gradient(160deg,#2563eb,#7c3aed)",
  padding: "28px",
  borderRadius: "24px",
  color: "white",
  boxShadow: "0 25px 60px rgba(37,99,235,0.25)",
};

const whiteText = {
  lineHeight: "1.7",
  fontWeight: 600,
};

const miniGlass = {
  background: "rgba(255,255,255,0.16)",
  padding: "16px",
  borderRadius: "16px",
  marginTop: "18px",
  fontWeight: 800,
};

const whiteButton = {
  marginTop: "18px",
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "14px",
  fontWeight: 900,
  cursor: "pointer",
  color: "#2563eb",
};

const softBox = {
  marginTop: "18px",
  padding: "16px",
  borderRadius: "16px",
  color: "#2563eb",
  fontWeight: 900,
};

const line = {
  fontWeight: 700,
  fontSize: "16px",
};

const teacherCard = {
  marginTop: "24px",
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
  cursor: "pointer",
};

const remark = {
  fontSize: "17px",
  lineHeight: "1.7",
  fontWeight: 600,
};

export default ProgressAnalytics;