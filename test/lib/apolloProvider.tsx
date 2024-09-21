// src/lib/ApolloProvider.tsx
"use client"; // This is important for the component to run on the client side
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

const ApolloProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
