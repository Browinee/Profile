import React from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    console.error("getDerivedStateFromError", error);
    return { error };
  }

  // @ts-ignore
  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { fallbackRender, children } = this.props;
    const { error } = this.state;
    if (error) {
      return fallbackRender({ error });
    }

    return children;
  }
}
