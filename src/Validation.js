
export default function Validation(values){
    let error={}
    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(values.email===""){
        error.email="Email Shouldn't Empty"
    }
    if(!email_pattern.test(values.email)){
        error.email =" Email Didn't match"
    }
    if( values.name===""){
        error.name="Name Shouldn't Empty"
    }
    if(values.password===""){
        error.password="Password Shouldn't Empty"
    }
    if(values.confirm_Password ===""){
        error.confirm_Password="Password Shouldn't Empty"
    }

    if(String(values.password) !== String(values.confirm_Password)){
        error.confirm_Password="Password Should Match With Confirm Password"
    }
    

    return error
}