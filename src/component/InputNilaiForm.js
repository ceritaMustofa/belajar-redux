import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import InputForm from './InputForm'
import { useDispatch } from 'react-redux'
import {masukkanNilai} from "../store/nilaiStore/slice/nilai"

function InputNilaiForm() {

    const dispatch = useDispatch()

    const inputNilaiMethod = useForm({
        mode: "onSubmit",
        resolver: yupResolver(
            yup.object().shape({
                namaSiswa: yup.string().required("kolom nama tidak boleh kosong"),
                kelas: yup.number().required("kelas tidak boleh kosong"),
                    matematika: yup.number().required("nilai matematika tidak boleh kosong"),
                    bIndo: yup.number().required("nilai b.Indo tidak boleh kosong"),
                    bEng: yup.number().required("nilai bahasa inggris tidak boleh kosong"),
                    ips: yup.number().required("nilai ips tidak boleh kosong"),
            })
        )
    })

    const post = (data) => {
        dispatch(masukkanNilai(data))
    }

  return (
    <div className='mt-5 w-[50%]'>
        <h1 className='text-lg font-semibold'>Form Input Nilai</h1>
        <form onSubmit={inputNilaiMethod.handleSubmit(post)}>
            <div className='flex flex-col justify-start items-start'>

                <InputForm name="kelas " type="number" method = {inputNilaiMethod} methodName="kelas" min={10} max={12}/>
                <InputForm name="namaSiswa " type="text" method={inputNilaiMethod} methodName="namaSiswa" />
                <h1 className='text-lg font-semibold'>Masukkan Nilai</h1>
                <InputForm name="Matematika" type="number" method={inputNilaiMethod} methodName="matematika" min={0} max={100}/>
                <InputForm name="bIndo " type="number" method={inputNilaiMethod} methodName="bIndo" min={0} max={100}/>
                <InputForm name="bInggris " type="number" method={inputNilaiMethod} methodName="bEng" min={0} max={100}/>
                <InputForm name="IPS " type="number" method={inputNilaiMethod} methodName="ips" min={0} max={100}/>
            </div>


            
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default InputNilaiForm