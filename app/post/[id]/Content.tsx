"use client";

import SocialLinks from "@/app/(shared)/SocialLinks";
import { FormattedPost } from "@/app/types";
import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import React, { useState } from "react";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";

interface ContentProps {
  post: FormattedPost;
}

const Content = ({ post }: ContentProps) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [tempContent, setTempContent] = useState<string>(content);

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editable: isEditable,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
    content,
  });

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation checks
    if (title === "") setTitleError("This field is required.");
    if (editor?.isEmpty) setContentError("This field is required.");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );

    const data = await response.json();

    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <div className="prose w-full max-w-full mb-10">
      {/* BREADCRUMBS */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>

      {/* CATEGORY AND EDIT */}
      <CategoryAndEdit
        editor={editor}
        post={post}
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
      />

      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={handleOnChangeTitle}
                value={title}
              />
              {titleError && <p className="text-accent-red">{titleError}</p>}
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs">{post.createdAt}</h6>
          </div>
        </>

        {/* IMAGE */}
        <div className="relative w-auto h-96 mt-2 mb-16">
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480px) 100vw
                    (max-width: 768px) 75vw
                    (max-width: 1060px) 50vw
                    60vw
              "
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* ARTICLE */}
        <Article
          editor={editor}
          isEditable={isEditable}
          contentError={contentError}
          setContent={setContent}
          title={title}
        />

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-22 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>

      {/* SOCIAL LINKS */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
