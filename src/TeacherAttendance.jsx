import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function TeacherAttendance() {
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

  const students = [
    ["01", "Aarav Sharma", "Present"],
    ["02", "Riya Singh", "Present"],
    ["03", "Aman Verma", "Absent"],
    ["04", "Priya Gupta", "Present"],
    ["05", "Mohit Yadav", "Late"],
    ["06", "Ananya Mishra", "Present"],
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
              ...(label === "Attendance" ? activeMenu : {}),
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
            <h1 style={title}>Attendance</h1>
            <p style={subtitle}>Take and monitor daily attendance for Class 12A</p>
          </div>

          <button
            style={primaryBtn}
            onClick={() => alert("Attendance submitted successfully!")}
          >
            Submit Attendance
          </button>
        </div>

        <div style={cardGrid}>
          <div style={statCard}>
            <h3>Total Students</h3>
            <h2>35</h2>
            <p>Class 12A</p>
          </div>

          <div style={statCard}>
            <h3>Present Today</h3>
            <h2>32</h2>
            <p>92% attendance</p>
          </div>

          <div style={statCard}>
            <h3>Absent</h3>
            <h2>2</h2>
            <p>Parents to be notified</p>
          </div>

          <div style={statCard}>
            <h3>Late</h3>
            <h2>1</h2>
            <p>Reached after assembly</p>
          </div>
        </div>

        <section style={section}>
          <div style={toolbar}>
            <input style={searchInput} placeholder="Search student..." />

            <select style={select}>
              <option>Class 12A</option>
              <option>Class 12B</option>
              <option>Class 11A</option>
            </select>

            <select style={select}>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          <div style={table}>
            <div style={tableHead}>
              <span>Roll No</span>
              <span>Student Name</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {students.map(([roll, name, status]) => (
              <div key={roll} style={tableRow}>
                <span>{roll}</span>
                <span style={{ fontWeight: "800" }}>{name}</span>
                <span style={getBadge(status)}>{status}</span>

                <div style={actionGroup}>
                  <button style={miniBtn} onClick={() => alert(`${name} marked Present`)}>
                    P
                  </button>
                  <button style={miniBtn} onClick={() => alert(`${name} marked Absent`)}>
                    A
                  </button>
                  <button style={miniBtn} onClick={() => alert(`${name} marked Late`)}>
                    L
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
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

  if (status === "Present") {
    return { ...base, background: "rgba(34,197,94,0.2)", color: "#86efac" };
  }

  if (status === "Late") {
    return { ...base, background: "rgba(234,179,8,0.2)", color: "#fde68a" };
  }

  return { ...base, background: "rgba(239,68,68,0.2)", color: "#fca5a5" };
}

const page = {
  minHeight: "100vh",
  display: "flex",
  background: "linear-gradient(135deg, #020617, #0f172a)",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const sidebar = {
  width: "280px",
  padding: "26px",
  background: "rgba(15,23,42,0.82)",
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
};

const menuItem = {
  display: "flex",
  gap: "13px",
  padding: "13px 15px",
  marginBottom: "9px",
  borderRadius: "16px",
  color: "#cbd5e1",
  cursor: "pointer",
  fontWeight: "700",
};

const activeMenu = {
  background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
  color: "#ffffff",
};

const main = {
  flex: 1,
  padding: "34px",
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
  borderRadius: "24px",
  padding: "22px",
  textAlign: "center",
};

const section = {
  marginTop: "26px",
  background: "rgba(255,255,255,0.08)",
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
  gridTemplateColumns: "0.7fr 2fr 1fr 1.5fr",
  color: "#93c5fd",
  fontWeight: "800",
  padding: "0 14px",
};

const tableRow = {
  display: "grid",
  gridTemplateColumns: "0.7fr 2fr 1fr 1.5fr",
  alignItems: "center",
  padding: "16px 14px",
  background: "rgba(15,23,42,0.6)",
  borderRadius: "16px",
};

const actionGroup = {
  display: "flex",
  gap: "8px",
};

const miniBtn = {
  width: "36px",
  height: "36px",
  borderRadius: "12px",
  border: "none",
  background: "rgba(59,130,246,0.35)",
  color: "white",
  fontWeight: "900",
  cursor: "pointer",
};

export default TeacherAttendance;