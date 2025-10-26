import React from 'react'
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
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { HiUserCircle } from "react-icons/hi";

function AdminHeader() {
  return (
    <div>
      <Navbar className='bg-white! border-b border-gray-200' fluid rounded>
        <NavbarBrand href="https://flowbite-react.com">
          <ImBook className="text-3xl text-black!" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black! pl-3">Book Store</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Link to={'/login'}>
            <Button color="cyan" className="mx-3">
              <HiUserCircle className="me-2 h-4 w-4" />
              Log Out
            </Button>
          </Link>
          <NavbarToggle />
        </div>
      </Navbar>
      <marquee behavior="" direction="" className="bg-black text-white">
        Welcome Admin! You're all set to manage and monitor the system. Let's get to work!
      </marquee>
    </div>
  )
}

export default AdminHeader
