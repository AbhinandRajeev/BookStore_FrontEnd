import React, { useState } from 'react';
import { FiMapPin, FiX } from 'react-icons/fi';
import Header from '../components/Header';
import BookStoreFooter from '../../components/BookStoreFooter';

function Careers() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    qualification: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null
  });

  const openModal = () => setShowModal(true);

  const closeModal = () => {
    setShowModal(false);
    setForm({ name: "", qualification: "", email: "", phone: "", coverLetter: "", resume: null });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleReset = () => setForm({ name: "", qualification: "", email: "", phone: "", coverLetter: "", resume: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
    closeModal();
  };

  return (
    <>
      <Header/>
      <div className="bg-gray-50 min-h-screen py-10 px-8">
        <h1 className="text-center text-4xl font-serif mb-3 text-gray-700">Careers</h1>
        <p className="text-center max-w-6xl mx-auto mb-10 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore placeat nemo voluptatem iure, iste asperiores quia amet sint, similique corrupti praesentium delectus nesciunt odit laudantium. Beatae repudiandae amet odit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, doloremque ullam itaque atque totam quasi molestias cumque ducimus fuga voluptate suscipit vel distinctio omnis voluptates obcaecati quidem quas iure? Facere?
        </p>

        <h2 className="text-2xl font-serif mb-8">Current openings</h2>
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Job 1 */}
          <div className="bg-white border rounded shadow-sm p-5 flex justify-between items-center">
            <div>
              <div className="font-serif text-lg font-medium mb-2 text-gray-700">Hr Assistant</div>
              <div className="flex items-center mb-2 text-blue-800 text-sm">
                <FiMapPin className="mr-1" /> Kochi
              </div>
              <div className="text-gray-700 text-sm mb-1">Job Type : full-time</div>
              <div className="text-gray-700 text-sm mb-1">Salary : 20000-30000/month</div>
              <div className="text-gray-700 text-sm mb-1">Qualification : -</div>
              <div className="text-gray-700 text-sm mb-1">Experience : 1-2yr</div>
              <div className="text-gray-700 text-sm">Description : -</div>
            </div>
            <button
              onClick={openModal}
              className="px-8 py-2 bg-[#4d5ac7] text-white rounded hover:bg-[#2a336e] font-serif flex items-center"
            >
              Apply
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
          
          {/* Job 2 */}
          <div className="bg-white border rounded shadow-sm p-5 flex justify-between items-center">
            <div>
              <div className="font-serif text-lg font-medium mb-2 text-gray-700">Frontend Developer</div>
              <div className="flex items-center mb-2 text-blue-800 text-sm">
                <FiMapPin className="mr-1" /> Kochi
              </div>
              <div className="text-gray-700 text-sm mb-1">Job Type : full-time</div>
              <div className="text-gray-700 text-sm mb-1">Salary : 30000-40000/month</div>
              <div className="text-gray-700 text-sm mb-1">Qualification : -</div>
              <div className="text-gray-700 text-sm mb-1">Experience : 2-3yr</div>
              <div className="text-gray-700 text-sm">Description : -</div>
            </div>
            <button
              onClick={openModal}
              className="px-8 py-2 bg-[#4d5ac7] text-white rounded hover:bg-[#2a336e] font-serif flex items-center"
            >
              Apply
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>

        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-xl mx-auto overflow-hidden relative">
              {/* Modal Header */}
              <div className="bg-[#19213b] py-4 px-6 flex items-center justify-between">
                <h3 className="text-2xl font-serif text-white">Application form</h3>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-yellow-400 text-2xl"
                  aria-label="Close"
                >
                  <FiX />
                </button>
              </div>
              {/* Modal Body */}
              <form onSubmit={handleSubmit} className="px-6 py-8 space-y-4 bg-white">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="p-2 border rounded text-gray-700 bg-gray-50 focus:outline-blue-300"
                    required
                  />
                  <input
                    type="text"
                    name="qualification"
                    placeholder="Qualification"
                    value={form.qualification}
                    onChange={handleChange}
                    className="p-2 border rounded text-gray-700 bg-gray-50 focus:outline-blue-300"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    value={form.email}
                    onChange={handleChange}
                    className="p-2 border rounded text-gray-700 bg-gray-50 focus:outline-blue-300"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="p-2 border rounded text-gray-700 bg-gray-50 focus:outline-blue-300"
                    required
                  />
                </div>
                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter"
                  value={form.coverLetter}
                  onChange={handleChange}
                  className="p-2 border rounded text-gray-700 bg-gray-50 focus:outline-blue-300 w-full"
                  rows={3}
                  required
                />
                <div>
                  <label className="block mb-2 text-gray-600 font-serif">Resume</label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center border rounded-lg overflow-hidden bg-gray-50">
                      <label
                        htmlFor="resume"
                        className="bg-[#4d5ac7] text-white px-4 py-2 font-serif text-sm cursor-pointer hover:bg-[#2a336e] transition"
                      >
                        Choose File
                      </label>
                      <span className="px-3 py-2 text-gray-600 text-sm truncate">
                        {form.resume ? form.resume.name : "No file chosen"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-[#fd7e14] text-white font-serif px-5 py-2 rounded hover:bg-orange-500"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="bg-[#18bc5c] text-white font-serif px-5 py-2 rounded hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <BookStoreFooter/>
    </>
  );
}

export default Careers;
