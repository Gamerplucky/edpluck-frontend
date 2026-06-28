import { useNavigate } from "react-router-dom";
import edpluckLogo from "./assets/edpluck-logo.png";

function TeacherAssignments() {
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

  const assignments = [
    ["Biology", "Genetics Case Study", "Class 12A", "15 July", "Active"],
    ["Biology", "DNA Model Project", "Class 12A", "18 July", "Draft"],
    ["Biology", "Evolution Research File", "Class 12B", "20 July", "Active"],
    ["Biology", "Cell Division Chart", "Class 12A", "Completed", "Closed"],
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
              ...(label === "Assignments" ? activeMenu : {}),
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
            <h1 style={title}>Assignments</h1>
            <p style={subtitle}>Create long-form tasks, projects and class submissions</p>
          </div>

          <button style={primaryBtn}>+ New Assignment</button>
        </div>

        <div style={cardGrid}>
          <div style={statCard}>
            <h3>Active Assignments</h3>
            <h2>3</h2>
            <p>Currently running</p>
          </div>

          <div style={statCard}>
            <h3>Drafts</h3>
            <h2>1</h2>
            <p>Not published yet</p>
          </div>

          <div style={statCard}>
            <h3>Submissions</h3>
            <h2>86%</h2>
            <p>Overall submission rate</p>
          </div>

          <div style={statCard}>
            <h3>Review Pending</h3>
            <h2>11</h2>
            <p>Need evaluation</p>
          </div>
        </div>

        <section style={section}>
          <div style={toolbar}>
            <input style={searchInput} placeholder="Search assignment..." />

            <select style={select}>
              <option>All Classes</option>
              <option>Class 12A</option>
              <option>Class 12B</option>
            </select>

            <select style={select}>
              <option>All Status</option>
              <option>Active</option>
              <option>Draft</option>
              <option>Closed</option>
            </select>
          </div>

          <div style={table}>
            <div style={tableHead}>
              <span>Subject</span>
              <span>Assignment</span>
              <span>Class</span>
              <span>Deadline</span>
              <span>Status</span>
            </div>

            {assignments.map(([subject, title, cls, deadline, status]) => (
              <div key={title} style={tableRow}>
                <span>{subject}</span>
                <span style={{ fontWeight: "800" }}>{title}</span>
                <span>{cls}</span>
                <span>{deadline}</span>
                <span style={getBadge(status)}>{status}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={bottomGrid}>
          <section style={smallSection}>
            <h2>Quick Assignment Builder</h2>

            <input style={input} placeholder="Assignment title" />
            <textarea
              style={textArea}
              placeholder="Write assignment instructions, format, marks, and submission rules..."
            />

            <div style={miniGrid}>
              <select style={input}>
                <option>Class 12A</option>
                <option>Class 12B</option>
              </select>

              <select style={input}>
                <option>Biology</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>
            </div>

            <button style={wideBtn}>Save Assignment</button>
          </section>

          <section style={smallSection}>
            <h2>Submission Queue</h2>
            <div style={queueBox}>📄 Riya Singh submitted Genetics Case Study</div>
            <div style={queueBox}>📄 Aarav Sharma submitted DNA Model Project</div>
            <div style={queueBox}>⚠️ 4 students have not submitted Cell Division Chart</div>
            <div style={queueBox}>✅ 30/35 submissions completed for Evolution Research File</div>
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

  if (status === "Active") {
    return { ...base, background: "rgba(59,130,246,0.2)", color: "#93c5fd" };
  }

  if (status === "Draft") {
    return { ...base, background: "rgba(234,179,8,0.2)", color: "#fde68a" };
  }

  return { ...base, background: "rgba(34,197,94,0.2)", color: "#86efac" };
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
  minHeight: "110px",
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

const queueBox = {
  background: "rgba(15,23,42,0.6)",
  padding: "14px",
  borderRadius: "15px",
  marginTop: "12px",
};

export default TeacherAssignments;