import React, { useState } from 'react'
import { Formik } from 'formik';
import { registerschema, step2schema } from '../schemas/schema';
import { handleDateChange, regexChecker, returnProgress, validator } from '../../utils';
import { Alert, Snackbar } from '@mui/material';

const RegistrationForm = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  return (
    <>
      <div className="container Register">
        <div className="row">
          <h2 className="Register-title d-block mx-auto text-center"><strong>- Register Here -</strong></h2>
          <p className="Register-detail">Join us to celebrate our biggest night of the year.</p>
        </div>
        <div className="row w-lg-75 w-100  mx-lg-auto mx-100 Register-contact">
          <div className="col-md-4 col-12 p-0">
            <div className="Register-card first">
              <i className="fa-regular fa-calendar"></i>
              <p>12 NOVEMBER 2022</p>
            </div>
          </div>
          <div className="col-md-3  col-12 p-0">

            <div className="Register-card">
              <i className="fa-regular fa-clock"></i>
              <p>16:00 - 23:00</p>
            </div>
          </div>
          <div className="col-md-5 col-12 p-0">
            <div className="Register-card last">
              <i className="fa-solid fa-location-dot"></i>
              <p>Centara Grand & Bangkok<br /> Convention Centre, Bangkok</p>
            </div>
          </div>
        </div>
        <div className="row stepper-wrap">
          <div className="col-md-6 col-12">
            <div className="d-flex stepper active">
              <span className="count">1</span>
              <p className="m-0">Step 1</p>
            </div>
            <div className="progress-bar d-block">
              <div className="progress" style={{ width: returnProgress(progress1) }}></div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="d-flex stepper">
              <span className="count">2</span>
              <p className="m-0">Step 2</p>
            </div>
            <div className="progress-bar d-block">
              <div className="progress" style={{ width: returnProgress(progress2) }}></div>
            </div>
          </div>
        </div>
        <MemoizedStep
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setProgress1={setProgress1}
          setProgress2={setProgress2}
        />
        <p className="donthaveanaccount">Don’t have an account? <a href="#" className="text-red">Create one here</a> and register
          for the event</p>
        <p className="terms">Terms and Conditions apply*. To read the full T&Cs, click <a href="#" className="text-red">here.</a>
        </p>
      </div>
    </>
  )
}

const Steps = ({ currentStep, setCurrentStep, setProgress1, setProgress2 }) => {

  if (currentStep === 1) return <Step1 setProgress1={setProgress1} setCurrentStep={setCurrentStep} />

  return <Step2 setProgress2={setProgress2} />
}

const Step1 = ({ setCurrentStep, setProgress1 }) => {
  return (
    <div>
      <Formik
        initialValues={{
          fullname: '',
          DOB: ""
        }}
        validationSchema={registerschema}
        onSubmit={values => {
          setCurrentStep(2)
          setProgress1(2)
        }}
      >
        {({ errors, values, handleSubmit, touched,handleChange, setFieldValue, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <div className="row Register-form">
              <div className="col-lg-6 col-12">
                <div className="input-group input-group-sm mb-3">
                  <label>Full Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" name='fullname' value={values.fullname} onChange={handleChange} aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onBlur={handleBlur}
                  />
                </div>
               {errors.fullname && touched.fullname && <h6 style={{color: "red"}}>{errors.fullname}</h6>}
              </div>
              <div className="col-lg-6 col-12">
                <div className="input-group input-group-sm mb-3">
                  <label>Date of Birth:(user's age must be 18 years to 65 years )</label>
                  <input type="date" value={values.DOB} name='DOB' onChange={(e) => handleDateChange(e.target.value, setFieldValue)} max={new Date()} className="form-control" placeholder="dd/mm/yy" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onBlur={handleBlur}
                  />
                </div>
                {errors.DOB && touched.DOB && <h6 style={{color: "red"}}>{errors.DOB}</h6>}
              </div>
            </div>
            <button type='submit' style={{ background: !validator(errors, values) ? "#00b844e8" : "#CCC" }} disabled={validator(errors, values)} className="Register-btn mx-auto d-block">
              Continue
            </button>
            {validator(errors, values) ? setProgress1(0) : setProgress1(1)}
          </form>
        )}
      </Formik>
    </div>
  )
}

const Step2 = ({ setProgress2 }) => {

 const [open,setOpen] = useState(false);
 const [flag,setFlag] = useState(0);

  return <> <Formik
    initialValues={{
      email: "",
      password: ""
    }}
    validationSchema={step2schema}
    onSubmit={values => {
      setOpen(true)
      setProgress2(2)
      setFlag(1)
      setTimeout(() => {window.location.reload()},2000)
    }}
  >
    {({ errors, values, handleBlur,touched,handleSubmit, handleChange }) => (
      <form onSubmit={handleSubmit}>
        <div className="row Register-form">
          <div className="col-lg-6 col-12">
            <div className="input-group input-group-sm mb-3">
              <label>Email:</label>
              <input type="email" className="form-control" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} placeholder="email@email.com" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm" />
            </div>
            {errors.email && touched.email && <h6 style={{color: "red"}}>{errors.email}</h6>}
          </div>
          <div className="col-lg-6 col-12">
            <div className="input-group input-group-sm mb-3">
              <label>Password</label>
              <input type="text" className="form-control" onBlur={handleBlur} name='password' onChange={handleChange} value={values.password} placeholder="" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm" />
            </div>
          {errors.password && touched.password && <h6 style={{color: "red"}}>{errors.password}</h6>}
            <p className={`valided d-flex gap-2 align-items-center ${regexChecker("^[A-Za-z0-9!@#$%^&*(),.?\":{}|<>]{8,15}$", values.password)}`}><span></span>8 - 15 characters
            </p>
            <p className={`valided d-flex gap-2 align-items-center ${regexChecker(".*\d.*.", values.password)}`}><span></span>1 or more numbers
            </p>
            <p className={`valided d-flex gap-2 align-items-center ${regexChecker("[a-z]", values.password)}`}><span></span>1 or more lower case letters
            </p>
            <p className={`valided d-flex gap-2 align-items-center ${regexChecker("[A-Z]", values.password)}`}><span></span>1 or more upper case letters
            </p>
            <p className={`valided d-flex gap-2 align-items-center ${regexChecker("[^a-zA-Z0-9]", values.password)}`}><span></span>1 or more special characters
              (#[]()@$&*!?|,.^/\+_-)
            </p>
          </div>
        </div>
        <button type='submit' style={{ background: !validator(errors, values) ? "#00b844e8" : "#CCC" }} disabled={validator(errors, values)} className="Register-btn mx-auto d-block">
          Continue
        </button>
        {validator(errors, values) ? setProgress2(0) : !flag && setProgress2(1)}
      </form>
    )}
  </Formik>
    <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
      <Alert onClose={() =>  setOpen(false)} severity="success" sx={{ width: '100%' }}>
        Registered Successfully!
      </Alert>
    </Snackbar>
  </>
}



const MemoizedStep = React.memo(Steps)
export default RegistrationForm