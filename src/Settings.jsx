import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function Settings({ darkMode, setDarkMode }) {
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

  const dynamicPage = {
    ...page,
    background: darkMode
      ? "linear-gradient(135deg,#020617,#0f172a)"
      : "linear-gradient(135deg,#eef6ff,#dbeafe)",
    color: darkMode ? "#ffffff" : "#111827",
  };

  const dynamicSidebar = {
    ...sidebar,
    background: darkMode ? "rgba(15,23,42,0.92)" : "rgba(255,255,255,0.75)",
  };

  const dynamicHero = {
    ...hero,
    background: darkMode ? "rgba(30,41,59,0.92)" : "rgba(255,255,255,0.78)",
  };

  const dynamicCard = {
    ...card,
    background: darkMode ? "rgba(30,41,59,0.92)" : "rgba(255,255,255,0.78)",
  };

  const dynamicText = {
    ...text,
    color: darkMode ? "#cbd5e1" : "#475569",
  };

  const dynamicCardTitle = {
    ...cardTitle,
    color: darkMode ? "#ffffff" : "#334155",
  };

  return (
    <div style={dynamicPage}>
      <aside style={dynamicSidebar}>
        <div style={brandBox}>
          <img src={edpluckLogo} alt="EdPluck" style={logo} />
          <p style={brandSub}>Smart School Partner</p>
        </div>

        {menu.map(([icon, label, path]) => (
          <div
            key={label}
            onClick={() => navigate(path)}
            style={{
              ...menuItem,
              color: darkMode ? "#e2e8f0" : "#334155",
              ...(label === "Settings" ? activeMenu : {}),
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <main style={main}>
        <section style={dynamicHero}>
          <div>
            <h1 style={title}>Settings ⚙️</h1>
            <p style={subtitle}>Manage profile, notifications and preferences</p>
          </div>

          <button style={aiBtn} onClick={() => navigate("/ai")}>
            ✦ Ask AI
          </button>
        </section>

        <section style={grid}>
          <div style={dynamicCard}>
            <div style={iconBox}>👤</div>
            <h2 style={dynamicCardTitle}>Student Profile</h2>
            <p style={dynamicText}>Name: Manas Jaiswal</p>
            <p style={dynamicText}>Class: 12</p>
            <p style={dynamicText}>Roll No: 23</p>
            <p style={dynamicText}>School: EdPluck Demo School</p>
          </div>

          <div style={dynamicCard}>
            <div style={iconBox}>🔔</div>
            <h2 style={dynamicCardTitle}>Notifications</h2>

            <label style={dynamicText}>
              <input type="checkbox" defaultChecked /> Attendance Alerts
            </label>

            <label style={dynamicText}>
              <input type="checkbox" defaultChecked /> Homework Updates
            </label>

            <label style={dynamicText}>
              <input type="checkbox" /> AI Assistant Tips
            </label>
          </div>

          <div style={dynamicCard}>
            <div style={iconBox}>🎨</div>
            <h2 style={dynamicCardTitle}>Appearance</h2>
            <p style={dynamicText}>
              Current Theme: {darkMode ? "Dark Mode" : "Glassmorphism Minimal"}
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "18px" }}>
              <button
                style={{
                  ...primaryBtn,
                  background: darkMode ? "#334155" : "#2563eb",
                }}
                onClick={() => setDarkMode(false)}
              >
                ☀ Light Mode
              </button>

              <button
                style={{
                  ...lightBtn,
                  background: darkMode ? "#2563eb" : "#e2e8f0",
                  color: darkMode ? "white" : "#111827",
                }}
                onClick={() => setDarkMode(true)}
              >
                🌙 Dark Mode
              </button>
            </div>
          </div>

          <div style={dynamicCard}>
            <div style={iconBox}>🔐</div>
            <h2 style={dynamicCardTitle}>Account</h2>
            <p style={dynamicText}>Status: Active Student Account</p>
            <p style={dynamicText}>Security: Protected</p>

            <button style={logoutBtn} onClick={() => navigate("/login")}>
              Logout
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  fontFamily: "Inter, Arial, sans-serif",
  display: "flex",
};

const sidebar = {
  width: "260px",
  margin: "18px",
  padding: "26px 18px",
  borderRadius: "28px",
  backdropFilter: "blur(18px)",
  boxShadow: "0 25px 60px rgba(37,99,235,0.18)",
  height: "calc(100vh - 36px)",
  position: "sticky",
  top: "18px",
};

const brandBox = {
  textAlign: "center",
  marginBottom: "34px",
};

const logo = {
  width: "150px",
  background: "white",
  padding: "18px",
  borderRadius: "8px",
};

const brandSub = {
  color: "#64748b",
  fontWeight: "800",
  fontSize: "13px",
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px 20px",
  marginBottom: "12px",
  borderRadius: "16px",
  fontSize: "19px",
  fontWeight: "800",
  cursor: "pointer",
};

const activeMenu = {
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  boxShadow: "0 18px 35px rgba(37,99,235,0.35)",
};

const main = {
  flex: 1,
  padding: "34px 34px 34px 10px",
};

const hero = {
  backdropFilter: "blur(18px)",
  borderRadius: "28px",
  padding: "26px 28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 25px 60px rgba(37,99,235,0.14)",
  marginBottom: "24px",
};

const title = {
  margin: 0,
  fontSize: "36px",
  fontWeight: "900",
};

const subtitle = {
  margin: "6px 0 0",
  color: "#64748b",
  fontWeight: "800",
  fontSize: "17px",
};

const aiBtn = {
  border: "none",
  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "white",
  padding: "15px 24px",
  borderRadius: "16px",
  fontWeight: "900",
  cursor: "pointer",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(260px, 1fr))",
  gap: "22px",
};

const card = {
  backdropFilter: "blur(18px)",
  borderRadius: "26px",
  padding: "28px",
  boxShadow: "0 25px 60px rgba(37,99,235,0.13)",
  border: "1px solid rgba(255,255,255,0.65)",
};

const iconBox = {
  width: "46px",
  height: "46px",
  borderRadius: "15px",
  background: "#dbeafe",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  marginBottom: "14px",
};

const cardTitle = {
  fontSize: "22px",
  margin: "0 0 18px",
};

const text = {
  fontSize: "17px",
  fontWeight: "700",
  margin: "10px 0",
};

const primaryBtn = {
  border: "none",
  color: "white",
  padding: "13px 22px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

const lightBtn = {
  border: "none",
  padding: "13px 22px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

const logoutBtn = {
  marginTop: "18px",
  border: "none",
  background: "#ef4444",
  color: "white",
  padding: "13px 26px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

export default Settings;