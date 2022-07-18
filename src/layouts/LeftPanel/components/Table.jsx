import React from "react";

/**
 * @typedef TableCell
 * @property {any} data
 */

/**
 * @typedef TableRow
 * @property {TableCell[]} cells
 *
 */

/**
 * @typedef TableProps
 * @property {TableRow[]} rows
 * @property {string[]} columns
 */

/**
 *
 * @param {TableProps} param0
 * @returns
 */
export default function Table({ columns, rows }) {
  return (
    <div className="table w-full overflow-x-auto border border-light rounded-lg">
      <div className="table-header-group">
        <div className="table-row divide-x divide-light">
          {columns.map((col) => (
            <div className="table-cell px-3">{col}</div>
          ))}
        </div>
      </div>
      <div className="table-row-group">
        {rows.map((row, idx) => (
          <div
            className={`table-row divide-x divide-light ${
              idx % 2 === 1 ? "bg-light" : ""
            }`}
          >
            {row.cells.map((cell) => (
              <div className="table-cell px-3">{cell?.data || ""}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
