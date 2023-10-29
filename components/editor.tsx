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
      {/* Title */}
      <div
        contentEditable={true}
        data-ph="Title"
        className="outline-none mx-8 px-5 py-3 text-5xl font-bold font-[Poppins] border-l-2 border-transparent focus:border-inherit opacity-80"
      >
        {title}
      </div>

      {/* Thumbnail */}
      <div className="w-full mx-8 py-4 rounded-xl border-2 border-dashed cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-900 duration-150">
        <div className="w-full flex justify-center opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <rect
              width="14"
              height="14"
              x="5"
              y="5"
              stroke="currentColor"
              stroke-width="1.5"
              rx="4"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M13.7778 9.33331H13.7867"
            />
          </svg>
          <p>Select an thumbnail</p>
        </div>
      </div>

      {/* Editor */}
      <BlockNoteView editor={editor} theme={editorTheme} />
    </>
  );
}
