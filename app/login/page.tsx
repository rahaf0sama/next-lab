"use client"
import { signIn } from "next-auth/react"; //    
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-purple-100 text-center">
      
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-purple-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-8">Please sign in to access your pharmacy account</p>
        
       
        <button
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-4 rounded-xl hover:bg-gray-50 hover:border-purple-400 transition-all duration-300 shadow-sm active:scale-95"
          onClick={() => signIn("google", { redirectTo: "/" })} //    
        >
          <img 
            src="https://authjs.dev/img/providers/google.svg" 
            alt="Google" 
            className="w-6 h-6"
          />
          Continue with Google
        </button>

        <div className="mt-8 text-sm text-gray-400">
          By signing in, you agree to our Terms and Privacy Policy
        </div>
      </div>
    </div>
  );
}