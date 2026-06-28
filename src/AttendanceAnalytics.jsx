import { Link } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function AttendanceAnalytics({ darkMode }) {
  const menu = [
    ["⌂", "Dashboard", "/dashboard"],
    ["▣", "Homework", "/homework"],
    ["▥", "Attendance", "/attendance"],
    ["◴", "Progress", "/progress"],
    ["✦", "AI Assistant", "/ai"],
    ["♙", "Parent View", "/parent"],
    ["⚙", "Settings", "/settings"],
  ];

  const monthly = [
    ["Jan", 90],
    ["Feb", 94],
    ["Mar", 82],
    ["Apr", 96],
    ["May", 91],
    ["Jun", 92],
  ];

  const calendar = [
    "P", "P", "P", "A", "P", "P", "P",
    "P", "P", "A", "P", "P", "P", "P",
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
  };

  return (
    <div style={{ ...page, background: theme.pageBg, color: theme.text }}>
      <aside style={{ ...sidebar, background: theme.sidebarBg }}>
        <div style={brandBox}>
          <img src={edpluckLogo} alt="EdPluck" style={logo} />
          <p style={{ ...brandSub, color: theme.muted }}>Smart School Partner</p>
        </div>

        {menu.map(([icon, label, path]) => (
          <Link
            key={label}
            to={path}
            style={{
              ...menuItem,
              color: darkMode ? "#e2e8f0" : "#334155",
              ...(path === "/attendance" ? activeMenu : {}),
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </aside>

      <main style={main}>
        <div style={{ ...hero, background: theme.cardBg }}>
          <div>
            <h1 style={{ ...title, color: theme.text }}>Attendance Analytics</h1>
            <p style={{ ...subtitle, color: theme.muted }}>
              Track attendance with monthly insights
            </p>
          </div>

          <button style={button}>Download Report</button>
        </div>

        <div style={statsGrid}>
          <div style={{ ...card, background: theme.cardBg }}>
            <div style={iconBox}>▥</div>
            <h3 style={{ ...cardTitle, color: theme.softText }}>Total Attendance</h3>
            <h1 style={{ ...number, color: theme.text }}>92%</h1>
            <p style={greenText}>Good Performance</p>
          </div>

          <div style={{ ...card, background: theme.cardBg }}>
            <div style={iconBox}>✓</div>
            <h3 style={{ ...cardTitle, color: theme.softText }}>Present Days</h3>
            <h1 style={{ ...number, color: theme.text }}>24</h1>
            <p style={{ ...muted, color: theme.muted }}>This Month</p>
          </div>

          <div style={{ ...card, background: theme.cardBg }}>
            <div style={iconBox}>!</div>
            <h3 style={{ ...cardTitle, color: theme.softText }}>Absent Days</h3>
            <h1 style={{ ...number, color: theme.text }}>2</h1>
            <p style={redText}>Needs Attention</p>
          </div>
        </div>

        <div style={bottomGrid}>
          <div style={{ ...wideCard, background: theme.cardBg }}>
            <h2 style={{ ...sectionTitle, color: theme.text }}>Monthly Attendance</h2>

            {monthly.map(([month, value]) => (
              <div key={month} style={barBox}>
                <div style={{ ...barTop, color: theme.softText }}>
                  <b>{month}</b>
                  <b>{value}%</b>
                </div>

                <div style={{ ...track, background: theme.track }}>
                  <div style={{ ...fill, width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...wideCard, background: theme.cardBg }}>
            <h2 style={{ ...sectionTitle, color: theme.text }}>14-Day Calendar</h2>

            <div style={calendarGrid}>
              {calendar.map((day, index) => (
                <div
                  key={index}
                  style={{
                    ...dayBox,
                    background:
                      day === "P"
                        ? "linear-gradient(135deg,#22c55e,#16a34a)"
                        : "linear-gradient(135deg,#ef4444,#dc2626)",
                  }}
                >
                  {day}
                </div>
              ))}
            </div>

            <p style={{ ...muted, color: theme.muted }}>P = Present, A = Absent</p>
          </div>
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

const brandBox = {
  textAlign: "center",
  marginBottom: "36px",
};

const logo = {
  width: "170px",
  height: "95px",
  objectFit: "contain",
};

const brandSub = {
  fontWeight: 700,
  fontSize: "13px",
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px 22px",
  marginBottom: "14px",
  textDecoration: "none",
  borderRadius: "16px",
  fontSize: "19px",
  fontWeight: 800,
};

const activeMenu = {
  background: "#2563eb",
  color: "white",
  boxShadow: "0 18px 30px rgba(37,99,235,0.28)",
};

const main = {
  flex: 1,
  padding: "34px",
};

const hero = {
  borderRadius: "28px",
  padding: "24px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
};

const title = {
  margin: 0,
  fontSize: "38px",
};

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
  boxShadow: "0 18px 30px rgba(37,99,235,0.28)",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
  marginTop: "24px",
};

const card = {
  borderRadius: "24px",
  padding: "26px",
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
  margin: "0 auto 16px",
};

const cardTitle = {
  fontSize: "20px",
};

const number = {
  fontSize: "32px",
  margin: "12px 0",
};

const greenText = {
  color: "#16a34a",
  fontWeight: 800,
};

const redText = {
  color: "#dc2626",
  fontWeight: 800,
};

const muted = {
  fontWeight: 700,
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "22px",
  marginTop: "24px",
};

const wideCard = {
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 25px 60px rgba(15,23,42,0.10)",
};

const sectionTitle = {
  marginTop: 0,
  textAlign: "center",
};

const barBox = {
  marginBottom: "22px",
};

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

const calendarGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(7,1fr)",
  gap: "10px",
  margin: "24px 0",
};

const dayBox = {
  height: "42px",
  color: "white",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 900,
};

export default AttendanceAnalytics;