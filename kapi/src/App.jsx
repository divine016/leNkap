// import Router from "./Router"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <>
       <div>
       {/* <div className='text-white h-[80vh]  flex justify-center items-center bg-red-400 bg-cover' style={{ "backgroundImage": "url('../src/assets/pesa/bg.png')" }}> */}
          <Login />
          <SignUp />
        </div>
    </>
  )
}

export default App
