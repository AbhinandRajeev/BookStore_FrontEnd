import { Button, ButtonGroup } from 'flowbite-react'
import React from 'react'
import { Drawer, DrawerHeader, DrawerItems, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { FaUserEdit } from "react-icons/fa";

function EditProfile() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <div>

      </div>
      <section>
        <div className="flex min-h-[50vh] items-center justify-center">
          <Button color="blue" onClick={() => setIsOpen(true)}>
            Edit
          </Button>

        </div>
        <Drawer open={isOpen} onClose={handleClose}>
          <DrawerHeader title="Edit Profile" />
          <DrawerItems>
            <form action="#">
              <div className="relative inline-block">
                <img
                  src="/images/profilepic.jpg"
                  alt="Profile"
                  className="rounded-full w-40 h-40 object-cover ms-15"
                />

                <Button
                  color="blue"
                  className="absolute bottom-2 right-0"
                >
                  <FaUserEdit />
                </Button>
              </div>

              <div className="mb-6 mt-3">
                <Label htmlFor="email" className="mb-2 block">
                  Your email
                </Label>
                <TextInput id="email" name="email" placeholder="name@company.com" type="email" />
              </div>
              <div className="mb-6">
                <Label htmlFor="password" className="mb-2 block">
                  Password
                </Label>
                <TextInput id="password" name="subject" placeholder="" />
              </div>

              <div className="mb-6">
                <Label htmlFor="password" className="mb-2 block">
                  Confirm Password
                </Label>
                <TextInput id="confirmPassword" name="subject" placeholder="" />
              </div>
              <div className="mb-6">
                <Label htmlFor="message" className="mb-2 block">
                  Your message
                </Label>
                <Textarea id="message" name="message" placeholder="Your message..." rows={4} />
              </div>
              <div className='flex justify-evenly'>
                <div className="mb-6">
                  <Button color="blue" type="submit" className="w-full">
                    Reset
                  </Button>
                </div>

                <div className="mb-6">
                  <Button color="blue" type="submit" className="w-full">
                    Update
                  </Button>
                </div>
              </div>


            </form>
          </DrawerItems>
        </Drawer>
      </section>
      
    </>
  )
}

export default EditProfile
