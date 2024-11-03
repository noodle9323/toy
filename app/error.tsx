'use client';

import { BounceLoader } from 'react-spinners';
import React from 'react';

const Errors = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      <div>
        <BounceLoader />
      </div>
      <p className="font-bold my-2">There is something wrong..</p>
    </div>
  );
};

export default Errors;
