import { useState } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/Hero'
import WhyCelebEX from '../components/whycelebx'
import HowItWorks from '../components/howItWorks'
import Footer from '../components/footer'
import axios from 'axios'
import { useEffect } from 'react'
import '../App.css'

function Home() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/profile', { withCredentials: true })
      .then((response) => setUser(response.data.user))
      .catch(() => setUser(null));
      
  }, [user]);

  const login = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  const logout = () => {
    axios
      .get('http://localhost:3000/logout', { withCredentials: true })
      .then(() => setUser(null));
  };
  
  return (
    
    <div className=" max-w-screen-2xl mx-auto">
      <Navbar user={user} login={login} logout={logout} />
      <Hero login={login} />
      <WhyCelebEX />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Home;