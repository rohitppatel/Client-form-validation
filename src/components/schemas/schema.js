import * as Yup from "yup";

export const registerschema = Yup.object().shape({
    fullname: Yup.string().required().matches(/^[a-zA-Z]*$/,"full name should not consist numbers or special characters"),
    DOB: Yup.date().required("user's age must be between 18 years to 65 years ")
})

export const step2schema = Yup.object().shape({
    email: Yup.string().required().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"please enter valid email"),
    password: Yup.string().required().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#\[\]()@$&*!?|,.^/\\+_-])[A-Za-z\d#\[\]()@$&*!?|,.^/\\+_-]{8,15}$/,"please enter strong password")
})