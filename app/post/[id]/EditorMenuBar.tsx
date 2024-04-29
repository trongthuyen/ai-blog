/**
 * Visit the link https://tiptap.dev/docs/editor/installation/react for a completed configuration of MenuBar
 */
import {
  ArrowUturnDownIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  BarsArrowDownIcon,
  CodeBracketIcon,
  ListBulletIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { Editor } from "@tiptap/react";

interface EditorMenuBarProps {
  editor: Editor | null;
}

const EditorMenuBar = ({ editor }: EditorMenuBarProps) => {
  if (!editor) {
    return null;
  }

  const btnClassNames = "hover:bg-wh-100 duration-200 py-1 px-2 rounded-md";
  const isActiveBtnClassNames = "bg-wh-500 text-wh-50 py-1 px-2 rounded-md";

  return (
    <div className="flex justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          type="button"
          className={
            editor.isActive("heading", { level: 1 })
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          H<span className="text-xs">1</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          type="button"
          className={
            editor.isActive("heading", { level: 2 })
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          H<span className="text-xs">2</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          type="button"
          className={
            editor.isActive("heading", { level: 3 })
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          H<span className="text-xs">3</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          type="button"
          className={
            editor.isActive("heading", { level: 4 })
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          H<span className="text-xs">4</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          type="button"
          className={
            editor.isActive("heading", { level: 5 })
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          H<span className="text-xs">5</span>
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          type="button"
          className={
            editor.isActive("heading", { level: 6 })
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          H<span className="text-xs">6</span>
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          type="button"
          className={
            editor.isActive("paragraph") ? isActiveBtnClassNames : btnClassNames
          }
        >
          paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          type="button"
          className={
            editor.isActive("bold") ? isActiveBtnClassNames : btnClassNames
          }
        >
          <b>B</b>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          type="button"
          className={
            editor.isActive("italic") ? isActiveBtnClassNames : btnClassNames
          }
        >
          <i>I</i>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          type="button"
          className={
            editor.isActive("strike") ? isActiveBtnClassNames : btnClassNames
          }
        >
          <s>Strike</s>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          type="button"
          className={
            editor.isActive("bulletList")
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          <ListBulletIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          type="button"
          className={
            editor.isActive("orderedList")
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          <QueueListIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          type="button"
          className={
            editor.isActive("code") ? isActiveBtnClassNames : btnClassNames
          }
        >
          <CodeBracketIcon className="h-6 w-6" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          type="button"
          className={
            editor.isActive("codeBlock") ? isActiveBtnClassNames : btnClassNames
          }
        >
          {"{ }"}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          type="button"
          className={
            editor.isActive("blockquote")
              ? isActiveBtnClassNames
              : btnClassNames
          }
        >
          ❝ ❞
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={btnClassNames}
        >
          ―
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={btnClassNames}
        >
          <BarsArrowDownIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={btnClassNames}
        >
          <ArrowUturnLeftIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={btnClassNames}
        >
          <ArrowUturnRightIcon className="h-6 w-6" />
        </button>
        {/* <button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button> */}
      </div>
    </div>
  );
};

export default EditorMenuBar;
