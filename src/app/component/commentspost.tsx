'use client';

import { useState, useEffect } from 'react';

export default function CommentSection() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentset, setComments] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    const commentStorage = localStorage.getItem('comments');
    if (commentStorage) {
      setComments(JSON.parse(commentStorage));
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      const updatedComments = [...commentset, { name, comment }];
      setComments(updatedComments);
      setName('');
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = commentset.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-6 w-full max-w-lg">
        <h2 className="text-2xl mb-4">Comments</h2>

        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className="p-2 border text-black border-gray-300 rounded mb-4 w-full"
        />

        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="p-2 border text-black border-gray-300 rounded mb-4 w-full"
        />

        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-[#7dd163] text-white rounded hover:bg-[#113f03]"
        >
          Add Comment
        </button>

        <div className="mt-6 -ml-6">
          {commentset.length > 0 ? (
            <ul className="list-disc pl-6">
              {commentset.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-black flex justify-between items-center bg-gray-100 p-3 rounded-lg"
                >
                  <span>
                    <strong>{item.name}</strong>: {item.comment}
                  </span>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

