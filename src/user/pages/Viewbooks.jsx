import React from 'react'
import Header from '../components/Header'
import BookStoreFooter from '../../components/BookStoreFooter'
import { Button } from 'flowbite-react'

function Viewbooks() {
  return (
    <div>
      <Header />
      <div className='flex justify-evenly flex-wrap p-20'>
        <div className='w-1/3 '>
          <img src="/images/bookcard.png" alt="" style={{ width: '400px' }} />
        </div>
        <div className='w-2/3 flex flex-wrap'>
          <h1>Title:</h1>
          <h3>Author:</h3>
          <h4>Price:</h4>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam voluptatem consequatur id, sint repudiandae corporis veniam eius! Doloremque amet vero tempore nam pariatur? Excepturi dolore necessitatibus voluptas nesciunt voluptatibus!</p>
          <div className='flex'>
            <Button color='blue'>Back</Button>
            <Button color='blue'>Buy</Button>
          </div>
        </div>
        <div className='flex-1'></div>
      </div>
      <BookStoreFooter />
    </div>
  )
}

export default Viewbooks
