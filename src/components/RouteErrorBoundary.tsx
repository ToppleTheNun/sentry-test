import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

export function RouteErrorBoundary() {
  const error = useRouteError();

  useEffect(() => {
    console.log(error);
  }, [error]);

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
