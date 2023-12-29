"use client";

import { Block, BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  DefaultSideMenu,
  DragHandleMenu,
  FormattingToolbarPositioner,
  HyperlinkToolbarPositioner,
  RemoveBlockButton,
  SideMenuPositioner,
  SlashMenuPositioner,
  darkDefaultTheme,
  lightDefaultTheme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { useTheme } from "next-themes";
import "./editor.css";
import { debounce } from "@/lib/debounce";

type props = {
  initialContent?: string;
  editable?: boolean;
  saveToLocal?: boolean;
};

const CustomDragHandleMenu = (props: {
  editor: BlockNoteEditor;
  block: Block;
}) => {
  return (
    <DragHandleMenu>
      <RemoveBlockButton {...props}>Delete</RemoveBlockButton>
    </DragHandleMenu>
  );
};

export default function EditorBlock({
  saveToLocal = false,
  initialContent,
  editable,
}: props) {
  const { theme } = useTheme();
  const editorTheme = theme === "light" ? lightDefaultTheme : darkDefaultTheme;
  editorTheme.fontFamily = "Poppins";
  editorTheme.colors.editor.background = "transparent";
  editorTheme.componentStyles = () => ({
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

  const editorOptions: {
    editable: boolean | undefined;
    initialContent: any;
    onEditorContentChange?: (editor: BlockNoteEditor) => void;
  } = {
    editable,
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
  };
  if (saveToLocal) {
    editorOptions.onEditorContentChange = debounce((editor) => {
      console.log(JSON.stringify(editor.topLevelBlocks, null, 2));
      localStorage.setItem(
        "editor-content",
        JSON.stringify(editor.topLevelBlocks, null, 2)
      );
    }, 1500);
  }

  const editor: BlockNoteEditor = useBlockNote(editorOptions);

  return (
    <BlockNoteView editor={editor} theme={editorTheme}>
      <FormattingToolbarPositioner editor={editor} />
      <HyperlinkToolbarPositioner editor={editor} />
      <SlashMenuPositioner editor={editor} />
      <SideMenuPositioner
        editor={editor}
        sideMenu={(props) => (
          <DefaultSideMenu {...props} dragHandleMenu={CustomDragHandleMenu} />
        )}
      />
    </BlockNoteView>
  );
}
