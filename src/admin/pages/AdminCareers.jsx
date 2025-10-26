import React from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import { Button, Card } from "flowbite-react";

function AdminCareers() {
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
                Admin Careers
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminCareers
