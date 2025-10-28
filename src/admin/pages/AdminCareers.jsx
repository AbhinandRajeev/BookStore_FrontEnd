import React from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import { Button, Card } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard, MdDelete } from "react-icons/md";
import { Label, TextInput } from "flowbite-react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

function AdminCareers() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div>
        <AdminHeader />
        <section>
          <div className='flex'>
            <div className='w-64 '>
              <AdminSideBar />
            </div>

            <div className="mx-auto w-2/3">
              <h1 className="text-center text-2xl my-5">Careers</h1>

              <div className="flex flex-row justify-between my-10">
                <div className="">
                  <div className='flex '>
                    <TextInput className='me-3' id="small" type="text" sizing="md" placeholder='Search By Title' />
                    <Button color='blue'>Search</Button>
                  </div>
                </div>
                <div className="">
                  <Button onClick={() => setOpenModal(true)} color='blue'>Add</Button>
                  <Modal show={openModal} onClose={() => setOpenModal(false)} size="md" className="z-50">
                    <div className="bg-gray-900 rounded-t px-8 py-5 flex items-center justify-between w-[600px] mx-auto">
                      <span className="text-white text-2xl">Application form</span>
                      <button
                        className="text-white text-2xl hover:text-red-400"
                        onClick={() => setOpenModal(false)}
                        aria-label="Close"
                      >
                        &times;
                      </button>
                    </div>
                    <div className="bg-white px-8 py-6 rounded-b w-[600px] mx-auto">
                      <form>
                        <input className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none" placeholder="Job Title" />
                        <input className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none" placeholder="Location" />
                        <input className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none" placeholder="Job Type" />
                        <input className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none" placeholder="Salary" />
                        <input className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none" placeholder="Qualification" />
                        <input className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none" placeholder="Experience" />
                        <textarea className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:outline-none" placeholder="Description" rows={2}></textarea>
                      </form>
                      <div className="flex justify-end space-x-3 mt-2">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded mr-2">
                          Reset
                        </button>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded">
                          Add
                        </button>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>

              <div className="bg-gray-200 p-8 rounded shadow">
                <Tabs aria-label="Full width tabs" variant="fullWidth">
                  <TabItem active title="Job Posts" icon={HiUserCircle}>
                    <div className="w-full space-y-5">
                      <Card className="w-full border border-[#232e3d] bg-[#232e3d] rounded shadow-sm px-4 py-3">
                        <div className="flex justify-between items-start">
                          <div className="w-full">
                            <div className="font-serif text-2xl font-semibold mb-1 text-white">Hr Assistant</div>
                            <hr className="mb-2 border-gray-400" />
                            <div className="flex items-center mb-1 text-blue-300 text-lg">
                              <HiClipboardList className="mr-2" />
                              <a href="#" className="underline">Kochi</a>
                            </div>
                            <div className="text-gray-300 text-base mb-0.5">Job Type : full-time</div>
                            <div className="text-gray-300 text-base mb-0.5">Salary : 20000-30000/month</div>
                            <div className="text-gray-300 text-base mb-0.5">Qualification : MBA</div>
                            <div className="text-gray-300 text-base mb-0.5">Experience : 1-2yr</div>
                            <div className="text-gray-400 text-base mb-0.5">
                              Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam corporis consectetur expedita numquam error nemo dolores sapiente autem sunt veniam tempora unde maiores, illum, quo, assumenda consequatur exercitationem deserunt dignissimos?
                            </div>
                          </div>
                          <button
                            className="h-10 bg-[#a01c1c] text-white rounded px-5 flex items-center hover:bg-[#850808] font-medium ml-4 mt-1"
                          >
                            Delete
                            <MdDelete className="w-5 h-5 ml-2" />
                          </button>
                        </div>
                      </Card>

                      <Card className="w-full border border-[#232e3d] bg-[#232e3d] rounded shadow-sm px-4 py-3">
                        <div className="flex justify-between items-start">
                          <div className="w-full">
                            <div className="font-serif text-2xl font-semibold mb-1 text-white">Hr Assistant</div>
                            <hr className="mb-2 border-gray-400" />
                            <div className="flex items-center mb-1 text-blue-300 text-lg">
                              <HiClipboardList className="mr-2" />
                              <a href="#" className="underline">Kochi</a>
                            </div>
                            <div className="text-gray-300 text-base mb-0.5">Job Type : full-time</div>
                            <div className="text-gray-300 text-base mb-0.5">Salary : 20000-30000/month</div>
                            <div className="text-gray-300 text-base mb-0.5">Qualification : MBA</div>
                            <div className="text-gray-300 text-base mb-0.5">Experience : 1-2yr</div>
                            <div className="text-gray-400 text-base mb-0.5">
                              Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam corporis consectetur expedita numquam error nemo dolores sapiente autem sunt veniam tempora unde maiores, illum, quo, assumenda consequatur exercitationem deserunt dignissimos?
                            </div>
                          </div>
                          <button
                            className="h-10 bg-[#a01c1c] text-white rounded px-5 flex items-center hover:bg-[#850808] font-medium ml-4 mt-1"
                          >
                            Delete
                            <MdDelete className="w-5 h-5 ml-2" />
                          </button>
                        </div>
                      </Card>
                    </div>
                  </TabItem>

                  <TabItem title="View Applicants" icon={MdDashboard}>
                    <div className="flex flex-wrap gap-x-8 gap-y-6 justify-start">
                      <div className="w-72">
                        <Card className="flex m-0 p-4 items-center bg-gray-600">
                          <div className="flex items-center space-x-4">
                            <img src="/images/book1.jpg" alt="" className="rounded" width="50px" />
                            <div>
                              <h5 className="font-bold tracking-tight text-white">Manu</h5>
                              <h6 className="text-white text-sm">manu@gmail.com</h6>
                            </div>
                          </div>
                        </Card>
                      </div>
                      <div className="w-72">
                        <Card className="flex m-0 p-4 items-center bg-gray-600">
                          <div className="flex items-center space-x-4">
                            <img src="/images/book1.jpg" alt="" className="rounded" width="50px" />
                            <div>
                              <h5 className="font-bold tracking-tight text-white">Manu</h5>
                              <h6 className="text-white text-sm">manu@gmail.com</h6>
                            </div>
                          </div>
                        </Card>
                      </div>
                      <div className="w-72">
                        <Card className="flex m-0 p-4 items-center bg-gray-600">
                          <div className="flex items-center space-x-4">
                            <img src="/images/book1.jpg" alt="" className="rounded" width="50px" />
                            <div>
                              <h5 className="font-bold tracking-tight text-white">Manu</h5>
                              <h6 className="text-white text-sm">manu@gmail.com</h6>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </TabItem>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminCareers
