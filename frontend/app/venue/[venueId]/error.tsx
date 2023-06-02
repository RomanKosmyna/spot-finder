'use client';

import { useEffect } from 'react';

export default function Error({
                                error,
                                reset,
                              }: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{backgroundColor: "black", color: "white", height: "95vh"}}>
      <h2 style={{marginTop: "0"}}>Something went wrong!</h2>
      <button
        onClick={
          () => { reset(); }
        }
      >
        Try again
      </button>
    </div>
  );
}