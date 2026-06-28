import { useNavigate } from "react-router-dom";

function TeacherMarks() {
  const navigate = useNavigate();

  const students = [
    ["STU001", "Aarav Sharma", "Class 10-A", "Maths", 92, "Excellent"],
    ["STU002", "Priya Singh", "Class 10-A", "Maths", 78, "Good"],
    ["STU003", "Rohan Gupta", "Class 10-A", "Maths", 61, "Needs Practice"],
    ["STU004", "Ananya Verma", "Class 10-A", "Maths", 88, "Very Good"],
  ];

  return (
    <div style={page}>
      <aside style={sidebar}>
        <h2 style={logo}>EdPluck</h2>
        <p style={role}>Teacher Panel</p>

        {[
          ["Dashboard", "/teacher-dashboard"],
          ["Attendance", "/teacher-attendance"],
          ["Homework", "/teacher-homework"],
          ["Marks", "/teacher-marks"],
          ["Students", "/teacher-students"],
          ["Notice", "/teacher-notice"],
        ].map(([name, path]) => (
          <button
            key={name}
            onClick={() => navigate(path)}
            style={{
              ...menuBtn,
              ...(name === "Marks" ? activeBtn : {}),
            }}
          >
            {name}
          </button>
        ))}
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={title}>Marks Management</h1>
            <p style={subtitle}>Upload, manage and review student marks</p>
          </div>

          <button style={primaryBtn}>+ Add Marks</button>
        </div>

        <div style={cards}>
          <div style={card}>
            <h3>Total Students</h3>
            <h2>42</h2>
            <p>Class 10-A</p>
          </div>

          <div style={card}>
            <h3>Average Marks</h3>
            <h2>79%</h2>
            <p>This test</p>
          </div>

          <div style={card}>
            <h3>Top Score</h3>
            <h2>92%</h2>
            <p>Aarav Sharma</p>
          </div>

          <div style={card}>
            <h3>Need Support</h3>
            <h2>6</h2>
            <p>Below 60%</p>
          </div>
        </div>

        <section style={panel}>
          <div style={panelTop}>
            <h2>Enter Marks</h2>
            <button style={saveBtn}>Save Marks</button>
          </div>

          <div style={formGrid}>
            <input style={input} placeholder="Student Name" />
            <input style={input} placeholder="Roll Number" />
            <select style={input}>
              <option>Class 10-A</option>
              <option>Class 10-B</option>
              <option>Class 9-A</option>
            </select>
            <select style={input}>
              <option>Maths</option>
              <option>Science</option>
              <option>English</option>
            </select>
            <input style={input} placeholder="Marks Obtained" type="number" />
            <input style={input} placeholder="Total Marks" type="number" />
          </div>
        </section>

        <section style={panel}>
          <h2 style={{ marginBottom: "18px" }}>Recent Marks</h2>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>ID</th>
                <th style={th}>Student</th>
                <th style={th}>Class</th>
                <th style={th}>Subject</th>
                <th style={th}>Marks</th>
                <th style={th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s) => (
                <tr key={s[0]}>
                  <td style={td}>{s[0]}</td>
                  <td style={td}>{s[1]}</td>
                  <td style={td}>{s[2]}</td>
                  <td style={td}>{s[3]}</td>
                  <td style={td}>
                    <b>{s[4]}%</b>
                  </td>
                  <td style={td}>
                    <span style={badge(s[4])}>{s[5]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  background: "linear-gradient(135deg, #020617, #0f172a)",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const sidebar = {
  width: "250px",
  padding: "28px 20px",
  background: "rgba(15,23,42,0.95)",
  borderRight: "1px solid rgba(255,255,255,0.08)",
};

const logo = {
  fontSize: "30px",
  margin: 0,
  color: "#38bdf8",
};

const role = {
  color: "#94a3b8",
  marginBottom: "30px",
};

const menuBtn = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "12px",
  borderRadius: "14px",
  border: "none",
  background: "transparent",
  color: "#cbd5e1",
  textAlign: "left",
  fontSize: "16px",
  cursor: "pointer",
};

const activeBtn = {
  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
  color: "white",
};

const main = {
  flex: 1,
  padding: "32px",
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "28px",
};

const title = {
  fontSize: "34px",
  margin: 0,
};

const subtitle = {
  color: "#94a3b8",
  marginTop: "8px",
};

const primaryBtn = {
  padding: "14px 22px",
  borderRadius: "14px",
  border: "none",
  background: "linear-gradient(135deg, #2563eb, #06b6d4)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const cards = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "18px",
  marginBottom: "28px",
};

const card = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "22px",
  padding: "22px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
};

const panel = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "24px",
  marginBottom: "28px",
};

const panelTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const input = {
  padding: "15px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(15,23,42,0.9)",
  color: "white",
  outline: "none",
};

const saveBtn = {
  padding: "12px 20px",
  borderRadius: "12px",
  border: "none",
  background: "#22c55e",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "14px",
  color: "#93c5fd",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
};

const td = {
  padding: "14px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  color: "#e5e7eb",
};

const badge = (marks) => ({
  padding: "7px 12px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: "bold",
  background:
    marks >= 85
      ? "rgba(34,197,94,0.2)"
      : marks >= 70
      ? "rgba(59,130,246,0.2)"
      : "rgba(234,179,8,0.2)",
  color:
    marks >= 85
      ? "#4ade80"
      : marks >= 70
      ? "#60a5fa"
      : "#facc15",
});

export default TeacherMarks;