import { IoSearchOutline, IoShareSocialOutline } from 'react-icons/io5';
import React, { useState } from 'react';

import PostListItem from './PostListItem';
import { useCopyToClipboard } from 'usehooks-ts';
import usePostsController from '../hooks/usePostsController';

const PostList = ({
  userName = '',
  ownerUserId = '',
  posts = [],
  loading,
  onUpdate,
  onDelete,
}) => {
  const [userSearchInput, setUserSearchInput] = useState('');
  const [copiedText, copy] = useCopyToClipboard();
  const { onCreateEmptyPosts, onUpdatePosts, onDeletePosts, onSearchPosts } =
    usePostsController();

  const handleCopy = () => {
    const shareLink = `${'sharedLInk'}/share/${ownerUserId}`;
    copy(shareLink)
      .then(() => {
        console.log('Copied!', { shareLink });
      })
      .catch((e) => {
        console.error('faile~', e);
      });
  };

  const handleSearchEnd = () => {
    onSearchPosts(userSearchInput);
  };

  return (
    <section className="min-h-[70vh] bg-[#4d92f7]">
      <div className="w-full max-w-[800px] p-[20px] mx-auto">
        <article className="flex flex-row justify-between items-center">
          <div className="font-bold text-[32px]">
            {userName && <div>{userName}</div>}
            blog
          </div>
          <button
            className="text-[16px] flex flex-row items-center cursor-pointer"
            onClick={() => handleCopy()}
          >
            <span>share</span>
            <IoShareSocialOutline />
          </button>
        </article>
        <article className="flex flex-col sm:flex-row gap-4 mt-8">
          <div className="flex flex-1 h-[60px]">
            <input
              className="p-4 flex-1 border boder-black rounded-l-2xl"
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
            <div className="w-[60px] flex justify-center items-center bg-black rounded-r-2xl cursor-pointer">
              <IoSearchOutline
                size={20}
                color="fff"
                onClick={onCreateEmptyPosts}
              />
            </div>
          </div>
          <div className="p-4 flex justify-center items-center border boder-black rounded-2xl">
            New Task
          </div>
        </article>
        <span className="flex h-[2px] my-10 bg-black"></span>
        {posts?.length >= 1 ? (
          <ul>
            {(posts ?? []).map((item: any) => {
              return (
                <PostListItem
                  key={item?.id}
                  posts={item}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
            })}
          </ul>
        ) : (
          <div>{loading ? 'Loading...' : 'empty!'}</div>
        )}
      </div>
    </section>
  );
};

export default PostList;
