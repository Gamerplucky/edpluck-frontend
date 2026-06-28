import { useNavigate } from "react-router-dom";

function AdminDashboard({ darkMode }) {
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

  const stats = [
    ["Total Students", "1,248", "+84 this year"],
    ["Total Teachers", "48", "Active staff"],
    ["Fees Collected", "₹18.6L", "This session"],
    ["Pending Fees", "₹3.2L", "Needs follow-up"],
  ];

  const activities = [
    ["Fee Payment", "Rahul Sharma paid ₹12,500", "Today"],
    ["Attendance", "Class 10-A attendance uploaded", "Today"],
    ["New Student", "Ananya Verma enrolled in Class 9", "Yesterday"],
    ["Report", "Monthly performance report generated", "2 days ago"],
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
            style={{
              ...menuBtn,
              ...(name === "Dashboard" ? activeBtn : {}),
            }}
          >
            {name}
          </button>
        ))}
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={title}>School Command Center</h1>
            <p style={subtitle}>
              Monitor fees, students, teachers and school performance
            </p>
          </div>

          <button style={primaryBtn} onClick={() => navigate("/admin-reports")}>
            Generate Report
          </button>
        </div>

        <div style={cards}>
          {stats.map(([label, value, note]) => (
            <div key={label} style={card}>
              <h3>{label}</h3>
              <h2>{value}</h2>
              <p>{note}</p>
            </div>
          ))}
        </div>

        <div style={grid}>
          <section style={panel}>
            <h2>Fee Overview</h2>

            <div style={feeBox}>
              <div>
                <p style={muted}>Collected</p>
                <h1 style={green}>₹18.6L</h1>
              </div>

              <div>
                <p style={muted}>Pending</p>
                <h1 style={yellow}>₹3.2L</h1>
              </div>
            </div>

            <div style={progressOuter}>
              <div style={progressInner}></div>
            </div>

            <p style={muted}>85% fees collected this session</p>

            <button style={smallBtn} onClick={() => navigate("/admin-fees")}>
              View Fee Details
            </button>
          </section>

          <section style={panel}>
            <h2>Quick Actions</h2>

            <div style={actions}>
              <button style={actionBtn} onClick={() => navigate("/admin-students")}>
                Add Student
              </button>

              <button style={actionBtn} onClick={() => navigate("/admin-teachers")}>
                Manage Teachers
              </button>

              <button style={actionBtn} onClick={() => navigate("/admin-reports")}>
                View Reports
              </button>

              <button style={actionBtn} onClick={() => navigate("/admin-analytics")}>
                School Analytics
              </button>
            </div>
          </section>
        </div>

        <section style={panel}>
          <h2 style={{ marginBottom: "18px" }}>Recent School Activity</h2>

          {activities.map(([type, text, date], index) => (
            <div key={index} style={activityCard}>
              <div>
                <h3 style={activityTitle}>{type}</h3>
                <p style={activityText}>{text}</p>
              </div>

              <span style={time}>{date}</span>
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
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1.3fr 1fr",
  gap: "22px",
  marginBottom: "28px",
};

const panel = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "24px",
  padding: "24px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
};

const feeBox = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

const muted = { color: "#94a3b8" };
const green = { color: "#4ade80" };
const yellow = { color: "#facc15" };

const progressOuter = {
  width: "100%",
  height: "12px",
  background: "rgba(255,255,255,0.12)",
  borderRadius: "999px",
  overflow: "hidden",
  margin: "20px 0",
};

const progressInner = {
  width: "85%",
  height: "100%",
  background: "linear-gradient(135deg, #22c55e, #06b6d4)",
};

const smallBtn = {
  marginTop: "12px",
  padding: "12px 18px",
  borderRadius: "12px",
  border: "none",
  background: "rgba(59,130,246,0.2)",
  color: "#93c5fd",
  fontWeight: "bold",
  cursor: "pointer",
};

const actions = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "14px",
  marginTop: "20px",
};

const actionBtn = {
  padding: "18px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(15,23,42,0.8)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

const activityCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px",
  borderRadius: "18px",
  background: "rgba(15,23,42,0.75)",
  border: "1px solid rgba(255,255,255,0.08)",
  marginBottom: "14px",
};

const activityTitle = {
  margin: "0 0 6px",
};

const activityText = {
  margin: 0,
  color: "#cbd5e1",
};

const time = {
  color: "#94a3b8",
  fontSize: "14px",
};

export default AdminDashboard;