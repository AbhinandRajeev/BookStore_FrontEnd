import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import { ImBook } from "react-icons/im";
import { Link } from "react-router-dom";


function Header() {

  // To hold user details
  const [userData, setUserData] = useState({})

  // get user details
  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  console.log(userDetails);

  useEffect(() => {
    setUserData(userDetails)
  }, [])
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <ImBook className="text-3xl dark:text-white" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-3">Book Store</span>
        </NavbarBrand>
        <div className="flex md:order-2">

          {
            userData ?
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
              >
                <DropdownHeader>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                </DropdownHeader>
                <Link to={'/profile'}>
                  <DropdownItem>Dashboard</DropdownItem>
                </Link>
                <DropdownDivider />
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
              :
              <Link to={'/login'}>
                <Button color="cyan" className="mx-3">
                  <HiUserCircle className="me-2 h-4 w-4" />
                  Login
                </Button>
              </Link>
          }

          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/books" className="text-white hover:text-gray-400">Books</Link>
          <Link to="/careers" className="text-white hover:text-gray-400">Careers</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default Header;

