"use client"
import Link from "next/link";
import { useState } from "react";

export default function Forgot() {

 
  
  const [email, setEmail] = useState("")
  const [textEmail, setTextEmail] = useState("hidden")
  const [btnReset, setBtnReset] = useState("bg-blue-700")
  const [container, setContainer] = useState("bg-slate-100")

  function handleReset(e: any) {
      e.preventDefault()

      if(email ===""){
        setTextEmail("block")
        setBtnReset("bg-red-600")
        setContainer("bg-red-400")
        alert("por favor preencher o campo email")
        return 
      }

      setTextEmail("hidden")
      setContainer("bg-slate-100")
      setBtnReset("bg-blue-700")
      setEmail("")

      alert("email sent successfully")
      
  }

  return (
    <div className="bg-slate-100 w-screen h-screen flex items-center justify-center">
      <div className="w-1/5 h-1/2 flex flex-col items-center gap-4">
        <img src="./image/logo2.svg" alt="Logo Kiwify" className="w-60" />

        <div className="flex flex-col  items-center justify-center">

          <h2 className="text-3xl font-extrabold mb-1">Redefinir a senha</h2>

          <h1 className="text-center py-5">Você receberá um e-mail com instruções para redefinir a senha</h1>

        </div>

        <div className={` ${container} rounded-md h-auto flex flex-col items-center border-2 `}>

          <form className=" flex flex-col w-80 m-4 gap-1">
            <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
            <input 
               onChange={event => setEmail( event.target.value)} value={email}
                type="email" name="email" className="w-80 border-2 p-2 rounded-md" />
            <p className={`text-white ${textEmail}`}>por favor preencher o campo email</p>
          </form>

            <button onClick={handleReset} className={` ${btnReset} w-80 mb-3 p-2 text-white text-sm rounded-md font-semibold cursor-pointer`}>Redefinir senha</button>
         

        </div>
      </div>
    </div>
  );
}
