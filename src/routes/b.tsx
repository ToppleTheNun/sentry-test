import { Link } from "react-router-dom";

export function RouteB() {
  return (
    <>
      <div>Route B</div>
      <Link to="/a">To Route a</Link>
    </>
  );
}
