import React from 'react';
import Image from 'next/image';


const BVNDetails = ({ data }) => {
  const base64Image = data.bvn_data.base64Image
  return (
    <div>
      <h2>BVN Details</h2>
      <p>First Name: {data.bvn_data.firstName}</p>
      <p>Middle Name: {data.bvn_data.middleName}</p>
      <p>Last Name: {data.bvn_data.lastName}</p>
      <p>BVN: {data.bvn_data.bvn}</p>
      <p>E-mail: {data.bvn_data.email}</p>
      <p>Enrolment Bank: {data.bvn_data.enrollmentBank}</p>
      <p>Enrollment Branch: {data.bvn_data.enrollmentBranch}</p>
      <p>Gender: {data.bvn_data.gender}</p>
      <p>LGA: {data.bvn_data.lgaOfOrigin}</p>
      <p>Nationality: {data.bvn_data.nationality}</p>
      <p>phone Number: {data.bvn_data.phoneNumber1}</p>
      <p>Registration : {data.bvn_data.registrationDate}</p>
      <p>Name: {data.bvn_data.title}</p>
      <p>State: {data.bvn_data.stateOfOrigin}</p>
      <p>Status: {data.detail}</p>
      <p>Address: {data.bvn_data.residentialAddress}</p>
      <Image
        src={`data:image/gif;base64, ${base64Image}`}
        alt="Base64 Image"
        width={300}
        height={200}
      />
      <p>Date of Birth: {data.bvn_data.dateOfBirth}</p>
      {/* Render other relevant BVN details */}
    </div>
  );
};

export default BVNDetails;
