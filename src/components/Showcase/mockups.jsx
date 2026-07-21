import Icon from "../ui/Icon";

/* ---- Portfolio performance dashboard ---- */
export function DashboardMock() {
  const bars = [34, 42, 30, 52, 46, 62, 55, 72, 66, 84, 78, 92];
  return (
    <div className="mk mk--dash">
      <div className="mk-stats">
        {[
          { l: "Total assets", v: "$87,743" },
          { l: "Total deposits", v: "$78,342" },
          { l: "APY", v: "+12.3%", up: true },
        ].map((s) => (
          <div className="mk-stat" key={s.l}>
            <span className="mk-stat__ic">
              <Icon name="Activity" size={13} />
            </span>
            <div>
              <span className="mk-stat__l">{s.l}</span>
              <span className={`mk-stat__v ${s.up ? "up" : ""}`}>{s.v}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mk-dash__head">
        <strong>Portfolio performance</strong>
        <span className="mk-tag">ETH</span>
      </div>
      <div className="mk-bars">
        {bars.map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} className={i > 8 ? "hot" : ""} />
        ))}
      </div>
    </div>
  );
}

/* ---- Chain allocation ---- */
export function AllocationMock() {
  const rows = [
    { s: "B", n: "Bitcoin", v: "$23.3B", p: 72 },
    { s: "E", n: "Ethereum", v: "$18.1B", p: 58 },
    { s: "S", n: "Solana", v: "$11.7B", p: 41 },
  ];
  return (
    <div className="mk mk--alloc">
      <strong className="mk-alloc__title">Chain Allocation</strong>
      {rows.map((r) => (
        <div className="mk-arow" key={r.n}>
          <span className="mk-arow__badge">{r.s}</span>
          <div className="mk-arow__main">
            <div className="mk-arow__top">
              <span>{r.n}</span>
              <strong>{r.v}</strong>
            </div>
            <div className="mk-bar">
              <span style={{ width: `${r.p}%` }} />
            </div>
          </div>
          <span className="mk-arow__pct">{r.p}%</span>
        </div>
      ))}
    </div>
  );
}

/* ---- Backtest report ---- */
export function BacktestMock() {
  return (
    <div className="mk mk--back">
      <div className="mk-back__head">
        <strong>Backtest · Momentum</strong>
        <span className="mk-tag up">Passed</span>
      </div>
      <div className="mk-back__stats">
        <div>
          <span className="mk-back__l">Net return</span>
          <span className="mk-back__v up">+64.2%</span>
        </div>
        <div>
          <span className="mk-back__l">Win rate</span>
          <span className="mk-back__v">71%</span>
        </div>
        <div>
          <span className="mk-back__l">Max DD</span>
          <span className="mk-back__v">-8.1%</span>
        </div>
      </div>
      <svg className="mk-back__chart" viewBox="0 0 320 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bkf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 96 L40 88 L80 92 L120 66 L160 74 L200 46 L240 54 L280 26 L320 32 L320 120 L0 120 Z"
          fill="url(#bkf)"
        />
        <path
          d="M0 96 L40 88 L80 92 L120 66 L160 74 L200 46 L240 54 L280 26 L320 32"
          fill="none"
          stroke="#2E6BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
