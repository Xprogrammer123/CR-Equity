"use client";

import React from "react";

type CommentProps = {
  comment: {
    id?: string;
    author: string;
    body: string;
    date: string;
  };
};

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="border border-gray-200 bg-white rounded-xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-900">
          {comment.author || "Anonymous"}
        </h4>
        <span className="text-sm text-gray-500">{comment.date}</span>
      </div>

      {/* Body */}
      <p className="text-gray-700 leading-relaxed">{comment.body}</p>
    </div>
  );
}
