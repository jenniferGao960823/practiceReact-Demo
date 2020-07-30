import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'

const Basic = ()=>{
  return <div>
    <h1> Anywhere in your app! </h1>
    <Formik
    initialValues={{ email:'',password:'' }}
    validate={values =>{
      const errors ={}
      if(!values.email){
        errors.email = 'Required';
      }else if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ){
        errors.email = 'Invalid email address';
      }
      if(!values.password){
        errors.password = 'Required'
      }else if(
        !/^\d{6}$/.test(values.password)
      ){
        errors.password = 'Invalid password style'
      }
      return errors
    }}
    onSubmit={(values,{setSubmitting})=>{
      setTimeout(()=>{
        console.log('formData',JSON.stringify(values,null,2)); //使用两个空格缩进
        setSubmitting(false)
      },400)
    }}
    >
      {
        ({isSubmitting})=>{
          return <Form>
            <label>
              电子邮箱(email):
              <Field 
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" />
            </label>
            <br />
            <br />
            <label>
              密码(password):
              <Field 
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </label>
            <br />
            <br />
            <input style={{marginLeft:'200px'}} type="submit" value="submit" disabled={isSubmitting} />
          </Form>
        }
      }
    </Formik>
  </div>
}

export default Basic