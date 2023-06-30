import React from 'react'
import { useSelector } from 'react-redux'



const NilaiSiswa = () => {
    const nilaiSiswa = useSelector(state=>state.nilai)
    
    return (
        <div>
      <h2>Nilai Siswa</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-2 px-4">Nama Siswa</th>
            <th className="py-2 px-4">Kelas</th>
            <th className="py-2 px-4">Nilai Matematika</th>
            <th className="py-2 px-4">Nilai Bahasa Indonesia</th>
            <th className="py-2 px-4">Nilai Bahasa Inggris</th>
            <th className="py-2 px-4">Nilai IPS</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {nilaiSiswa.map((nilai, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{nilai.namaSiswa}</td>
              <td className="py-2 px-4">{nilai.kelas}</td>
              <td className="py-2 px-4">{nilai.matematika}</td>
              <td className="py-2 px-4">{nilai.bIndo}</td>
              <td className="py-2 px-4">{nilai.bEng}</td>
              <td className="py-2 px-4">{nilai.ips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default NilaiSiswa