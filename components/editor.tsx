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
  title?: string;
};

export default function Editor({
  title = "",
  onChange,
  initialContent,
  editable,
}: props) {
  const { theme } = useTheme();
  const editorTheme = theme === "light" ? lightDefaultTheme : darkDefaultTheme;
  editorTheme.fontFamily = "Poppins";
  editorTheme.colors.editor.background = "transparent";
  editorTheme.componentStyles = (theme) => ({
    Menu: {
      div: {
        fontFamily: "sans-serif",
      },
    },
    EditHyperlinkMenu: {
      div: {
        fontFamily: "sans-serif",
      },
    },
    Toolbar: {
      div: {
        fontFamily: "sans-serif",
      },
    },
    Tooltip: {
      div: {
        fontFamily: "sans-serif",
      },
    },
  });

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });

  return (
    <>
      <div
        contentEditable={true}
        data-ph="Title"
        className="outline-none mx-8 px-5 py-3 text-5xl font-bold font-[Poppins] border-l-2 border-transparent focus:border-inherit opacity-80"
      >
        {title}
      </div>
      <BlockNoteView editor={editor} theme={editorTheme} />
    </>
  );
}
