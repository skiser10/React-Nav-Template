import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>HILLBILLY CODER</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/skills' activeStyle>
            My Skills
          </NavLink>
          <NavLink to='/projects' activeStyle>
            My Projects
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Me
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Navbar;
