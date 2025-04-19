/// <reference types="vite/client" />

// src/types/md.d.ts
declare module '*.md' {
    import { ComponentType } from 'react';
    const Component: ComponentType;
    export default Component;
  }
  
