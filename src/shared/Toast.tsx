import {ToastContainer} from "react-toastify";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
    return <ToastContainer position="bottom-left"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop={false}
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover/>
}
