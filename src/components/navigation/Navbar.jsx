import classes from "../../styles/navbar/navbar.module.scss";

function MainNavbar() {
  return (
    <nav className={classes.navbar}>
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
      <a href="#" className={classes.toggleB}>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </a>
      <div className={classes.navLinks}>
        <ul>
          <li>
            <a href="http://localhost:3000/">Home</a>
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
