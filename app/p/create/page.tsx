"use client"

import Editor from "@/components/editor";
import React from "react";

export default function Create() {
  return (
    <div className="w-full max-w-4xl py-20 mx-auto">
      <Editor onChange={() => {}} />
    </div>
  );
}
