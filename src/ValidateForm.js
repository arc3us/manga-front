function ValidateForm(props) {

    const errors  ={};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    if (!regex.test(props.email))
        errors.email ="Please enter a valid email"
    if (props.pass != pass)
        errors.cpass = "Confirm password is not same as password"
    
    return errors;
}
