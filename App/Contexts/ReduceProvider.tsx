import React from 'react';

interface ReduceProviderProps {
  contexts: any[];
  children: JSX.Element | JSX.Element[];
}

const ReduceProvider = ({contexts, children}: ReduceProviderProps) =>
  contexts.reduce(
    (prev: any, context: any) => React.createElement(context, {children: prev}),
    children,
  );

export default ReduceProvider;