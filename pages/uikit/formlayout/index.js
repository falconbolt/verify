import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';


        const BVNSearch = () => {

        const [dropdownItem, setDropdownItem] = useState(null);
        const dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
            ];

        const [bvn, setBVN] = useState('');
      
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
                console.log('BVN details:', data);
                // Process the BVN details here
              } else {
                console.log('BVN details retrieval failed');
              }
            } catch (error) {
              console.error('Error occurred while retrieving BVN details:', error);
            }
          };
          
      
        return (
          <><div className="flex justify-content-center flex-wrap card-container yellow-container">
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


            <div className="grid">
                <div className="card">
                <div className="grid">
                <div class="col">Auto</div>
                <h5>BVN Search</h5>
                </div>
                

              </div>
            </div>
          </>
        );
      };
      


      
      export default BVNSearch;





      
      
            
