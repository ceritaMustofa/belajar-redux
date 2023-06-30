import React from 'react'
import { authAction } from '../store/auth/slice/auth'
import { useDispatch, useSelector } from 'react-redux'
import InputNilaiForm from '../component/InputNilaiForm'
import NilaiSiswa from '../component/NilaiSiswa'

function Dashboard() {
    const dispatch = useDispatch()
    
  return (
    <div className='px-24 w-screen'>
        <div className='flex justify-between py-6'>
            <h1>Dashboard</h1>

            <button onClick={()=>{
                dispatch(authAction.clearState())
            } }>Logout</button>
        </div>

        <div className='flex w-full gap-2'>
            <div className='flex-auto border rounded-md'>
                <InputNilaiForm />
            </div>
            <div className='flex-auto border rounded-md'>
                <NilaiSiswa />
            </div>

        </div>
        
        

    </div>
  )
}

export default Dashboard