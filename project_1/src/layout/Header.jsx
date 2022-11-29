function Header() {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">React Tutorial Movies App</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/EkaterinaSava/learn__react"
              rel="noreferrer"
              target="_blank"
            >
              GitHub Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export {Header};