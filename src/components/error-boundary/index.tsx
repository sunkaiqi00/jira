import React from 'react';

type FullbackRender = ({
  error,
}: {
  error: Error | null;
}) => React.ReactElement;

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fullbackRender: FullbackRender },
  { error: null }
> {
  state = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { children, fullbackRender } = this.props;

    if (error) {
      return fullbackRender({ error });
    }

    return children;
  }
}

export default ErrorBoundary;
