import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signIn } from '../../API/userAPI'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'


const Signin = () => {
    const {user} = isAuthenticated()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // for success or error
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const clickSubmit = (e) => {
        e.preventDefault()
        signIn(email,password)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
                authenticate(data)
            }
        })
        .catch(err=>console.log(err))
    }
    const showError =() =>{
        if(error){
          return <div className='alert alert-danger'>{error}</div>
        }
      }
      const showSuccess = () => {
        if(success){
            if(user && user.role===0){
                return navigate('/user/profile')
            }
            if(user && user.role === 1){
                return navigate('/admin/dashboard')
            }
        }
      }

    return (
        <>
            <Navbar />
            {showError()}
            {showSuccess()}

            <main className="form-signin w-50 mx-auto my-5 shadow-lg p-5">
                <form>
                    <div className='text-center'>
                        <img className="mb-4" src="logo192.png" alt="" width="72" height="57" /></div>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>Sign in</button>
                    {/* <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={e=>clickSubmit(e)}>Sign in</button> */}
                    Do not have an account. <Link to='/signup'>Register.</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>


            <Footer />
        </>
    )
}

export default Signin