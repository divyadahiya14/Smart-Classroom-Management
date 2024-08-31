import React from 'react';
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import FilterBar from '../Components/FilterBar';

const ProfessorResults = () => {
    return (
        <div className="flex w-screen h-screen">
            {/* Sidebar */}
            <ProfessorSidebar />
            
            {/* Main Content Area */}
            <div className="w-[85%] bg-gradient-to-b from-purple-100 via-orange-50 to-transparent">
                {/* Topbar */}
                <Topbar />
                
                {/* Content Area */}
                <div className="flex flex-col p-6 space-y-6">
                    {/* Filter Bar with Upload Photo */}
                    <FilterBar />
                    
                    {/* Professor Results or other content */}
                    
                </div>
            </div>
        </div>
    );
};

export default ProfessorResults;
