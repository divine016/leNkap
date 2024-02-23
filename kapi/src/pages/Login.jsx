import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const Login = () => {
  return (

    <div  className='text-white h-[100vh]  flex justify-center items-center bg-red-400 bg-cover' style={{ "backgroundImage": "url('../src/assets/pesa/bg2.jpg')" }}>
      <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-md bg-opacity-60 relative'>
      <img className="border-slate-400 my-4 py-4" width={100} height={100} src="../src/assets/pesa/icon.png" alt="logo image" />  
        <h1 className='text-4xl text-left font-bold text-white mb-6'>Welcome back friend! </h1>
        {/* <span className='text-red-600 text-2xl text-left font-light mb-'>Glad to see you again</span> */}
        <form action="">
          <div className='relative my-4 ' >
            <label htmlFor="">Your Email / Name</label>
            <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' />
            
            {/* <label className='absolute text-sm  text-white duration-300 transform-y-6  scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="name">Your Name or Email</label> */}
          </div>

          <div className='relative my-4'>
            <label htmlFor="">Your Password</label>
            <input type="password" className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' />
            {/* <label className='absolute text-sm  text-white duration-300 transform-y-6  scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="password">Your Password</label> */}
          </div>

          <div className='flex justify-between items-center'>
            <div className=' flex gap-2 items-center '>
              <input type="checkbox" name='' id='' />
              <label htmlFor="">Remember me</label>
            </div>
            {/* <Link className='text-red-400'>Forgot password?</Link> */}
            <a className='text-red-400 hover:text-slate-200 'href='' >Forgot password?</a>
          </div>

          <button type='submit' className="flex justify-center items-center py-4 px-4 font-monserrat text-[18px] leading-none rounded-full bg-white text-red-400 w-full  my-6 mr-4 hover:bg-red-400 hover:text-white duration-300 transition-colors" >Login</button>
          <div className='text-center'>
            <span className='m-4'>Don't yet have an account? 
            <a href="{SignUp}" className='text-red-400 hover:text-slate-200'> SignUp.</a> </span>
          </div>
          {/* <Button label="Login" />
          <div>
            <span>New Here? <Link to={<SignUp />}> Create an accounnt</Link></span>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login