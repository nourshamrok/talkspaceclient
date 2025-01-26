import React from "react";
import { ErrorBoundary } from "react-error-boundary";

// Fallback UI for errors
function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// Global Error Boundary Wrapper
function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your application here if necessary
        console.log("Error boundary reset");
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default GlobalErrorBoundary;
