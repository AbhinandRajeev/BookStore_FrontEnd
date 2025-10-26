import React from 'react';
import { Button } from 'flowbite-react';
import { TabItem, Tabs } from 'flowbite-react';
import { HiAdjustments, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { FiUpload } from 'react-icons/fi';
import EditProfile from '../components/EditProfile';
import Header from '../components/Header';
import { Card } from "flowbite-react";

function Profile() {
  return (
    <>
      <Header />
      <div className="bg-neutral-50">
        {/* White background top */}
        <div className="bg-white pb-0 pt-12">
          <div className="-mb-24 flex justify-start pl-24">
            {/* Profile Image + Circle Border */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="rounded-full bg-white shadow-lg p-2 ring-8 ring-white">
                <img
                  src="/images/profilepic.jpg"
                  alt="Profile"
                  className="rounded-full w-40 h-40 object-cover"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dark section */}
        <div className="bg-black">
          <div className="flex flex-row items-center pl-26">
            <div className="flex items-center">
              <h1 className="text-white font-extrabold text-3xl mr-2 drop-shadow-lg">
                John Doe
              </h1>
              <img
                src="/images/bluetick.png"
                alt="Verified"
                className="ml-2"
                width={32}
                height={32}
              />
            </div>
            <div className="ml-8">
              <EditProfile />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <section className="p-5 px-8 ">
        <div className="overflow-x-auto bg-gray-200 p-5 rounded shadow ">
          <Tabs aria-label="Full width tabs" variant="fullWidth">
            <TabItem active title="Sell Book" icon={HiUserCircle}>
              <div className="bg-gray-100 py-10 px-8 rounded-lg">
                <h2 className="text-center text-3xl font-serif font-semibold mb-8">
                  Book Details
                </h2>
                <form className="max-w-6xl mx-auto">
                  <div className="flex gap-8">
                    {/* Left Side - Form Fields */}
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          placeholder="Title"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="text"
                          placeholder="Publisher"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="text"
                          placeholder="Author"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="text"
                          placeholder="Language"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="number"
                          placeholder="No of Pages"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="text"
                          placeholder="ISBN"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="text"
                          placeholder="Image url"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="text"
                          placeholder="Category"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="number"
                          placeholder="Price"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                        <input
                          type="number"
                          placeholder="discount price"
                          className="p-3 border rounded bg-white focus:outline-blue-300"
                        />
                      </div>

                      {/* Abstract - Full Width Below Grid */}
                      <textarea
                        placeholder="Abstract"
                        className="w-full p-3 border rounded bg-white focus:outline-blue-300 mt-6"
                        rows={5}
                      />
                    </div>

                    {/* Right Side - Upload Image Area */}
                    <div className="flex flex-col justify-start items-center w-80">
                      <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center w-full h-80">

                        <label
                          htmlFor="fileUpload"
                          className="cursor-pointer text-blue-600 hover:underline"
                        >
                          <input
                            type="file"
                            className="hidden"
                            id="fileUpload"
                          />
                          <div className="bg-blue-500 rounded-full p-8 mb-4">
                            <FiUpload className="text-white text-6xl" />
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-4 mt-8">
                    <button
                      type="button"
                      className="bg-orange-500 text-white px-8 py-2 rounded font-semibold hover:bg-orange-600"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-8 py-2 rounded font-semibold hover:bg-green-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

            </TabItem>
            <TabItem title="Book Status" icon={MdDashboard}>
              <Card className="w-full">
                <div className="flex justify-evenly">
                  {/* Text Content */}
                  <div className="">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </div>
                  {/* Image */}
                  <div className="">
                    <img
                      src="/images/bookcard.png"
                      alt="Book cover"
                      width={'200px'}
                    />
                  </div>
                </div>
              </Card>
            </TabItem>

            <TabItem title="Purchase History" icon={HiAdjustments}>
              <Card className="w-full">
                <div className="flex justify-evenly">
                  {/* Text Content */}
                  <div className="">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                  </div>
                  {/* Image */}
                  <div className="">
                    <img
                      src="/images/bookcard.png"
                      alt="Book cover"
                      width={'200px'}
                    />
                  </div>
                </div>
              </Card>
            </TabItem>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export default Profile;
