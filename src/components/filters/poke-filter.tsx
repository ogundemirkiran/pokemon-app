import React from "react";

interface PokeFilterType {
  title?: string;
  setTitle?: any;
}

export default function PokeFilter({ title, setTitle }: PokeFilterType) {
  return (
    <form style={{ display: "flex", justifyContent: "center" }}>
      <input
        className="new-todo"
        placeholder="Enter Pokemon Name"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 5, borderRadius: 5, width: 190, minWidth: 190 }}
      />
    </form>
  );
}
