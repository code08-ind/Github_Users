import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const DiffToast = () => {
        toast.success("Login Successful!");
    }

    return (
        <>
            <div className="container">
                <h1>This Is Login Page</h1>
                <button onClick={DiffToast}>Go To Main Website Page</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </>
    );
}

export default Login;
