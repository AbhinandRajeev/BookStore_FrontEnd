import { Button } from 'flowbite-react'
import React from 'react'
import Header from '../components/Header'
import { Label, Radio } from "flowbite-react";
import BookStoreFooter from '../../components/BookStoreFooter'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

function AllBooks() {
  return (
    <div>
      <Header />
      <h1 className='text-center mt-20 mb-5 text-4xl'>Collections</h1>
      <section className='flex justify-center items-center'>

        <input type="text" placeholder='search' /> <Button>Search</Button>
      </section>

      <section className='p-20'>
        <div className='flex'>
          <div className='w-64 flex-none'>
            <h1>Filters</h1>
            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Literary Fiction</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Philosophy</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Thriller</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Romance</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Horror</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Auto/Biography</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Self-Help</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">Politics</label>
            </div>

            <div className='my-3'>
              <input type="radio" name='' id='' />
              <label htmlFor="">No Filter</label>
            </div>

          </div>
          <div className='flex-1'>
            <div className='flex flex-wrap justify-evenly items-center '>

              <Link to={'/viewbooks/1'}>
              <Card href="#" className="max-w-sm shadow-2xl m-5 ">
                <img src="/images/bookcard.png" alt="" width={'200px'}/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
            </Link>
            <Card href="#" className="max-w-sm  shadow-2xl m-5">
                <img src="/images/bookcard.png" alt="" width={'200px'}/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>

            <Card href="#" className="max-w-sm  shadow-2xl m-5">
                <img src="/images/bookcard.png" alt="" width={'200px'}/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
            </div>
          </div>


        </div>
      </section>
      <BookStoreFooter />
    </div>
  )
}

export default AllBooks
