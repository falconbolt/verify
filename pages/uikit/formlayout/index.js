import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import BVNDetails from './BVNDetails';

const BVNSearch = () => {
  const [bvn, setBVN] = useState('');
  const [bvnDetails, setBVNDetails] = useState('');

    
  const handleSubmit = async () => {
    try {
      const response = await fetch('https://api.myidentitypay.com/api/v2/biometrics/merchant/data/verification/bvn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'McRi7e7m.ez7ASQyXChlcsJ0ityIGxu6AVcsUcFeC',
          'app-id': 'aea52b4f-2f63-4bae-b39b-35a104484bd2',
        },
        body: JSON.stringify({
          number: bvn,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setBVNDetails(data); // Set the BVN details in state
      } else {
        console.log('BVN details retrieval failed');
      }
    } catch (error) {
      console.error('Error occurred while retrieving BVN details:', error);
    }

  };


  return (
    <>
      <div className="flex justify-content-center flex-wrap card-container yellow-container">
        <div className="card">
          <h5>BVN Search</h5>
          <div className="formgroup-inline">
            <div className="field">
              <label htmlFor="bvn" className="p-sr-only">
                Enter BVN here!
              </label>
              <InputText
                id="bvn"
                type="text"
                placeholder="Enter BVN here!"
                value={bvn}
                onChange={(e) => setBVN(e.target.value)}
              />
            </div>
            <Button label="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>

      <div>
        {bvnDetails ? <BVNDetails data={bvnDetails} /> : <p>Loading BVN details...</p>}
      </div>
    </>
  );
};

export default BVNSearch;
