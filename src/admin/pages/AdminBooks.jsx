import React from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import { Button, Card } from "flowbite-react";

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

            <div className='w-2/3 '>
              <div>
                Admin Books
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminBooks
