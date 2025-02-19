 import React, { useEffect, useRef, useState } from "react";

 

const DonationPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Header */}
      <header className="bg-orange-700 text-white py-4 text-center"
 >
        <h1 className="text-3xl font-semibold">Donate to Shri Aadhi Varahi Amman Arutpani Trust</h1>
        <p className="mt-2 text-lg">Your contributions make a difference. Support our temple and community.</p>
      </header>

      {/* Donation Information */}
      <section className="max-w-4xl mx-auto p-6 my-12 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Account Details for Donation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-lg text-gray-600">
            <p className="font-semibold">Account Name:</p>
            <p>SHRI AADHI VARAHI AMMAN ARUTPANI TRUST</p>
          </div>
          <div className="text-lg text-gray-600">
            <p className="font-semibold">Account Number:</p>
            <p>41354107990</p>
          </div>
          <div className="text-lg text-gray-600">
            <p className="font-semibold">Account Type:</p>
            <p>CURRENT</p>
          </div>
          <div className="text-lg text-gray-600">
            <p className="font-semibold">Bank Name:</p>
            <p>STATE BANK OF INDIA</p>
          </div>
          <div className="text-lg text-gray-600">
            <p className="font-semibold">Branch:</p>
            <p>SOMARASAMPETTAI BRANCH</p>
          </div>
          <div className="text-lg text-gray-600">
            <p className="font-semibold">IFS Code:</p>
            <p>SBIN0061661</p>
          </div>
        </div>

        {/* Bank Transfer Card */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md text-center">
          <p className="text-xl text-gray-800 font-semibold">Bank Transfer or NEFT/RTGS</p>
          <p className="mt-2 text-lg text-gray-600">For monetary donations, you can transfer the amount to the above account details via bank transfer, NEFT, or RTGS.</p>
          <p className="mt-6 text-lg font-semibold">Thank you for your generosity!</p>
        </div>
      </section>    
    </div>
  );
};

export default DonationPage;
