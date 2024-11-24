import React, { useState } from 'react';

import { postcss } from 'tailwindcss';

const PostListItem = ({ posts, onUpdate, onDelete }: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(posts?.content ?? '');

  const onStartEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const onFinishEdit = () => {
    onUpdate(posts.id, userInput);
    setIsEdit(false);
  };
  const onClickDelete = () => {
    onDelete(posts.id);
  };

  return (
    <li className="rounded-2xl group border border-black">
      <article className="p-3 flex flex-col sm:flex-row gap-2">
        {isEdit ? (
          <input
            className="flex-1"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        ) : (
          <div className="flex-1" onClick={onStartEdit}>
            {posts?.content}
          </div>
        )}

        <div className="flex self-end gap-2">
          <button onClick={onFinishEdit}>수정</button>
          <button onClick={onClickDelete}>삭제</button>
        </div>
      </article>
    </li>
  );
};

export default PostListItem;
