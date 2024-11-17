'use client';

import React, { useState } from 'react';

import PostList from './PostList';
import usePostsController from '../hooks/usePostsController';

const PostContainer = () => {
  const { loading, posts, onUpdatePosts, onDeletePosts } = usePostsController();

  return (
    <div>
      <PostList
        userName="hi"
        ownerUserId="noodle"
        loading={loading}
        posts={posts as never[]}
        onUpdate={onUpdatePosts}
        onDelete={onDeletePosts}
      />
    </div>
  );
};

export default PostContainer;
