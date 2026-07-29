import "./Statistics.css";

function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics-grid">
        <div className="stat-card">
          <h2>150+</h2>
          <p>Data Center Components</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Enterprise Solutions</p>
        </div>

        <div className="stat-card">
          <h2>24×7</h2>
          <p>Technical Support</p>
        </div>

        <div className="stat-card">
          <h2>99.99%</h2>
          <p>System Uptime</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;