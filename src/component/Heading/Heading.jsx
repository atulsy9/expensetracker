import "./Heading.css";
function Heading({ children, fontStyle }) {
  return fontStyle ? (
    <div className="heading italicStyle">{children}</div>
  ) : (
    <div className="heading">{children}</div>
  );
}

export default Heading;
