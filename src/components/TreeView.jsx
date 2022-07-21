import React, { useState } from "react";
import { toReadableSize } from "../utils/helpers";
import { ProgressBar } from "./ProgressBar";
import { ChevronRightIcon } from "@heroicons/react/outline";

const priorityEnum = {
  0: "Do not download",
  1: "Normal priority",
  6: "High priority",
  7: "Maximal priority",
};

/**
 * @typedef {Object} Node
 * @property {string} title
 * @property {number} progress
 * @property {number} size
 * @property {boolean} isFolder
 * @property {string} key
 * @property {number} priority
 * @property {Node[]} children
 */

export default function TreeView({ files }) {
  let struct = generateTreeData(files);
  return (
    <div className="border border-light rounded-lg p-1">
      {struct.map((item) => (
        <TreeItem key={item.key} item={item} />
      ))}
    </div>
  );
}

function TreeItemBody({ part, size, progress, priority }) {
  return (
    <div className="flex xl:flex-row flex-col justify-between">
      <div className="truncate shrink">{part}</div>
      <div className="flex gap-1 justify-end flex-grow">
        <div className="text-neutral flex-none">{priorityEnum[priority]}</div>
        <div className="text-neutral flex-none basis-20">
          {toReadableSize(size)}
        </div>
        <div className="xl:basis-80 xl:flex-initial flex-1">
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
}

function TreeItem({ item }) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <div className="flex flex-col pt-1">
      <div
        className={`${item.children.length > 0 ? "hover:cursor-pointer" : ""}`}
        onClick={() => setShowChildren(!showChildren)}
      >
        <div
          className="flex gap-1 items-center hover:bg-light rounded px-1"
          style={{ marginLeft: `${item.key.split("-")[1]}rem` }}
        >
          {item.children.length > 0 && (
            <div
              className={`h-4 w-4 transition-transform ${
                showChildren ? "rotate-90" : ""
              }`}
            >
              <ChevronRightIcon />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <TreeItemBody
              part={item.title}
              progress={item.progress}
              size={item.size}
              priority={item.priority}
            />
          </div>
        </div>
      </div>
      {showChildren &&
        item.children.map((child) => <TreeItem key={child.key} item={child} />)}
    </div>
  );
}

/**
 *
 * @param {*} files
 * @returns {Node[]}
 */
function generateTreeData(files) {
  const renderObj = files
    .map((file) => file.name)
    .map((name) => name.split("/"));

  /**
   * @typedef {Object} CalculatedSize
   * @property {number} size
   * @property {number} progress
   */
  /**
   *
   * @param {Node} node
   * @returns {CalculatedSize}
   */
  function calculateSizeRecursive(node) {
    let size = node.size || 0;
    let progress = node.progress || 0;
    if (node.isFolder) {
      node.children.forEach((child) => {
        let res = calculateSizeRecursive(child);
        size += res.size;
        progress += res.progress;
      });
      progress = progress / node.children.length;
    }
    node.size = size;
    node.progress = progress;
    return { size, progress };
  }

  function arrangeIntoTree(paths) {
    /**
     * @type {Node[]}
     */
    var tree = [];

    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      var currentLevel = tree;
      for (var j = 0; j < path.length; j++) {
        var title = path[j];

        var existingPath = findWhere(currentLevel, "title", title);

        if (existingPath) {
          currentLevel = existingPath.children;
        } else {
          /**
           * @type {Node}
           */
          var newPart = {};
          if (j === path.length - 1)
            newPart = {
              title: title,
              progress: files[i].progress,
              size: files[i].size,
              priority: files[i].priority,
              isFolder: false,
              key: `${i}-${j}`,
              children: [],
            };
          else
            newPart = {
              title: title,
              progress: 0,
              size: 0,
              priority: files[i].priority,
              isFolder: true,
              key: `${i}-${j}`,
              children: [],
            };

          currentLevel.push(newPart);
          currentLevel = newPart.children;
        }
      }
    }
    return tree;

    function findWhere(array, key, value) {
      let t = 0;
      while (t < array.length && array[t][key] !== value) {
        t++;
      }
      if (t < array.length) {
        return array[t];
      } else {
        return false;
      }
    }
  }

  let tree = arrangeIntoTree(renderObj);

  Object.values(tree).forEach((item) => {
    calculateSizeRecursive(item);
  });
  console.log(tree);
  return tree;
}
