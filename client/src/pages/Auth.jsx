import React from 'react';
import axios from 'axios';

import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";

import { ServerUrl } from "../App";

import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { motion } from "motion/react";
const Auth = () => {
    const dispatch = useDispatch();

       const handleGoogleAuth = async () => {
        try {
            const response = await signInWithPopup(auth,provider)
            let User = response.user
            let name = User.displayName
            let email = User.email
            // meaning of this line is to send the name and email of the user to the backend server for authentication and then store the user data in the redux store
            const result = await axios.post(ServerUrl + "/api/auth/google" , {name , email} , {withCredentials:true})
            dispatch(setUserData(result.data))
    
        } catch (error) {
              console.log("ERROR CODE:", error.code);
            console.log("ERROR MESSAGE:", error.message);
            console.log(error)
              dispatch(setUserData(null))
        }
    }

  return (
    <div className="min-h-screen  bg-[#f3f3f3] border-blue-500 flex items-center justify-center px-6 py-20">
     {/* Button Frontend Starts Here */}
      <motion.div
       initial={{opacity:0 , y:-100}} 
        animate={{opacity:1 , y:3}} 
        transition={{duration:2, delay:0.5, ease:"easeInOut"}}
       className= "w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200">
          <div className='flex items-center justify-center gap-3 mb-6'>
                <div className='bg-black text-white p-2 rounded-lg'>
                    <BsRobot size={18}/>
                </div>
                <h2 className='font-semibold text-lg'>InterviewIQ.AI</h2>
            </div>

             <h1 className='text-2xl md:text-3xl font-semibold text-center     leading-snug mb-4'>
              Continue with
                <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
                    <IoSparkles size={16}/>
                    AI Smart Interview
                </span>
             </h1>

            {/*paragraph*/}
             <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
                Sign in to start AI-powered mock interviews,
        track your progress, and unlock detailed performance insights.
            </p>

            <motion.button

                 onClick={handleGoogleAuth}

             whileHover={{opacity:0.9 , scale:1.05}}
            whileTap={{opacity:1 , scale:0.98}}
            className='w-full flex items-center justify-center gap-3 py-3 bg-gradient-to-r from-blue-100 to-purple-500 text-white rounded-full shadow-md '>
                <FcGoogle size={20}/>
                Continue with Google
            </motion.button>

        </motion.div>
    </div>
  )
}

export default Auth