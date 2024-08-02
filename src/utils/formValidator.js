

  export const validateForm=(email,password)=>{
    console.log('comein ');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!emailRegex) return "Email is not valid";
    if(!passwordRegex) return "Password is not valid";

    
    return null;


    

}

