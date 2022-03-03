import { Loader } from "@mantine/core";
import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      <Loader color="green" variant="bars" />
    </div>
  );
}
