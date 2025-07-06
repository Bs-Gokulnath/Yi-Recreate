import React from 'react';
import Navbar from '../../components/Navbar';
import MembershipPage from './Membership';

const StakeholdersPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div id="membership-section">
        <MembershipPage />
      </div>
    </div>
  );
};

export default StakeholdersPage; 