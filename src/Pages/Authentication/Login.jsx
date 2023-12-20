import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/AuthSlice2';
import { toast } from 'react-toastify';

const Login = () => {
    const { redirectTo } = useSelector((state) => state?.auth2);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        navigate("/");
    }

    //redirect if get the token or not get the token 
//    const check =()=>{
//     let token = localStorage.getItem("token")
//     // let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

//     if (token == null || token == undefined || token == "") {
//         // window.location.pathname = getPathname;
//         navigate("/login");
        
//     }
// }

// useEffect(() => {
//     check()
//     // redirectUser
//     navigate(redirectTo)
// }, [redirectTo])

    return (
        <>
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: 400 }}>
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Contact Us</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href>Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">Contact Us</p>
                    </div>
                </div>
            </div>

            <div className="container gym-class mb-5 pb-5" style={{ marginTop: "100px" }}>
                <div className="row px-5">
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                            <i className="flaticon-six-pack" />
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Connect With Us To Achieve Ultimate Fitness Goal</h3>
                            <p>
                                Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores, dolor
                                sit eos sea sanctus erat lorem nonumy sanctus takimata. Kasd amet sit sadipscing at..
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="gym-class-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                            <i className="flaticon-bodybuilding" />
                            <h3 className="display-4 mb-3 text-white font-weight-bold">Login Now To Become Our Member</h3>
                            <form className="form-inline justify-content-start mb-4" onSubmit={(e) => handleSubmit(e)}>
                                <div className="input-group">
                                    <input type="email" className="form-control-lg mb-2" name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" className="form-control-lg" name="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <button className="btn btn-md btn-outline-light px-4 mr-5">Login Here</button>
                                </div>
                            </form>
                            <Link to="/register2" className="pt-2" style={{ textDecoration: "none" }}>Don't have an account? <b className='text-white'>Register Here</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login



{/*  */ }