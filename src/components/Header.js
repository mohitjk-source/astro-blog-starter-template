export default function Header() {
  return (
    <header className="header">
      <img src="/assets/logo.svg" alt="SWJ Logo" height="50" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Episodes</a>
        <a href="#">Reviews</a>
        <a href="#">Soliloquies</a>
        <a href="#" className="subscribe">Subscribe</a>
      </nav>
    </header>
  );
}
