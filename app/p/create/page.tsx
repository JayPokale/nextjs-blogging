import { Editor } from "novel";

export default function Create() {
  return (
    <div className="p-4 max-w-5xl w-full">
      <Editor
        className="relative min-h-[500px] w-full bg-white dark:bg-zinc-900 sm:mb-[calc(20vh)] sm:rounded-lg sm:shadow-lg"
        defaultValue={{
          type: "doc",
          content: [
            {
              type: "heading",
              attrs: {
                level: 2,
              },
              content: [
                {
                  type: "text",
                  text: "Write an awesome story with an AI assistant in your control.",
                },
              ],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Currently, AI is off so.. Khudka kam khud kr bsdk.",
                },
              ],
            },
            {
              type: "paragraph",
            },
          ],
        }}
      />
    </div>
  );
}
