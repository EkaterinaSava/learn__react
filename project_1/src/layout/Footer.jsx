function Footer() {
  return (
    <footer className="page-footer green lighten-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright / Ekaterina Sava
      <a
        className="grey-text text-lighten-4 right"
        href="https://github.com/EkaterinaSava"
        rel="noreferrer" 
        target="_blank"
      >
          My Github
      </a>
      </div>
    </div>
  </footer>
  )
}

export { Footer };