import { useNavigate } from "react-router-dom";

function AdminFees() {
  const navigate = useNavigate();

  const feeData = [
    ["STU001", "Aarav Sharma", "10-A", "₹32,000", "₹32,000", "Paid"],
    ["STU002", "Priya Singh", "10-A", "₹32,000", "₹24,000", "Pending"],
    ["STU003", "Rohan Gupta", "9-B", "₹30,000", "₹30,000", "Paid"],
    ["STU004", "Ananya Verma", "8-A", "₹28,000", "₹14,000", "Partial"],
  ];

  const menu = [
    ["Dashboard", "/admin-dashboard"],
    ["Fees", "/admin-fees"],
    ["Teachers", "/admin-teachers"],
    ["Students", "/admin-students"],
    ["Analytics", "/admin-analytics"],
    ["Reports", "/admin-reports"],
    ["Settings", "/admin-settings"],
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
            style={{ ...menuBtn, ...(name === "Fees" ? activeBtn : {}) }}
          >
            {name}
          </button>
        ))}
      </aside>

      <main style={main}>
        <div style={topBar}>
          <div>
            <h1 style={title}>Fee Management</h1>
            <p style={subtitle}>Track collected, pending and partial payments</p>
          </div>

          <button style={primaryBtn}>+ Add Payment</button>
        </div>

        <div style={cards}>
          {[
            ["Total Fees", "₹21.8L", "Session target"],
            ["Collected", "₹18.6L", "85% completed"],
            ["Pending", "₹3.2L", "Follow-up needed"],
            ["Partial Paid", "18", "Students"],
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
            <h2>Student Fee Records</h2>

            <div style={filters}>
              <select style={input}>
                <option>All Classes</option>
                <option>Class 10-A</option>
                <option>Class 9-B</option>
                <option>Class 8-A</option>
              </select>

              <select style={input}>
                <option>All Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Partial</option>
              </select>
            </div>
          </div>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Student ID</th>
                <th style={th}>Name</th>
                <th style={th}>Class</th>
                <th style={th}>Total Fee</th>
                <th style={th}>Paid</th>
                <th style={th}>Due</th>
                <th style={th}>Status</th>
                <th style={th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {feeData.map((item) => {
                const total = Number(item[3].replace(/[₹,]/g, ""));
                const paid = Number(item[4].replace(/[₹,]/g, ""));
                const due = total - paid;

                return (
                  <tr key={item[0]}>
                    <td style={td}>{item[0]}</td>
                    <td style={td}>{item[1]}</td>
                    <td style={td}>{item[2]}</td>
                    <td style={td}>{item[3]}</td>
                    <td style={td}>{item[4]}</td>
                    <td style={td}>₹{due.toLocaleString("en-IN")}</td>
                    <td style={td}>
                      <span style={badge(item[5])}>{item[5]}</span>
                    </td>
                    <td style={td}>
                      <button style={actionBtn}>View</button>
                      <button style={payBtn}>Collect</button>
                    </td>
                  </tr>
                );
              })}
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
};

const panelTop = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const filters = {
  display: "flex",
  gap: "12px",
};

const input = {
  padding: "13px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(15,23,42,0.9)",
  color: "white",
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
    status === "Paid"
      ? "rgba(34,197,94,0.2)"
      : status === "Partial"
      ? "rgba(59,130,246,0.2)"
      : "rgba(234,179,8,0.2)",
  color:
    status === "Paid"
      ? "#4ade80"
      : status === "Partial"
      ? "#60a5fa"
      : "#facc15",
});

const actionBtn = {
  padding: "8px 12px",
  marginRight: "8px",
  borderRadius: "10px",
  border: "none",
  background: "rgba(59,130,246,0.2)",
  color: "#93c5fd",
  cursor: "pointer",
};

const payBtn = {
  padding: "8px 12px",
  borderRadius: "10px",
  border: "none",
  background: "rgba(34,197,94,0.2)",
  color: "#4ade80",
  cursor: "pointer",
};

export default AdminFees;