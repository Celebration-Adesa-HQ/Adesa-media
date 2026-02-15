"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CommentsSection({
  comments,
  commentsCount,
  form,
  handleChange,
  handleSubmit,
}) {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#1A1F3D] flex items-center">
          <MessageCircle className="w-6 h-6 mr-3 text-[#FF9500]" />
          Join the conversation ({commentsCount})
        </h2>
      </div>

      <div className="space-y-8 mb-12">
        {comments.length === 0 && (
          <p className="text-[#6B6B6B]">
            No comments yet. Start the conversation.
          </p>
        )}

        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Image
              src={comment.avatar}
              alt={comment.author}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[#1A1F3D]">
                  {comment.website ? (
                    <Link
                      href={comment.website}
                      target="_blank"
                      className="hover:underline text-[#FF9500]"
                    >
                      {comment.author}
                    </Link>
                  ) : (
                    comment.author
                  )}
                </h4>

                <time className="text-sm text-[#6B6B6B]">{comment.date}</time>
              </div>

              <p className="mt-2 text-[#2C2C2C] leading-relaxed">
                {comment.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-8 border-[#D1D1D1]">
        <h3 className="text-xl font-bold text-[#1A1F3D] mb-6">
          Leave A Comment
        </h3>

        <div className="space-y-4">
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Comment *"
            rows={5}
            className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl focus:ring-2 focus:ring-[#FF9500]"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name *"
              className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl"
            />

            <input
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="Website"
              className="w-full p-4 border border-[#D1D1D1] text-[#FF9500] rounded-xl"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-[#6B6B6B]">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="mt-1 text-[#FF9500] border-[#D1D1D1]"
            />
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>

          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-[#1A1F3D] text-white rounded-xl hover:opacity-90"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
