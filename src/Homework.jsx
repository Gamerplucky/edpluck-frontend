import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function Homework({ darkMode }) {
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
    ["▣", "Pending", "2", "Needs attention"],
    ["✓", "Completed", "1", "This week"],
    ["🔥", "Streak", "12 Days", "Keep it up"],
    ["◴", "Rate", "89%", "Completion rate"],
  ];

  const homeworks = [
    ["Biology", "Human Reproduction Notes", "Sharma Sir", "Tomorrow", "30 min", "Medium", "High", "Pending"],
    ["Physics", "Electric Charges Worksheet", "Verma Sir", "Friday", "45 min", "Hard", "High", "Pending"],
    ["Chemistry", "Chemical Bonding Assignment", "Rao Sir", "Completed", "25 min", "Easy", "Low", "Completed"],
  ];

  const theme = {
    pageBg: darkMode
      ? "linear-gradient(135deg,#020617,#0f172a)"
      : "linear-gradient(135deg,#eef6ff,#dbeafe)",
    cardBg: darkMode ? "rgba(30,41,59,0.92)" : "rgba(255,255,255,0.76)",
    sidebarBg: darkMode ? "rgba(15,23,42,0.92)" : "rgba(255,255,255,0.72)",
    text: darkMode ? "#ffffff" : "#0f172a",
    subText: darkMode ? "#cbd5e1" : "#64748b",
    softText: darkMode ? "#cbd5e1" : "#475569",
    infoBg: darkMode ? "#334155" : "#f1f5f9",
  };

  return (
    <div style={{ ...page, background: theme.pageBg }}>
      <aside style={{ ...sidebar, background: theme.sidebarBg }}>
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
              ...(label === "Homework" ? activeMenu : {}),
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <main style={main}>
        <section style={{ ...topBar, background: theme.cardBg }}>
          <div>
            <h1 style={{ ...title, color: theme.text }}>Homework Center 📚</h1>
            <p style={{ ...subTitle, color: theme.subText }}>
              Track assignments, deadlines and teacher remarks
            </p>
          </div>

          <button onClick={() => navigate("/submit")} style={primaryBtn}>
            📤 Submit Homework
          </button>
        </section>

        <section style={statsGrid}>
          {stats.map(([icon, title, value, sub]) => (
            <div key={title} style={{ ...card, background: theme.cardBg }}>
              <div style={iconBox}>{icon}</div>
              <h3 style={{ ...cardTitle, color: theme.softText }}>{title}</h3>
              <h2 style={{ ...cardValue, color: theme.text }}>{value}</h2>
              <p style={{ ...cardSub, color: theme.subText }}>{sub}</p>
            </div>
          ))}
        </section>

        <section style={contentGrid}>
          <div>
            {homeworks.map(([subject, hwTitleText, teacher, due, time, difficulty, priority, status]) => (
              <div key={hwTitleText} style={{ ...homeworkCard, background: theme.cardBg }}>
                <div style={hwTop}>
                  <div>
                    <h2 style={{ ...hwSubject, color: theme.text }}>{subject}</h2>
                    <p style={{ ...hwTitle, color: theme.softText }}>{hwTitleText}</p>
                  </div>

                  <span
                    style={{
                      ...badge,
                      background: status === "Completed" ? "#dcfce7" : "#ffedd5",
                      color: status === "Completed" ? "#15803d" : "#c2410c",
                    }}
                  >
                    {status}
                  </span>
                </div>

                <div style={infoGrid}>
                  {[`👨‍🏫 ${teacher}`, `⏱ ${time}`, `⭐ ${difficulty}`, `⚡ ${priority} Priority`, `📅 Due: ${due}`].map(
                    (item) => (
                      <div
                        key={item}
                        style={{
                          ...infoBox,
                          background: theme.infoBg,
                          color: theme.softText,
                        }}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                <div style={btnRow}>
                  <button style={primarySmall}>View Assignment</button>
                  <button onClick={() => navigate("/submit")} style={secondarySmall}>
                    Submit Work
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside style={rightPanel}>
            <div style={{ ...sideCard, background: theme.cardBg, color: theme.softText }}>
              <h2 style={{ color: theme.text }}>Teacher Remarks</h2>
              <p>“Good progress. Complete Biology notes before tomorrow.”</p>
              <b>— Class Teacher</b>
            </div>

            <div style={{ ...sideCard, background: theme.cardBg, color: theme.softText }}>
              <h2 style={{ color: theme.text }}>Due Calendar</h2>
              <p>Tomorrow — Biology</p>
              <p>Friday — Physics</p>
              <p>Completed — Chemistry</p>
            </div>

            <div style={aiCard}>
              <h2>AI Homework Help</h2>
              <p>Ask AI Assistant to explain homework topics before submission.</p>
              <button onClick={() => navigate("/ai")} style={whiteBtn}>
                Ask AI
              </button>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  fontFamily: "Arial, sans-serif",
};

const sidebar = {
  width: "260px",
  margin: "18px",
  padding: "26px 20px",
  borderRadius: "28px",
  backdropFilter: "blur(18px)",
  boxShadow: "0 25px 60px rgba(37,99,235,0.16)",
};

const brandBox = {
  textAlign: "center",
  marginBottom: "32px",
};

const logo = {
  width: "155px",
  background: "white",
  padding: "18px",
  borderRadius: "6px",
};

const brandSub = {
  fontSize: "13px",
  fontWeight: "700",
};

const menuItem = {
  display: "flex",
  gap: "14px",
  alignItems: "center",
  padding: "15px 20px",
  marginBottom: "12px",
  borderRadius: "15px",
  fontWeight: "800",
  cursor: "pointer",
};

const activeMenu = {
  background: "#2563eb",
  color: "white",
  boxShadow: "0 15px 28px rgba(37,99,235,0.3)",
};

const main = {
  flex: 1,
  padding: "34px 34px 34px 10px",
};

const topBar = {
  borderRadius: "28px",
  padding: "24px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 18px 45px rgba(37,99,235,0.13)",
};

const title = {
  margin: 0,
  fontSize: "34px",
};

const subTitle = {
  margin: "6px 0 0",
  fontWeight: "700",
};

const primaryBtn = {
  border: "none",
  background: "#2563eb",
  color: "white",
  padding: "14px 24px",
  borderRadius: "16px",
  fontWeight: "900",
  cursor: "pointer",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "18px",
  marginTop: "24px",
};

const card = {
  padding: "24px",
  borderRadius: "24px",
  boxShadow: "0 18px 45px rgba(37,99,235,0.12)",
};

const iconBox = {
  width: "44px",
  height: "44px",
  borderRadius: "14px",
  background: "#dbeafe",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardTitle = {};

const cardValue = {
  fontSize: "30px",
  margin: "8px 0",
};

const cardSub = {
  fontWeight: "700",
};

const contentGrid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "22px",
  marginTop: "24px",
};

const homeworkCard = {
  padding: "24px",
  borderRadius: "24px",
  marginBottom: "18px",
  boxShadow: "0 18px 45px rgba(37,99,235,0.12)",
};

const hwTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const hwSubject = {
  margin: 0,
};

const hwTitle = {
  fontWeight: "700",
};

const badge = {
  padding: "9px 15px",
  borderRadius: "999px",
  fontWeight: "900",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  marginTop: "14px",
};

const infoBox = {
  padding: "12px",
  borderRadius: "14px",
  fontWeight: "700",
};

const btnRow = {
  display: "flex",
  gap: "12px",
  marginTop: "20px",
};

const primarySmall = {
  border: "none",
  background: "#2563eb",
  color: "white",
  padding: "12px 18px",
  borderRadius: "13px",
  fontWeight: "900",
  cursor: "pointer",
};

const secondarySmall = {
  border: "1px solid #cbd5e1",
  background: "white",
  color: "#334155",
  padding: "12px 18px",
  borderRadius: "13px",
  fontWeight: "900",
  cursor: "pointer",
};

const rightPanel = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const sideCard = {
  padding: "24px",
  borderRadius: "24px",
  boxShadow: "0 18px 45px rgba(37,99,235,0.12)",
};

const aiCard = {
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  padding: "24px",
  borderRadius: "24px",
  boxShadow: "0 18px 45px rgba(37,99,235,0.25)",
};

const whiteBtn = {
  width: "100%",
  border: "none",
  background: "white",
  color: "#2563eb",
  padding: "13px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

export default Homework;