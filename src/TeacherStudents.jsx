import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function TeacherStudents() {
  const navigate = useNavigate();

  const menu = [
    ["🏠", "Dashboard", "/teacher"],
    ["👨‍🎓", "Students", "/teacher/students"],
    ["✅", "Attendance", "/teacher/attendance"],
    ["📚", "Homework", "/teacher/homework"],
    ["📝", "Assignments", "/teacher/assignments"],
    ["📊", "Exams & Marks", "/teacher/marks"],
    ["📈", "Performance", "/teacher/performance"],
    ["💬", "Parent Messages", "/teacher/messages"],
    ["📢", "Announcements", "/teacher/announcements"],
    ["📅", "Calendar", "/teacher/calendar"],
    ["⚙️", "Settings", "/teacher/settings"],
  ];

  const students = [
    ["01", "Aarav Sharma", "94%", "96%", "Excellent"],
    ["02", "Riya Singh", "88%", "91%", "Good"],
    ["03", "Aman Verma", "62%", "78%", "Needs Focus"],
    ["04", "Priya Gupta", "81%", "89%", "Good"],
    ["05", "Mohit Yadav", "58%", "72%", "Weak"],
    ["06", "Ananya Mishra", "92%", "95%", "Excellent"],
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
              ...(label === "Students" ? activeMenu : {}),
            }}
          >
            <span>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={title}>Students</h1>
            <p style={subtitle}>Manage Class 12A student records and progress</p>
          </div>

          <button style={primaryBtn}>+ Add Student</button>
        </div>

        <div style={cardGrid}>
          <div style={statCard}>
            <h3>Total Students</h3>
            <h2>35</h2>
            <p>Class 12A</p>
          </div>

          <div style={statCard}>
            <h3>Average Performance</h3>
            <h2>78%</h2>
            <p>+6% this month</p>
          </div>

          <div style={statCard}>
            <h3>Average Attendance</h3>
            <h2>92%</h2>
            <p>Strong attendance</p>
          </div>

          <div style={statCard}>
            <h3>Need Attention</h3>
            <h2>5</h2>
            <p>Low score students</p>
          </div>
        </div>

        <section style={section}>
          <div style={toolbar}>
            <input style={searchInput} placeholder="Search student by name or roll number..." />

            <select style={select}>
              <option>Class 12A</option>
              <option>Class 12B</option>
              <option>Class 11A</option>
            </select>

            <select style={select}>
              <option>All Students</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Needs Focus</option>
              <option>Weak</option>
            </select>
          </div>

          <div style={table}>
            <div style={tableHead}>
              <span>Roll No</span>
              <span>Student Name</span>
              <span>Performance</span>
              <span>Attendance</span>
              <span>Status</span>
            </div>

            {students.map(([roll, name, performance, attendance, status]) => (
              <div key={roll} style={tableRow}>
                <span>{roll}</span>
                <span style={{ fontWeight: "800" }}>{name}</span>
                <span>{performance}</span>
                <span>{attendance}</span>
                <span style={getBadge(status)}>{status}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={bottomGrid}>
          <section style={smallSection}>
            <h2>Needs Attention</h2>
            <div style={alertBox}>⚠️ Aman Verma needs help in Biology concepts.</div>
            <div style={alertBox}>⚠️ Mohit Yadav has low homework completion.</div>
            <div style={alertBox}>⚠️ 3 students scored below 60% in last test.</div>
          </section>

          <section style={smallSection}>
            <h2>Class Insights</h2>
            <div style={insight}>✅ 24 students are performing well.</div>
            <div style={insight}>📈 Class average improved by 6% this month.</div>
            <div style={insight}>📚 Homework submission rate is 76%.</div>
          </section>
        </div>
      </main>
    </div>
  );
}

function getBadge(status) {
  const base = {
    padding: "8px 12px",
    borderRadius: "999px",
    fontWeight: "800",
    fontSize: "13px",
    textAlign: "center",
  };

  if (status === "Excellent") {
    return { ...base, background: "rgba(34,197,94,0.2)", color: "#86efac" };
  }

  if (status === "Good") {
    return { ...base, background: "rgba(59,130,246,0.2)", color: "#93c5fd" };
  }

  if (status === "Needs Focus") {
    return { ...base, background: "rgba(234,179,8,0.2)", color: "#fde68a" };
  }

  return { ...base, background: "rgba(239,68,68,0.2)", color: "#fca5a5" };
}

const page = {
  minHeight: "100vh",
  display: "flex",
  background:
    "radial-gradient(circle at top left, #1e40af, transparent 35%), linear-gradient(135deg, #020617, #0f172a)",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const sidebar = {
  width: "280px",
  padding: "26px",
  background: "rgba(15, 23, 42, 0.82)",
  borderRight: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(18px)",
};

const brandBox = {
  textAlign: "center",
  marginBottom: "32px",
};

const logo = {
  width: "105px",
};

const brandSub = {
  color: "#93c5fd",
  fontSize: "14px",
  margin: 0,
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "13px",
  padding: "13px 15px",
  marginBottom: "9px",
  borderRadius: "16px",
  color: "#cbd5e1",
  cursor: "pointer",
  fontWeight: "600",
};

const activeMenu = {
  background: "linear-gradient(135deg, rgba(37,99,235,0.45), rgba(14,165,233,0.22))",
  color: "#ffffff",
};

const main = {
  flex: 1,
  padding: "34px",
  overflowY: "auto",
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "28px",
};

const title = {
  fontSize: "36px",
  margin: 0,
};

const subtitle = {
  color: "#cbd5e1",
};

const primaryBtn = {
  border: "none",
  padding: "14px 20px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
  color: "white",
  fontWeight: "800",
  cursor: "pointer",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
};

const statCard = {
  background: "rgba(255,255,255,0.09)",
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "24px",
  padding: "22px",
  backdropFilter: "blur(16px)",
};

const section = {
  marginTop: "26px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: "24px",
  padding: "24px",
};

const toolbar = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  gap: "15px",
  marginBottom: "22px",
};

const searchInput = {
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(15,23,42,0.75)",
  color: "white",
  outline: "none",
};

const select = {
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(15,23,42,0.75)",
  color: "white",
};

const table = {
  display: "grid",
  gap: "12px",
};

const tableHead = {
  display: "grid",
  gridTemplateColumns: "0.7fr 2fr 1fr 1fr 1fr",
  color: "#93c5fd",
  fontWeight: "800",
  padding: "0 14px",
};

const tableRow = {
  display: "grid",
  gridTemplateColumns: "0.7fr 2fr 1fr 1fr 1fr",
  alignItems: "center",
  padding: "16px 14px",
  background: "rgba(15,23,42,0.6)",
  borderRadius: "16px",
};

const bottomGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "22px",
  marginTop: "26px",
};

const smallSection = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: "24px",
  padding: "24px",
};

const alertBox = {
  background: "rgba(234,179,8,0.12)",
  padding: "14px",
  borderRadius: "15px",
  marginTop: "12px",
  color: "#fde68a",
};

const insight = {
  background: "rgba(15,23,42,0.6)",
  padding: "14px",
  borderRadius: "15px",
  marginTop: "12px",
};

export default TeacherStudents;