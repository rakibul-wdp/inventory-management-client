import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-sidebar' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <Outlet />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-56 bg-primary text-base-content font-bold'>
          <li className='text-xl text-secondary'>Products</li>
          <li>
            <Link to='/dashboard/productCreate'>Create</Link>
          </li>
          <li>
            <Link to='/dashboard/productUpdate'>Update</Link>
          </li>

          <li>
            <Link to='/dashboard/productDelete'>Delete</Link>
          </li>
          <li>
            <Link to='/dashboard/productList'>List</Link>
          </li>
          <li className='text-xl text-secondary'>Category</li>
          <li>
            <Link to='/dashboard/categoryCreate'>Create</Link>
          </li>
          <li>
            <Link to='/dashboard/categoryDelete'>Delete</Link>
          </li>
          <li>
            <Link to='/dashboard/categoryUpdate'>Update</Link>
          </li>
          <li>
            <Link to='/dashboard/categoryNewItem'>New Item</Link>
          </li>
          <li>
            <Link to='/dashboard/categoryList'>List</Link>
          </li>
          <li className='text-xl text-secondary'>Profile</li>
          <li>
            <Link to='/dashboard'>My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
