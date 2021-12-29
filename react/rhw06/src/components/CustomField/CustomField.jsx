import { TextField } from "@mui/material";
import { useField } from "formik";
import styles from "./CustomField.module.scss";


function CustomField (props) {
  const [field, meta, helpers] = useField(props);
  const {label, type, customOnChange} = props;

  const isError = meta.touched && meta.error;

  return (
    <TextField className={styles.CustomField} 
      {...field}
      label={label}
      type={type}
      color={isError ? 'error' : 'primary'}
    />
  )
}

export default CustomField;