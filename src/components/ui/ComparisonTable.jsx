import "./ComparisonTable.css";
import Icon from "./Icon";
import Reveal from "./Reveal";

/**
 * Feature comparison grid for the Pricing page.
 * plans: [{ name }], rows: [{ feature, cells: [bool|string] }]
 */
export default function ComparisonTable({ plans, rows }) {
  return (
    <Reveal className="ctable-wrap">
      <div className="ctable" role="table" aria-label="Feature comparison">
        {/* Header */}
        <div className="ctable__head" role="row">
          <div className="ctable__label" role="columnheader">Feature</div>
          {plans.map((p) => (
            <div className="ctable__plan" role="columnheader" key={p.name}>
              {p.name}
            </div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div className="ctable__row" role="row" key={row.feature}>
            <div className="ctable__label" role="cell">{row.feature}</div>
            {row.cells.map((cell, j) => (
              <div className="ctable__cell" role="cell" key={j}>
                {cell === true ? (
                  <span className="ctable__check">
                    <Icon name="Check" size={14} strokeWidth={3} />
                  </span>
                ) : cell === false ? (
                  <span className="ctable__dash">—</span>
                ) : (
                  <span className="ctable__text">{cell}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Reveal>
  );
}
