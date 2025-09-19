function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} E-Commerce. All rights reserved.
        </p>

        <div>
          <a href="/" className="text-light me-4 text-center">
            Home
          </a>
          <a href="/about" className="text-light text-center">
            About
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
