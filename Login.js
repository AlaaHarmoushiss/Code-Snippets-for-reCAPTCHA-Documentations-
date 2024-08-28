import React, { useState } from 'react';
     import ReCAPTCHA from 'react-google-recaptcha';

     const Login = () => {
       const [recaptchaToken, setRecaptchaToken] = useState('');

       const handleLogin = async (event) => {
         event.preventDefault();
         // Add logic to submit login form with recaptchaToken
       };

       const onRecaptchaChange = (token) => {
         setRecaptchaToken(token);
       };

       return (
         <form onSubmit={handleLogin}>
           {/* Your login form fields */}
           <ReCAPTCHA
             sitekey="YOUR_RECAPTCHA_SITE_KEY"
             onChange={onRecaptchaChange}
           />
           <button type="submit">Login</button>
         </form>
       );
     };

     export default Login;
