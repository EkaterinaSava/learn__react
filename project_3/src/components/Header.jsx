import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React Tutorial Shop App</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <a
              href="https://github.com/EkaterinaSava/learn__react/tree/main/project_3"
              rel="noreferrer"
              target="_blank"
            >
              GitHub Project Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export {Header};