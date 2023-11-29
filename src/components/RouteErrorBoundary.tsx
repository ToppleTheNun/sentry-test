import { useRouteError } from "react-router-dom";

export function RouteErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div>
        <p>{error.message}</p>
        <pre
          style={{ color: "red", backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          {error.stack}
        </pre>
      </div>
    );
  }
  return <div>Error in router</div>;
}
