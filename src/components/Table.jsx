import React from "react";

/**
 * @typedef TableCell
 * @property {any} data
 * @property {number || string} id
 */

/**
 * @typedef TableRow
 * @property {TableCell[]} cells
 *
 */
/**
 * @typedef Column
 * @property {sting} name
 * @property {string} width
 */
/**
 * @typedef TableProps
 * @property {TableRow[]} rows
 * @property {string[]} columns
 * @property {bool} fixed
 */

/**
 *
 * @param {TableProps} param0
 * @returns
 */
export default function Table({ columns, rows, fixed = false }) {
  return (
    <div
      className={`table w-full overflow-x-auto border border-light rounded-lg ${
        fixed ? "table-fixed" : "table-auto"
      }`}
    >
      {columns && (
        <div className="table-header-group">
          <div className="table-row divide-x divide-light">
            {columns?.map((col) => (
              <div
                key={col.name}
                style={{ width: col?.width }}
                className="table-cell px-3"
              >
                {col.name}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="table-row-group">
        {rows?.map((row, idx) => (
          <div
            key={row?.id}
            className={`table-row divide-x divide-light ${
              idx % 2 === 1 ? "bg-light" : ""
            }`}
          >
            {row.cells.map((cell) => (
              <div key={cell?.id} className="table-cell px-3 align-middle">
                {cell?.data || ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
