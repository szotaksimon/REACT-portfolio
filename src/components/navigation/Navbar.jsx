import { Link } from "react-router-dom";
import classes from "../../styles/navbar/navbar.module.scss";

function MainNavbar() {
  return (
    <nav className={classes.navbar}>
      <Link to="/home">
        <div className={classes.brand}>
          My
          <img
            alt="React"
            src="logo192.png"
            width="38"
            height="38"
            className={classes.title}
          />
          Portfolio
        </div>
      </Link>
      <Link to="#" className={classes.toggleB}>
        // eslint-disable-next-line
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </Link>
      <div className={classes.navLinks}>
        <ul>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/szotaksimon/REACT-portfolio"
              target="blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
