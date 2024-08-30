import React from 'react';
import Header from './Header';
import Header2 from './header2';
import ProfileCard from './ProfileCard';

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-orange-50 to-transparent min-h-screen p-8">
       <div className='-z-10'><Header /> </div>
      <div className='-mt-8 z-10 relative'><Header2/> </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <ProfileCard title="Personal Information">
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-semibold">Gender:</span>
              <span className="text-base text-gray-900 font-semibold">Male</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-semibold">Age:</span>
              <span className="text-base text-gray-900 font-semibold">15</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-sm text-gray-500 font-semibold">Blood Group:</span>
              <span className="text-base text-gray-900 font-semibold">B+ve</span>
            </div>
          </div>
          <div className="mb-2 flex flex-col">
            <span className="text-sm text-gray-500 font-semibold">Contact Number:</span>
            <span className="text-base text-gray-900 font-semibold">+91 9868267234</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-semibold">Address:</span>
            <span className="text-base text-gray-900 font-semibold">Plot No.81, New Colony, Lane-17, VaniVihar, Bhubaneswar</span>
          </div>
        </ProfileCard>

        <ProfileCard title="Parents Information">
          <div className="flex flex-col mb-2">
            <span className="text-sm text-gray-500 font-semibold">Father/Mother Name:</span>
            <span className="text-base text-gray-900 font-semibold">Mr. Ashok Kumar Jackson</span>
          </div>
          <div className="flex flex-col mb-2">
            <span className="text-sm text-gray-500 font-semibold">Contact Number:</span>
            <span className="text-base text-gray-900 font-semibold">+91 9868267234</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-semibold">Occupation:</span>
            <span className="text-base text-gray-900 font-semibold">CEO at Fintech Software Private Limited, BBSR</span>
          </div>
        </ProfileCard>

        <ProfileCard title="Academic Information">
          <div className="flex flex-col mb-2">
            <span className="text-sm text-gray-500 font-semibold">Previous Term Grades:</span>
            <span className="text-base text-gray-900 font-semibold">69% | B+ (Good)</span>
          </div>
          <div className="flex flex-col mb-2">
            <span className="text-sm text-gray-500 font-semibold">Best Perform Subject:</span>
            <span className="text-base text-gray-900 font-semibold">Mathematics</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-semibold">Weakest Subject:</span>
            <span className="text-base text-gray-900 font-semibold">Physics</span>
          </div>
        </ProfileCard>

        <ProfileCard title="Emergency Contact">
          <div className="flex flex-col mb-2">
            <span className="text-sm text-gray-500 font-semibold">Father/Mother/Guardian Name:</span>
            <span className="text-base text-gray-900 font-semibold">Mr. Ashok Kumar Jackson</span>
          </div>
          <div className="flex flex-col mb-2">
            <span className="text-sm text-gray-500 font-semibold">Contact Number:</span>
            <span className="text-base text-gray-900 font-semibold">+91 9868267234, +91 9868267234</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500  font-semibold">Address:</span>
            <span className="text-base text-gray-900 font-semibold">Plot No.81, New Colony, Lane-17, VaniVihar, Bhubaneswar</span>
          </div>
        </ProfileCard>
      </div>
    </div>
  );
}

export default MainLayout;