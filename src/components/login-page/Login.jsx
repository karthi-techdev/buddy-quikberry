import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/authActions';
import imgBanner from '../../assets/img/login-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username === 'Karthi' && form.password === 'Karthi@123') {
      dispatch(login(form.username, form.password));
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="login-page w-screen h-screen flex flex-row overflow-hidden">
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 bg-[#0F172A]">
        <div className="w-full p-5 rounded-md h-[100vh] flex flex-col justify-evenly">
          <h2 className="text-4xl font-bold mb-1 text-white text-center">Buddy.</h2>
          <h3 className="text-3xl font-medium mb-3 text-white text-center">Sign in to your account</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="username" type="text" placeholder="Username" className="w-full p-3 border-0 bg-[#1B2335] text-white rounded-xl font-medium" value={form.username} onChange={handleChange} required/>

            <div className="relative">
              <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-full p-3 pr-12 border-0 bg-[#1B2335] text-white rounded-xl font-medium" value={form.password} onChange={handleChange} required/>
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {!form.username && !form.password && (
              <p className="text-gray-400 text-sm mt-2 text-center">
                Hint: Username: <strong>Karthi</strong>, Password: <strong>Karthi@123</strong>
              </p>
            )}

            <button type="submit" className="w-full bg-[#0284C7] text-white py-3 rounded-md hover:bg-[#06557e] transition cursor-pointer">
              Sign In
            </button>
          </form>

          <div className="text-center">
            <p className="text-gray-400 mb-3">Or continue with</p>
            <div className="flex justify-center flex-wrap gap-3">
              <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" /> Facebook
              </button>
              <button className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} className="text-white text-xl" /> Twitter
              </button>
              <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center gap-2 transition cursor-pointer">
                <FontAwesomeIcon icon={faGithub} className="text-white text-xl" /> Github
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-1/1 bg-cover bg-center relative" style={{ backgroundImage: `url(${imgBanner})` }}>
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="z-10 flex flex-col justify-end p-10 text-white">
          <h3 className="text-3xl font-bold mb-3">Connect With Friends</h3>
          <p className="text-sm max-w-md">
            This phrase is more casual and playful. It suggests that you are keeping your friends updated on what’s happening in your life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
