import classes from "../../styles/navbar/navbar.module.scss";


function MainNavbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.brand}>
        My
        <img alt="React" src="logo192.png" width="40" height="40" className={classes.title} />
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>


    // <Navbar bg="dark" variant="dark" classNameName={classes.navbar}>
    //   <Container>
    //     <Navbar.Brand href="#home" className={classes.brand}>My <img
    //         alt=""
    //         src="logo192.png"
    //         width="30"
    //         height="30"
    //         className={classes.title}
    //       />{' '}Portfolio
    //       </Navbar.Brand>
    //     <Nav>
    //       <Nav.Link className={classes.link} href="https://www.linkedin.com/" target="_blank">LinkedIn</Nav.Link>
    //       <Nav.Link className={classes.link} href="https://github.com/szotaksimon/REACT-portfolio" target="_blank">GitHub</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
}

export default MainNavbar;
