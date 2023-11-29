import { Link } from "react-router-dom";

export function RouteA() {
  return (
    <>
      <div>Route A</div>
      <Link to="/b">To Route B</Link>
    </>
  );
}
