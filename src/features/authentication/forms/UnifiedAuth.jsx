import React, {useState} from 'react';
import OtpRequestForm from './OtpRequestForm';

const UnifiedAuth = () => {
  const [otpData, setOtpData] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      {!otpData && (
        <OtpRequestForm
          // title={title && 'Verify your phone to login or signup'}
          onSuccess={data => {
            setOtpData(data);
          }}
        />
      )}
    </>
  );
};

export default UnifiedAuth;
