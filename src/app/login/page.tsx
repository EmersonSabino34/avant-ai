'use client'

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [textEmail, setTextEmail] = useState("hidden")
  const [textPassword, setTextPassword] = useState("hidden")

  const [btnEnter, setBtnEnter] = useState("bg-blue-700")
  const [container, setContainer] = useState("bg-slate-100")

  function handleEnter(e: any){
    e.preventDefault()

    if(email === ""){
      setTextEmail("block")
      setBtnEnter("bg-red-600")
      setContainer("bg-red-400")
      alert("Please fill in the E-mail")
      return 
    }

    if(password === ""){
      setTextPassword("block")
      setBtnEnter("bg-red-600")
      setContainer("bg-red-400")
      return alert("Please fill in the Password")
    }

    setTextEmail("hidden")
    setContainer("bg-slate-100")
    setBtnEnter("bg-blue-700")
    setTextPassword("hidden")
  
    alert("Welcome")
  }

  return (
    <div className={` ${container} w-screen h-screen flex items-center justify-center `}>
      
      <div className="w-1/5 h-1/2  flex flex-col items-center gap-4 ">

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1.9 }}
        >
        <img src="./image/logo2.svg" alt="Logo Kiwify" className="w-60" />
        </motion.div>

        <div className="flex flex-col items-center">

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1.9 }}
          >
          <h2 className="text-3xl font-extrabold mb:mb-0 mb-3">Log in to your account</h2>
          
          <div className="flex gap-1 justify-center">

            <h1>Or</h1>
            <Link href="/create-user">
              <p className="text-blue-700 font-semibold cursor-pointer">Register</p>
            </Link>

          </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1.9 }}
          >
        <div className="bg-white rounded-md h-auto flex flex-col items-center gap-4">

          <form className=" flex gap-3 flex-col w-80 m-4">
            
            <div>
              <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
              <input 
                onChange={ event => setEmail( event.target.value)} value={email}
                type="email" name="email" className="w-80  border-2 p-2 rounded-md" />
              <p className={`text-red-500 ${textEmail}`}>Please fill in the email field</p>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold">Password</label>
              <input 
                onChange={ event => setPassword(event.target.value)} value={password}
                type="password" name="password" className="w-80 p-2 border-2 rounded-md" />
              <p className={`text-red-500 ${textPassword}`} >Plaese fill in the password field</p>
            </div>

            <Link href="/forgot">
              <p className="text-right mt-5 mb-5 text-blue-700 font-semibold cursor-pointer">Forgot tour password?</p>
            </Link>
          
            <button onClick={handleEnter} className={` ${btnEnter} w-80 mb-5 p-2 text-white text-sm rounded-md font-semibold cursor-pointer `}>Login Up</button>
                      
          </form>
        </div>
        </motion.div>

      </div>
    </div>
  );
}
