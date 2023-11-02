export const validator = (errors, values) => {
    if ((values.fullname && values.DOB && !errors.fullname   && !errors.DOB ) || (values.email && values.password && !errors.email && !errors.password)) {
      return false;
    }
    return true;
  };

export const returnProgress = (progress) => {
    switch (progress) {
      case 0: return "0%"
      case 1: return "50%"
      case 2: return "100%"
      default: return "0%"
    }
  }


  export const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
  
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
  
    return age;
  };

  export const handleDateChange = (date,setFieldValue) => {
    const age = calculateAge(date);
    if (age >= 18 && age <= 65) {
      setFieldValue("DOB",date)
    }else{
      setFieldValue("DOB","")
    }
  };


  export const regexChecker = (pattern,string) => {
     const regex = new RegExp(pattern)
     if(regex.test(string)) return "active"
  }