"use client";

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache.js'; 

export default function ThemeRegistry({ children }) {
  const [cache] = React.useState(() => createEmotionCache());

  return (
    <CacheProvider value={cache}>
      {children}
    </CacheProvider>
  );
}
