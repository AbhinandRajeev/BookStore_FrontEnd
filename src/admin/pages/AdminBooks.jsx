import React from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import { Button, Card } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

function AdminBooks() {
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
              <h1 className="text-center text-2xl my-5">All Books</h1>
              <div className="bg-gray-200 p-8 rounded shadow">
                <Tabs aria-label="Full width tabs" variant="fullWidth">
                  <TabItem active title="Book List" icon={HiUserCircle}>
                    <div className="flex flex-wrap gap-x-8 gap-y-6 justify-start">
                      <div className="w-64">
                        <Card className="m-0">
                          <img src="/images/book1.jpg" alt="" width="150px" className="mx-auto" />
                          <h5 className="font-bold tracking-tight text-white mt-3">
                            The Great Gatsby
                            <span className="block text-sm font-normal">MRP : 295</span>
                          </h5>
                        </Card>
                      </div>
                      <div className="w-64">
                        <Card className="m-0">
                          <img src="/images/book1.jpg" alt="" width="150px" className="mx-auto" />
                          <h5 className="font-bold tracking-tight text-white mt-3">
                            The Great Gatsby
                            <span className="block text-sm font-normal">MRP : 295</span>
                          </h5>
                        </Card>
                      </div>
                      <div className="w-64">
                        <Card className="m-0">
                          <img src="/images/book1.jpg" alt="" width="150px" className="mx-auto" />
                          <h5 className="font-bold tracking-tight text-white mt-3">
                            The Great Gatsby
                            <span className="block text-sm font-normal">MRP : 295</span>
                          </h5>
                        </Card>
                      </div>
                      <div className="w-64">
                        <Card className="m-0">
                          <img src="/images/book1.jpg" alt="" width="150px" className="mx-auto" />
                          <h5 className="font-bold tracking-tight text-white mt-3">
                            The Great Gatsby
                            <span className="block text-sm font-normal">MRP : 295</span>
                          </h5>
                        </Card>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem title="Users" icon={MdDashboard}>
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

export default AdminBooks
