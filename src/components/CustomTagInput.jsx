import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

export default function CustomTagInput({
  name,
  defaultTags = [],
  onFetchCallback,
  delay = 500,
}) {
  const [tags, setTags] = useState(defaultTags);
  const [tagInput, setTagInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useCallback(debounce(onFetch, delay), [tagInput]);

  async function onFetch() {
    if (tagInput === "") {
      setSuggestions([]);
      return;
    }
    let res = onFetchCallback(tagInput);
    setSuggestions(res);
  }

  useEffect(() => {
    if (tagInput.endsWith(" ")) {
      if (tags.includes(tagInput) === false) {
        addTag(tagInput);
      }
    }
    debounced();
    return debounced.cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setTags, tagInput, tags]);

  function addTag(textInput) {
    let tagString = textInput.trim();
    setTags([...tags, tagString]);
    setTagInput("");
    setSuggestions([]);
  }

  function deleteTag(e, tag) {
    e.preventDefault();
    setTags(tags.filter((tagInList) => tagInList !== tag));
  }

  return (
    <div className="relative">
      <input type={"hidden"} id={name} name={name} value={tags.join(",")} />
      <div className="flex items-center rounded border border-light dark:border-neutral">
        <div className="flex gap-2 px-2">
          {tags.map((tag, idx) => (
            <div
              className="inline-flex whitespace-nowrap pl-2 bg-primary text-white rounded"
              key={idx}
            >
              {tag}
              <div
                onClick={(e) => deleteTag(e, tag)}
                className="ml-1 px-1 hover:bg-white/20 cursor-pointer"
              >
                ×
              </div>
            </div>
          ))}
        </div>
        <input
          className="w-full focus:outline-none py-2 bg-transparent"
          type={"text"}
          list={"tags"}
          placeholder="Tags"
          name={"tagInput"}
          value={tagInput}
          autoComplete="off"
          onChange={(e) => setTagInput(e.target.value)}
        ></input>
      </div>
      {tagInput && (
        <ul className="absolute bg-white text-black dark:bg-dark dark:text-white dark:border dark:border-neutral left-0 right-0 mt-1 py-1 rounded shadow-lg">
          <li
            className="px-4 hover:bg-primary hover:text-white cursor-pointer"
            onClick={() => {
              addTag(tagInput);
            }}
          >
            Create <strong>{tagInput}</strong> tag
          </li>
          {suggestions.map((suggestion, idx) => (
            <li
              key={idx}
              onClick={() => {
                addTag(suggestion);
              }}
              className="px-4 hover:bg-primary hover:text-white cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
