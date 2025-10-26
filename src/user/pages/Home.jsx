import React from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'
import BookStoreFooter from '../../components/BookStoreFooter'

function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[670px] bg-[url('/images/home_bg1.jpg')] bg-no-repeat bg-cover bg-center bg-fixed flex justify-center items-center">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        {/* Glassmorphic Content */}
        <div className="relative z-10 flex justify-center items-center w-full">
          <div className=" border border-white/10 rounded-2xl p-10 max-w-md mx-auto text-center space-y-6 shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300">

            <h2 className="text-white text-4xl font-extrabold tracking-tight drop-shadow-md">
              Dive In TO The World Of Books
            </h2>

            <div className="relative w-full">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search books..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800/60 text-gray-100 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/70 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white flex flex-col justify-center">

        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h3 className="uppercase text-gray-700 text-sm">New Arrivals</h3>
            <h2 className="text-3xl font-semibold font-serif mt-2 mb-1">Explore Our Latest Collection</h2>
          </div>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Example card (Repeat or map this for each book) */}
            <div className="flex flex-col items-center bg-white border border-gray-200 shadow rounded-lg p-5">
              <img src="/images/book1.jpg" alt="Book cover" className="w-48 h-56 object-contain rounded" />

              <a href="#" className="mt-4 text-blue-700 font-semibold hover:underline"> The Great Gatsby</a>
              <div className="text-gray-700 mt-2">F. Scott Fitzgerald</div>
              <div className="text-gray-900 font-bold mt-2">$19</div>
            </div>


            <div className="flex flex-col items-center bg-white border border-gray-200 shadow rounded-lg p-5">
              <img src="/images/book2.jpg" alt="Book cover" className="w-48 h-56 object-contain rounded" />
              <a href="#" className="mt-4 text-blue-700 font-semibold hover:underline">Psycho</a>
              <div className="text-gray-700 mt-2">Robert Bloch</div>
              <div className="text-gray-900 font-bold mt-2">$19</div>
            </div>

            <div className="flex flex-col items-center bg-white border border-gray-200 shadow rounded-lg p-5">
              <img src="/images/book3.jpg" alt="Book cover" className="w-48 h-56 object-contain rounded" />
              <a href="#" className="mt-4 text-blue-700 font-semibold hover:underline">To Kill a Mockingbird</a>
              <div className="text-gray-700 mt-2">Harper Lee</div>
              <div className="text-gray-900 font-bold mt-2">$19</div>
            </div>

            <div className="flex flex-col items-center bg-white border border-gray-200 shadow rounded-lg p-5">
              <img src="/images/book4.jpg" alt="Book cover" className="w-48 h-56 object-contain rounded" />
              <a href="#" className="mt-4 text-blue-700 font-semibold hover:underline">The Godfather</a>
              <div className="text-gray-700 mt-2">Mario Puzo</div>
              <div className="text-gray-900 font-bold mt-2">$19</div>
            </div>


          </div>


          {/* Explore More Button */}
          <div className="flex justify-center mt-10">
            <button className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-2 rounded font-semibold transition">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Author Section */}
      <section className="max-w-7xl mx-auto py-10 flex flex-col lg:flex-row items-start justify-between lg:space-x-8">
        {/* Text */}
        <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <div className="text-center lg:text-left">
            <h4 className="uppercase text-gray-700 tracking-widest text-sm font-serif mb-2">Featured Authors</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6">Captivates with every word</h2>
          </div>
          <p className="text-gray-800 font-serif mb-4 text-base leading-relaxed text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
          </p>
          <p className="text-gray-800 font-serif text-base leading-relaxed text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt earum possimus accusantium necessitatibus id neque soluta quibusdam explicabo laborum? Deserunt vel quia voluptates dicta incidunt illo fuga pariatur sequi error.
          </p>
        </div>
        {/* Image */}
        <div className="w-full lg:w-[520px] flex justify-center items-start mt-10 lg:mt-0">
          <img
            src="/images/author.webp"
            alt="Author portrait"
            className="object-cover w-[400px] h-[400px] rounded"
          />
        </div>
      </section>



      <BookStoreFooter />
    </div>
  )
}

export default Home
