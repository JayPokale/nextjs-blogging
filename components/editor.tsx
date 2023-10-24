"use client";

import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";

type props = {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

export default function Editor({ onChange, initialContent, editable }: props) {
  const { theme } = useTheme();
  console.log(theme);
  const editorTheme = theme === "light" ? lightDefaultTheme : darkDefaultTheme;
  editorTheme.colors.editor.background = "transparent";

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });

  return <BlockNoteView editor={editor} theme={editorTheme} />;
}
