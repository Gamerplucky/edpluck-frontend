import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function TeacherHomework() {
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

  const homework = [
    ["Biology", "Human Reproduction Notes", "Today", "32/35", "Review"],
    ["Biology", "Genetics Worksheet", "Tomorrow", "21/35", "Active"],
    ["Biology", "Cell Cycle Diagram", "2 Days", "35/35", "Completed"],
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
              ...(label === "Homework" ? activeMenu : {}),
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
            <h1 style={title}>Homework</h1>
            <p style={subtitle}>Create, track and review student homework</p>
          </div>

          <button style={primaryBtn}>+ Create Homework</button>
        </div>

        <div style={cardGrid}>
          <div style={statCard}>
            <h3>Total Homework</h3>
            <h2>12</h2>
            <p>This month</p>
          </div>

          <div style={statCard}>
            <h3>Pending Review</h3>
            <h2>8</h2>
            <p>Need checking</p>
          </div>

          <div style={statCard}>
            <h3>Submission Rate</h3>
            <h2>76%</h2>
            <p>Class average</p>
          </div>

          <div style={statCard}>
            <h3>Late Submissions</h3>
            <h2>4</h2>
            <p>Follow-up needed</p>
          </div>
        </div>

        <section style={section}>
          <div style={toolbar}>
            <input style={searchInput} placeholder="Search homework..." />

            <select style={select}>
              <option>Class 12A</option>
              <option>Class 12B</option>
            </select>

            <select style={select}>
              <option>All Status</option>
              <option>Review</option>
              <option>Active</option>
              <option>Completed</option>
            </select>
          </div>

          <div style={table}>
            <div style={tableHead}>
              <span>Subject</span>
              <span>Homework Title</span>
              <span>Due</span>
              <span>Submitted</span>
              <span>Status</span>
            </div>

            {homework.map(([subject, work, due, submitted, status]) => (
              <div key={work} style={tableRow}>
                <span>{subject}</span>
                <span style={{ fontWeight: "800" }}>{work}</span>
                <span>{due}</span>
                <span>{submitted}</span>
                <span style={getBadge(status)}>{status}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={bottomGrid}>
          <section style={smallSection}>
            <h2>Quick Create</h2>

            <input style={input} placeholder="Homework title" />
            <textarea style={textArea} placeholder="Instructions for students..." />

            <div style={miniGrid}>
              <select style={input}>
                <option>Biology</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>

              <select style={input}>
                <option>Class 12A</option>
                <option>Class 12B</option>
              </select>
            </div>

            <button style={wideBtn}>Publish Homework</button>
          </section>

          <section style={smallSection}>
            <h2>Review Queue</h2>
            <div style={reviewBox}>📚 Aarav Sharma submitted Genetics Worksheet</div>
            <div style={reviewBox}>📚 Riya Singh submitted Human Reproduction Notes</div>
            <div style={reviewBox}>⚠️ Mohit Yadav submission is late</div>
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

  if (status === "Completed") {
    return { ...base, background: "rgba(34,197,94,0.2)", color: "#86efac" };
  }

  if (status === "Active") {
    return { ...base, background: "rgba(59,130,246,0.2)", color: "#93c5fd" };
  }

  return { ...base, background: "rgba(234,179,8,0.2)", color: "#fde68a" };
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
  gridTemplateColumns: "1fr 2.2fr 1fr 1fr 1fr",
  color: "#93c5fd",
  fontWeight: "800",
  padding: "0 14px",
};

const tableRow = {
  display: "grid",
  gridTemplateColumns: "1fr 2.2fr 1fr 1fr 1fr",
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

const input = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(15,23,42,0.75)",
  color: "white",
  outline: "none",
  marginTop: "12px",
};

const textArea = {
  ...input,
  minHeight: "100px",
  resize: "none",
};

const miniGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
};

const wideBtn = {
  width: "100%",
  marginTop: "14px",
  border: "none",
  padding: "15px",
  borderRadius: "16px",
  background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
  color: "white",
  fontWeight: "800",
  cursor: "pointer",
};

const reviewBox = {
  background: "rgba(15,23,42,0.6)",
  padding: "14px",
  borderRadius: "15px",
  marginTop: "12px",
};

export default TeacherHomework;