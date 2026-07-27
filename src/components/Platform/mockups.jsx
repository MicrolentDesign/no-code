import Icon from "../ui/Icon";

/* ---- Platform Overview: connected dashboard-windows diagram ---- */
export function OverviewDiagram() {
  const items = [
    { icon: "Blocks", label: "Strategy Builder" },
    { icon: "LineChart", label: "Backtesting" },
    { icon: "Activity", label: "Paper Trading" },
    { icon: "Link2", label: "Broker" },
    { icon: "LayoutDashboard", label: "Reports" },
  ];
  return (
    <div className="ov-diagram">
      <span className="ov-diagram__line" aria-hidden="true" />
      {items.map((it, i) => (
        <div className="ov-diagram__node" key={it.label} style={{ "--i": i }}>
          <span className="ov-diagram__ic">
            <Icon name={it.icon} size={17} />
          </span>
          <span className="ov-diagram__label">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ---- Strategy Builder: rule-flow diagram (indicators -> logic -> action) ---- */
export function StrategyFlowDiagram() {
  return (
    <div className="flow-diagram">
      <div className="flow-diagram__row">
        {["RSI", "EMA", "MACD", "Volume", "Price"].map((t) => (
          <span className="flow-chip flow-chip--input" key={t}>
            {t}
          </span>
        ))}
      </div>
      <span className="flow-diagram__connector" aria-hidden="true" />
      <div className="flow-diagram__row">
        <span className="flow-chip flow-chip--op">AND</span>
        <span className="flow-chip flow-chip--op">OR</span>
      </div>
      <span className="flow-diagram__connector" aria-hidden="true" />
      <div className="flow-diagram__row">
        <span className="flow-chip flow-chip--buy">Buy</span>
        <span className="flow-chip flow-chip--sell">Sell</span>
      </div>
    </div>
  );
}

/* ---- Backtesting: equity curve + trade list dashboard ---- */
export function BacktestDashboard() {
  const trades = [
    { pair: "BTC/USDT", date: "Mar 14", pct: "+3.2%", up: true },
    { pair: "ETH/USDT", date: "Mar 12", pct: "-1.1%", up: false },
    { pair: "SOL/USDT", date: "Mar 09", pct: "+5.6%", up: true },
  ];
  return (
    <div className="bt-dash">
      <div className="bt-dash__head">
        <strong>Equity Curve</strong>
        <div className="bt-dash__filters">
          <span className="bt-dash__filter is-on">1Y</span>
          <span className="bt-dash__filter">3Y</span>
          <span className="bt-dash__filter">All</span>
          <span className="bt-dash__toggle">
            <Icon name="Layers" size={12} /> Compare
          </span>
        </div>
      </div>
      <svg className="bt-dash__chart" viewBox="0 0 360 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="btdf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 112 L40 104 L80 108 L120 78 L160 88 L200 52 L240 62 L280 30 L320 38 L360 22 L360 140 L0 140 Z"
          fill="url(#btdf)"
        />
        <path
          d="M0 112 L40 104 L80 108 L120 78 L160 88 L200 52 L240 62 L280 30 L320 38 L360 22"
          fill="none"
          stroke="#2E6BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="bt-dash__summary">
        <div>
          <span>Net return</span>
          <strong className="up">+64.2%</strong>
        </div>
        <div>
          <span>Win rate</span>
          <strong>71%</strong>
        </div>
        <div>
          <span>Max DD</span>
          <strong className="down">-8.1%</strong>
        </div>
      </div>
      <div className="bt-dash__trades">
        {trades.map((t) => (
          <div className="bt-dash__trade" key={t.pair + t.date}>
            <span className="bt-dash__trade-pair">{t.pair}</span>
            <span className="bt-dash__trade-date">{t.date}</span>
            <span className={`bt-dash__trade-pct ${t.up ? "up" : "down"}`}>{t.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Paper Trading: portfolio + open-positions dashboard ---- */
export function PaperTradingDashboard() {
  const positions = [
    { pair: "BTC/USDT", pnl: "+$420", up: true },
    { pair: "ETH/USDT", pnl: "-$85", up: false },
  ];
  return (
    <div className="pt-dash">
      <div className="pt-dash__stats">
        <div>
          <span>Portfolio Value</span>
          <strong>$102,450</strong>
        </div>
        <div>
          <span>Today's P&amp;L</span>
          <strong className="up">+$1,240</strong>
        </div>
        <div>
          <span>Active Orders</span>
          <strong>6</strong>
        </div>
      </div>
      <div className="pt-dash__chart-head">
        <strong>Performance</strong>
        <span className="pt-dash__chart-tag">
          <i /> Live
        </span>
      </div>
      <svg className="pt-dash__chart" viewBox="0 0 320 90" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ptf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 72 L32 64 L64 68 L96 46 L128 54 L160 32 L192 40 L224 20 L256 28 L288 12 L320 18 L320 90 L0 90 Z"
          fill="url(#ptf)"
        />
        <path
          d="M0 72 L32 64 L64 68 L96 46 L128 54 L160 32 L192 40 L224 20 L256 28 L288 12 L320 18"
          fill="none"
          stroke="#2E6BFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="pt-dash__positions">
        <strong className="pt-dash__positions-title">Open Positions</strong>
        {positions.map((p) => (
          <div className="pt-dash__pos-row" key={p.pair}>
            <span>{p.pair}</span>
            <span className={p.up ? "up" : "down"}>{p.pnl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Live Trading: order queue + activity feed dashboard ---- */
export function LiveTradingDashboard() {
  const orders = [
    { pair: "BTC/USDT", type: "Market", status: "Filled" },
    { pair: "ETH/USDT", type: "Limit", status: "Pending" },
    { pair: "SOL/USDT", type: "Market", status: "Filled" },
  ];
  return (
    <div className="lt-dash">
      <div className="lt-dash__head">
        <strong>Live Orders</strong>
        <span className="lt-dash__live">
          <i /> Streaming
        </span>
      </div>
      <div className="lt-dash__orders">
        {orders.map((o) => (
          <div className="lt-dash__order" key={o.pair}>
            <span className="lt-dash__order-pair">{o.pair}</span>
            <span className="lt-dash__order-type">{o.type}</span>
            <span className={`lt-dash__order-status ${o.status === "Filled" ? "is-filled" : "is-pending"}`}>
              {o.status}
            </span>
          </div>
        ))}
      </div>
      <div className="lt-dash__feed">
        <strong className="lt-dash__feed-title">Activity Feed</strong>
        <div className="lt-dash__feed-row">
          <span className="lt-dash__feed-ic">
            <Icon name="Check" size={12} />
          </span>
          Order filled — BTC/USDT
        </div>
        <div className="lt-dash__feed-row">
          <span className="lt-dash__feed-ic lt-dash__feed-ic--pending">
            <Icon name="Clock" size={12} />
          </span>
          Order pending — ETH/USDT
        </div>
      </div>
    </div>
  );
}

/* ---- Broker Integrations: minimal horizontal connection diagram ---- */
export function BrokerDiagram() {
  const items = [
    { icon: "LayoutDashboard", label: "Platform" },
    { icon: "Link2", label: "Broker" },
    { icon: "Zap", label: "Execution" },
    { icon: "BarChart3", label: "Reports" },
  ];
  return (
    <div className="broker-diagram">
      {items.map((it, i) => (
        <div className="broker-diagram__wrap" key={it.label}>
          <div className="broker-diagram__node">
            <span className="broker-diagram__ic">
              <Icon name={it.icon} size={19} />
            </span>
            <span className="broker-diagram__label">{it.label}</span>
          </div>
          {i < items.length - 1 && <span className="broker-diagram__connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

/* ---- Market Scanner: filters + results + heatmap ---- */
export function ScannerPreview() {
  const results = [
    { pair: "SOL/USDT", change: "+8.2%", up: true },
    { pair: "AVAX/USDT", change: "+5.4%", up: true },
    { pair: "DOGE/USDT", change: "-3.1%", up: false },
  ];
  const heat = [72, 45, 88, 30, 60, 92, 15, 55, 78, 40, 65, 25];
  return (
    <div className="scan-dash">
      <div className="scan-dash__filters">
        <span className="scan-dash__filter is-on">Volume &gt; 1M</span>
        <span className="scan-dash__filter">RSI &lt; 30</span>
        <span className="scan-dash__filter scan-dash__filter--add">+ Add filter</span>
      </div>
      <div className="scan-dash__table">
        <div className="scan-dash__table-head">
          <span>Pair</span>
          <span>24h Change</span>
        </div>
        {results.map((r) => (
          <div className="scan-dash__row" key={r.pair}>
            <span className="scan-dash__row-pair">{r.pair}</span>
            <span className={`scan-dash__row-change ${r.up ? "up" : "down"}`}>{r.change}</span>
          </div>
        ))}
      </div>
      <span className="scan-dash__heatmap-label">Market Heatmap</span>
      <div className="scan-dash__heatmap">
        {heat.map((v, i) => (
          <span key={i} className="scan-dash__cell" style={{ opacity: v / 100 }} />
        ))}
      </div>
    </div>
  );
}

/* ---- Analytics & Reports: large multi-part dashboard ---- */
export function AnalyticsDashboard() {
  const rows = [
    { strategy: "Momentum", ret: "+18.2%", up: true },
    { strategy: "Mean Reversion", ret: "+9.4%", up: true },
    { strategy: "Breakout", ret: "-2.1%", up: false },
  ];
  const months = [40, 55, 48, 62, 58, 74, 68, 80];
  return (
    <div className="an-dash">
      <div className="an-dash__head">
        <strong>Portfolio Analytics</strong>
        <span className="an-dash__tag">All strategies</span>
      </div>
      <svg className="an-dash__chart" viewBox="0 0 340 96" preserveAspectRatio="none">
        <defs>
          <linearGradient id="adf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#2E6BFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 78 L34 70 L68 74 L102 50 L136 58 L170 34 L204 42 L238 22 L272 30 L306 14 L340 20 L340 96 L0 96 Z"
          fill="url(#adf)"
        />
        <path
          d="M0 78 L34 70 L68 74 L102 50 L136 58 L170 34 L204 42 L238 22 L272 30 L306 14 L340 20"
          fill="none"
          stroke="#2E6BFF"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="an-dash__bars-label">Monthly Returns</div>
      <div className="an-dash__bars">
        {months.map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="an-dash__table">
        {rows.map((r) => (
          <div className="an-dash__row" key={r.strategy}>
            <span>{r.strategy}</span>
            <span className={r.up ? "up" : "down"}>{r.ret}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
