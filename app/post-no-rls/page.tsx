import PostContainer from './components/PostContainer';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <h1>Posts</h1>
      <PostContainer />
    </div>
  );
};

export default page;
