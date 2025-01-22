import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    }
   
    const handleSubmit = async(e) => {
        e.preventDefault() ;
        try{
          const response = await axios.post('http://localhost:3000/auth/login', {
            email: formData.email,
            password: formData.password
          });
          if(response.status === 200){
            window.location.href = 'http://localhost:5173/dashboard';
          }
        }catch(error){
          console.error('Error submitting form:', error);
          if(error.response.status === 401){
            alert('Invalid credentials');
          }
        }
    }
    const handleGoogleLogin = () => {
      window.open('http://localhost:3000/auth/google', '_self');
    }
  return (

    <div className="flex flex-col justify-center items-center h-screen w-full">
        
      <div className="mb-10" >
        <h1 className="text-6xl font-bold text-white-500" >Log In.</h1>
      </div>
      <div className="flex justify-center items-center gap-4 w-1/3 ">
            <button className=" text-white p-2 rounded-md w-2/3 h-20 border border-gray-300" type="submit" onClick={handleGoogleLogin}><span className="text-2xl font-bold" >Sign in with Google</span></button>
    </div>
    <div className="flex justify-center items-center gap-4 w-1/3 mt-10" >
        <h1 className="text-2xl font-bold text-white-500" >Or</h1>
    </div>
      <form className="flex flex-col items-center gap-4 w-1/3  mt-10" onSubmit={handleSubmit} >
       
        <input className="text-2xl p-2 border border-gray-300 rounded-md w-2/3 h-20 " type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
        <input className="text-2xl p-2 border border-gray-300 rounded-md w-2/3 h-20 " type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
        <div className="flex justify-center items-center gap-4 w-full mt-10" >
            <button className="text-2xl bg-green-500 text-white p-2 rounded-md w-2/3 h-20" type="submit" >Login</button>
        </div>
        
      </form>
      <div className="flex justify-center items-center gap-4 w-full mt-10" >
        <h1 className="text-2xl font-bold text-gray-200">Don&apos;t have an account?</h1>
        <Link className="text-2xl font-bold underline text-white-500" to="/signup" >Create Account</Link>
      </div>
      <div className="flex justify-center items-center gap-4 w-full mt-5" >
        <h1 className="text-2xl font-bold text-gray-200">Forgot Password?</h1>
      </div>
    </div>
  )
}

export default Login;
