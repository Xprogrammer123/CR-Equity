"use client";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function ClientComments({ slug }: { slug: string }) {
  const API_URL = "https://yourproject.mockapi.io/comments"; // replace this
  const { register, handleSubmit, reset } = useForm();
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Load comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`${API_URL}?postSlug=${slug}`);
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Error loading comments:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [slug]);

  // Add new comment
  const onSubmitComment = async (data: any) => {
    const newComment = {
      postSlug: slug,
      author: data.author || "Anonymous",
      body: data.body,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });
      const saved = await res.json();
      setComments((prev) => [...prev, saved]);
      reset();
    } catch (err) {
      console.error("Failed to post comment:", err);
    }
  };

  return (
    <div className="mt-20 border-t pt-10">
      <h2 className="text-3xl font-bold mb-8">
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit(onSubmitComment)}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10"
      >
        <div className="grid gap-4">
          <input
            {...register("author")}
            placeholder="Your name (optional)"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            {...register("body", { required: true })}
            rows={4}
            placeholder="Share your thoughts..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            required
          />
          <button
            type="submit"
            className="self-start flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Send className="w-5 h-5" />
            Post Comment
          </button>
        </div>
      </form>

      {/* Comments List */}
      {loading ? (
        <p className="text-gray-500 text-center">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No comments yet. Be the first!
        </p>
      ) : (
        <div className="space-y-8">
          {comments.map((c) => (
            <div
              key={c.id}
              className="border border-gray-200 bg-white rounded-xl p-5 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-gray-900">
                  {c.author || "Anonymous"}
                </h4>
                <span className="text-sm text-gray-500">{c.date}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
