import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function TeacherDashboard() {
  const navigate = useNavigate();

  const menu = [
    ["🏠", "Dashboard", "/teacher-dashboard"],
    ["👨‍🎓", "Students", "/teacher-students"],
    ["✅", "Attendance", "/teacher-attendance"],
    ["📚", "Homework", "/teacher-homework"],
    ["📝", "Assignments", "/teacher-assignments"],
    ["📊", "Exams & Marks", "/teacher-marks"],
    ["📢", "Announcements", "/teacher-notice"],
    ["⚙️", "Settings", "/settings"],
  ];

  const stats = [
    ["👨‍🎓", "Total Students", "35", "Class 12A Biology"],
    ["✅", "Today Attendance", "92%", "32 present / 35"],
    ["📚", "Homework Review", "8", "Pending submissions"],
    ["📊", "Class Average", "78%", "+6% this month"],
  ];

  const tasks = [
    ["✅", "Take attendance for Class 12A", "Before 9:00 AM"],
    ["📚", "Review homework submissions", "8 pending"],
    ["📝", "Upload Biology test marks", "Due today"],
    ["📢", "Send class announcement", "Today"],
  ];

  return (
    <div style={page}>
      <aside style={sidebar}>
        <div style={brandBox}>
          <img src={edpluckLogo} alt="EdPluck" style={logo} />
          <p style={brandSub}>Teacher Panel</p>
        </div>

        {menu.map(([icon, label, path]) => (
          <div
            key={label}
            onClick={() => navigate(path)}
            style={{
              ...menuItem,
              ...(label === "Dashboard" ? activeMenu : {}),
            }}
          >
            <span style={menuIcon}>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={title}>Teacher Dashboard</h1>
            <p style={subtitle}>Welcome back, Sharma Sir 👋</p>
          </div>
        </div>

        <div style={cardGrid}>
          {stats.map(([icon, label, value, desc]) => (
            <div key={label} style={statCard}>
              <div style={statIcon}>{icon}</div>
              <p style={cardLabel}>{label}</p>
              <h2 style={cardValue}>{value}</h2>
              <p style={cardDesc}>{desc}</p>
            </div>
          ))}
        </div>

        <section style={section}>
          <h2 style={{ marginTop: 0 }}>Today&apos;s Tasks</h2>

          {tasks.map(([icon, task, time]) => (
            <div key={task} style={taskRow}>
              <span style={taskIcon}>{icon}</span>
              <div>
                <h4 style={rowTitle}>{task}</h4>
                <p style={rowSub}>{time}</p>
              </div>
            </div>
          ))}
        </section>

        <section style={section}>
          <h2 style={{ marginTop: 0 }}>Quick Actions</h2>

          <div style={actionGrid}>
            <button style={actionBtn} onClick={() => navigate("/teacher-attendance")}>
              ✅ Take Attendance
            </button>
            <button style={actionBtn} onClick={() => navigate("/teacher-homework")}>
              📚 Create Homework
            </button>
            <button style={actionBtn} onClick={() => navigate("/teacher-marks")}>
              📊 Upload Marks
            </button>
            <button style={actionBtn} onClick={() => navigate("/teacher-notice")}>
              📢 Send Announcement
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  background: "linear-gradient(135deg, #eff6ff, #f8fafc)",
  color: "#0f172a",
  fontFamily: "Arial, sans-serif",
};

const sidebar = {
  width: "280px",
  padding: "26px",
  background: "rgba(255,255,255,0.92)",
  borderRight: "1px solid #e2e8f0",
};

const brandBox = {
  textAlign: "center",
  marginBottom: "32px",
};

const logo = {
  width: "105px",
  marginBottom: "8px",
};

const brandSub = {
  color: "#2563eb",
  fontSize: "14px",
  margin: 0,
  fontWeight: "800",
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "13px",
  padding: "13px 15px",
  marginBottom: "9px",
  borderRadius: "16px",
  color: "#334155",
  cursor: "pointer",
  fontWeight: "700",
};

const activeMenu = {
  background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
  color: "#ffffff",
};

const menuIcon = {
  width: "24px",
};

const main = {
  flex: 1,
  padding: "34px",
};

const topBar = {
  marginBottom: "28px",
};

const title = {
  fontSize: "36px",
  margin: 0,
};

const subtitle = {
  color: "#64748b",
  marginTop: "8px",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
};

const statCard = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "24px",
  padding: "22px",
};

const statIcon = {
  fontSize: "30px",
  marginBottom: "12px",
};

const cardLabel = {
  color: "#64748b",
  margin: 0,
  fontWeight: "700",
};

const cardValue = {
  fontSize: "34px",
  margin: "8px 0",
};

const cardDesc = {
  color: "#64748b",
  margin: 0,
};

const section = {
  marginTop: "26px",
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "24px",
  padding: "24px",
};

const taskRow = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "15px",
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "17px",
  marginTop: "12px",
};

const taskIcon = {
  fontSize: "24px",
};

const rowTitle = {
  margin: 0,
  color: "#0f172a",
  fontSize: "15px",
};

const rowSub = {
  margin: "5px 0 0",
  color: "#64748b",
  fontSize: "13px",
};

const actionGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
};

const actionBtn = {
  border: "none",
  background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
  color: "white",
  padding: "16px",
  borderRadius: "16px",
  cursor: "pointer",
  fontWeight: "800",
  fontSize: "15px",
};

export default TeacherDashboard;