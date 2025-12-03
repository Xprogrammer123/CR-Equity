export default function Comment({ comment }: { comment: any }) {
  return (
    <div className="flex gap-5 py-8 border-b border-gray-200 last:border-0">
      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0">
        70x70
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{comment.author}</h4>
        <span className="text-sm text-gray-500">{comment.date}</span>
        <p className="mt-3 text-gray-700 leading-relaxed">{comment.body}</p>
      </div>
    </div>
  );
}