import { useNavigate } from "react-router-dom";

function TeacherNotice() {
  const navigate = useNavigate();

  const notices = [
    ["Unit Test", "Maths unit test will be conducted on Monday.", "Class 10-A", "Today"],
    ["Homework Reminder", "Submit science homework before Friday.", "Class 10-A", "Yesterday"],
    ["Parent Meeting", "Parent-teacher meeting scheduled this Saturday.", "Class 10-A", "2 days ago"],
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
              ...(name === "Notice" ? activeBtn : {}),
            }}
          >
            {name}
          </button>
        ))}
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={title}>Notice Board</h1>
            <p style={subtitle}>Create and manage notices for students and parents</p>
          </div>

          <button style={primaryBtn}>Publish Notice</button>
        </div>

        <section style={panel}>
          <h2>Create New Notice</h2>

          <div style={formGrid}>
            <input style={input} placeholder="Notice Title" />

            <select style={input}>
              <option>Class 10-A</option>
              <option>Class 10-B</option>
              <option>Class 9-A</option>
              <option>All Classes</option>
            </select>

            <select style={input}>
              <option>Students</option>
              <option>Parents</option>
              <option>Students & Parents</option>
            </select>
          </div>

          <textarea
            style={textarea}
            placeholder="Write notice message here..."
          />

          <button style={saveBtn}>Send Notice</button>
        </section>

        <section style={panel}>
          <h2 style={{ marginBottom: "18px" }}>Recent Notices</h2>

          {notices.map((notice, index) => (
            <div key={index} style={noticeCard}>
              <div>
                <h3 style={noticeTitle}>{notice[0]}</h3>
                <p style={noticeMsg}>{notice[1]}</p>
                <span style={badge}>{notice[2]}</span>
              </div>

              <p style={time}>{notice[3]}</p>
            </div>
          ))}
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

const panel = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "24px",
  marginBottom: "28px",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  marginBottom: "16px",
};

const input = {
  padding: "15px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(15,23,42,0.9)",
  color: "white",
  outline: "none",
};

const textarea = {
  width: "100%",
  minHeight: "130px",
  padding: "15px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(15,23,42,0.9)",
  color: "white",
  outline: "none",
  resize: "none",
  boxSizing: "border-box",
};

const saveBtn = {
  marginTop: "16px",
  padding: "13px 22px",
  borderRadius: "12px",
  border: "none",
  background: "#22c55e",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const noticeCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "18px",
  borderRadius: "18px",
  background: "rgba(15,23,42,0.75)",
  border: "1px solid rgba(255,255,255,0.08)",
  marginBottom: "14px",
};

const noticeTitle = {
  margin: "0 0 8px",
  color: "#f8fafc",
};

const noticeMsg = {
  margin: "0 0 12px",
  color: "#cbd5e1",
};

const badge = {
  padding: "7px 12px",
  borderRadius: "999px",
  background: "rgba(59,130,246,0.2)",
  color: "#93c5fd",
  fontSize: "13px",
  fontWeight: "bold",
};

const time = {
  color: "#94a3b8",
  fontSize: "14px",
};

export default TeacherNotice;