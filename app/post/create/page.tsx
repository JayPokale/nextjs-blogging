"use client";

import Editor from "@/components/editor";
import React from "react";

export default function Create() {
  return (
    <>
      <Editor
        saveToLocal
        title={localStorage.getItem("editor-title") || ""}
        thumbnailURL={localStorage.getItem("editor-thumbnail") || ""}
        initialContent={localStorage.getItem("editor-content") || ""}
      />
    </>
  );
}
