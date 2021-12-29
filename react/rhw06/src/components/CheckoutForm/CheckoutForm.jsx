import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import { clearCart } from "../../store/actionCreators";
import CustomField from "../CustomField";
import styles from "./CheckoutForm.module.scss";

function CheckoutForm () {

  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    mobile: '',
  }

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName:  yup.string().required('required'),
    age:  yup.number().required('required'),
    address: yup.string().required('required'),
    mobile: yup.string().required('required'),
  })

  const submitHandler = (value, actions) => {
    console.log(value);
    actions.resetForm();
    dispatch(clearCart());
  }



  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <Form className={styles.CheckoutForm}>
        <CustomField
          name='firstName'
          label='First name'
          type='text' />
        <CustomField 
          name="lastName"
          label='Last name'
          type='text' />
        <CustomField 
          name="age"
          label='Client age'
          type='text' />
        <CustomField 
          name="address"
          label='Address'
          type='text' />
        <CustomField 
          name="mobile"
          label='Mobile'
          type='text' />

        <Button type="submit" variant="contained">Submit</Button>
      </Form>
    </Formik>
  )
}

export default CheckoutForm;