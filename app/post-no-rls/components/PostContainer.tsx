'use client';

import React, { useState } from 'react';

import usePostsController from '../hooks/usePostsController';

const PostContainer = () => {
  const [userSearchInput, setUserSearchInput] = useState('');
  const {
    loading,
    posts,
    onCreateEmptyPosts,
    onUpdatePosts,
    onDeletePosts,
    onSearchPosts,
  } = usePostsController();

  const handleSearchEnd = () => {
    onSearchPosts(userSearchInput);
  };

  return (
    <div>
      <article>
        <input
          type="text"
          value={userSearchInput}
          onChange={(e) => setUserSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchEnd();
              setUserSearchInput('');
            }
          }}
        />
        <button onClick={onCreateEmptyPosts}>추가</button>
      </article>
      <ul className="flex w-96 flex-col ">
        {posts.map((item) => (
          <li
            className="flex items-center border border-blue-400 p-3 h-10 justify-between "
            key={item.id}
          >
            {item.content}
            <button onClick={() => onDeletePosts(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostContainer;
