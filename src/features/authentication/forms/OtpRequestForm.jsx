import axios from 'axios';
import {Formik} from 'formik';
import React from 'react';
import {Button, TextInput} from 'react-native-paper';

const OtpRequestForm = ({reason, onSuccess}) => {
  const initialValues = {
    phone: '',
    reason: reason,
  };

  const onSubmithandler = async values => {
    axios({
      method: 'post',
      url: `https://testing.rytt.com/api/otp/send/`,
    }).then(response => {
      console.log(response.data);
    });

    try {
      const response = await axios.post(
        'https://testing.rytt.com/api/otp/send/',
        {
          ...values,
        },
      );
      console.log(response.data);
      // const res = await ZenApi.Otp.send(values.phone, reason);
      // onSuccess && typeof onSuccess === 'function' && onSuccess(res.data);
      // toast.success(`Otp Sent Successfully`);
    } catch (e) {
      // console.error(e);
      // setErrors(e.response.data);
      // toast.error(`Otp Not Sent!`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmithandler}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <>
          <TextInput
            name="phone"
            mode="outlined"
            placeholder="Phone Number"
            // style={styles.textInput}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
          />
          <Button
            style={{marginTop: 16}}
            onPress={handleSubmit}
            icon="whatsapp"
            mode="contained">
            SEND OTP TO WHATSAPP
          </Button>
        </>
      )}
    </Formik>
  );
};

export default OtpRequestForm;
