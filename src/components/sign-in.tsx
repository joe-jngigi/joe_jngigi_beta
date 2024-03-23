'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import axios from 'axios'

import { useRouter } from 'next/navigation';
import {toast} from 'sonner';
import { signIn } from 'next-auth/react';


type u_mail = {
  u_mail: {
    email: string
    username: string
    _id: string
  }
}

type TUserTypes = {
  data :  u_mail
}

const SignUp = () => {

  const router = useRouter()

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    
    try {

      const USER_EXIST: TUserTypes = await axios.post('/api/check-user', {userEmail});

      console.log('Is this working', USER_EXIST.data.u_mail.email);
      

      if (!USER_EXIST.data.u_mail.email) {
        toast.error('User does not Exist');
        (e.target as HTMLFormElement).reset(); 
        // router.replace('/api/auth/sign-up')
        return
      }
  
      const userResponse = await signIn('credentials', {
        userEmail, userPassword, redirect: false, callbackUrl: '/main'
      })

      console.log(userResponse);
      
      if (userResponse?.error) {
        toast.error('Please Check you credentials');

        return
      }

      if (!userResponse?.error) {
        toast.success('User Exists');
        (e.target as HTMLFormElement).reset();
        router.refresh();
        router.replace('/main')
        window.location.assign('/main')
      }

    } catch (error) {
      console.log('Error When Transferring data', error);
      toast.error('Data not transferred. Tell the developer to check his source code.. or else')
    }
    
  }

  return (
    <div className=" w-full p-3 pt-32 flex justify-center items-center">
      <div className=" h-96 shadow-xl border-1 dark:border-none bg text-black bg-opacity-50 backdrop-blur-md  rounded-2xl p-2 w-full md:max-w-[700px] flex items-center justify-center flex-col">
        <h1 className="text-xl font-bold">This Page is under Renovation, Will be Back Soon</h1>
      </div>
    </div>
  );
}

export default SignUp
