import { useNavigate } from "react-router-dom";

function AdminTeachers() {
  const navigate = useNavigate();

  const menu = [
    ["Dashboard", "/admin-dashboard"],
    ["Fees", "/admin-fees"],
    ["Teachers", "/admin-teachers"],
    ["Students", "/admin-students"],
    ["Analytics", "/admin-analytics"],
    ["Reports", "/admin-reports"],
    ["Settings", "/admin-settings"],
  ];

  const teachers = [
    ["TCH001", "Sharma Sir", "Maths", "10-A, 10-B", "8 Years", "Active"],
    ["TCH002", "Verma Ma'am", "Science", "9-A, 10-A", "6 Years", "Active"],
    ["TCH003", "Khan Sir", "English", "8-A, 9-B", "5 Years", "On Leave"],
    ["TCH004", "Mishra Sir", "Social Science", "7-A, 8-B", "10 Years", "Active"],
  ];

  return (
    <div style={page}>
      <aside style={sidebar}>
        <h2 style={logo}>EdPluck</h2>
        <p style={role}>Principal/Admin Panel</p>

        {menu.map(([name, path]) => (
          <button
            key={name}
            onClick={() => navigate(path)}
            style={{ ...menuBtn, ...(name === "Teachers" ? activeBtn : {}) }}
          >
            {name}
          </button>
        ))}
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={title}>Teacher Management</h1>
            <p style={subtitle}>Manage teachers, subjects and class assignments</p>
          </div>

          <button style={primaryBtn}>+ Add Teacher</button>
        </div>

        <div style={cards}>
          {[
            ["Total Teachers", "48", "Working staff"],
            ["Active Teachers", "45", "Available today"],
            ["On Leave", "3", "Leave requests"],
            ["Subjects Covered", "16", "Across school"],
          ].map((item) => (
            <div key={item[0]} style={card}>
              <h3>{item[0]}</h3>
              <h2>{item[1]}</h2>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>

        <section style={panel}>
          <div style={panelTop}>
            <h2>Add / Assign Teacher</h2>
            <button style={saveBtn}>Save Teacher</button>
          </div>

          <div style={formGrid}>
            <input style={input} placeholder="Teacher Name" />
            <input style={input} placeholder="Contact Number" />
            <input style={input} placeholder="Email Address" />

            <select style={input}>
              <option>Select Subject</option>
              <option>Maths</option>
              <option>Science</option>
              <option>English</option>
              <option>Social Science</option>
            </select>

            <select style={input}>
              <option>Assign Class</option>
              <option>Class 10-A</option>
              <option>Class 9-A</option>
              <option>Class 8-A</option>
            </select>

            <input style={input} placeholder="Experience" />
          </div>
        </section>

        <section style={panel}>
          <div style={panelTop}>
            <h2>Teacher Records</h2>
            <input style={search} placeholder="Search teacher..." />
          </div>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Teacher ID</th>
                <th style={th}>Name</th>
                <th style={th}>Subject</th>
                <th style={th}>Classes</th>
                <th style={th}>Experience</th>
                <th style={th}>Status</th>
                <th style={th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher[0]}>
                  <td style={td}>{teacher[0]}</td>
                  <td style={td}>{teacher[1]}</td>
                  <td style={td}>{teacher[2]}</td>
                  <td style={td}>{teacher[3]}</td>
                  <td style={td}>{teacher[4]}</td>
                  <td style={td}>
                    <span style={badge(teacher[5])}>{teacher[5]}</span>
                  </td>
                  <td style={td}>
                    <button style={viewBtn}>View</button>
                    <button style={editBtn}>Edit</button>
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
  width: "265px",
  padding: "28px 20px",
  background: "rgba(15,23,42,0.96)",
  borderRight: "1px solid rgba(255,255,255,0.08)",
};

const logo = {
  fontSize: "32px",
  margin: 0,
  color: "#38bdf8",
};

const role = {
  color: "#94a3b8",
  marginBottom: "32px",
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
  fontSize: "36px",
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

const search = {
  width: "260px",
  padding: "13px",
  borderRadius: "12px",
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

const badge = (status) => ({
  padding: "7px 12px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: "bold",
  background:
    status === "Active"
      ? "rgba(34,197,94,0.2)"
      : "rgba(234,179,8,0.2)",
  color: status === "Active" ? "#4ade80" : "#facc15",
});

const viewBtn = {
  padding: "8px 12px",
  marginRight: "8px",
  borderRadius: "10px",
  border: "none",
  background: "rgba(59,130,246,0.2)",
  color: "#93c5fd",
  cursor: "pointer",
};

const editBtn = {
  padding: "8px 12px",
  borderRadius: "10px",
  border: "none",
  background: "rgba(34,197,94,0.2)",
  color: "#4ade80",
  cursor: "pointer",
};

export default AdminTeachers;