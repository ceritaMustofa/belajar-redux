import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    // {
    //     namaSiswa:"",
    //     kelas: null ,
    //     matematika:0,
    //     bIndo:0,
    //     bEng:0,
    //     ips:0,
    // },
]


const nilaiSlicer = createSlice({
    name: "nilai",
    initialState,
    reducers: {
        masukkanNilai:(state, action)=>{
            state.push(action.payload)
        }
        // setNamaSiswa: (state, action)=>{
        //     state.namaSiswa=action.payload
        // },
        // setKelas:(state, action)=>{
        //     state.kelas=action.payload
        // },
        // setNilaiMapel:(state, action)=>{
        //     const{mapel, nilai} = action.payload
        //     state.mapel[mapel] = nilai
        // }
    }
})

// export const {setNamaSiswa, setKelas, setNilaiMapel} = nilaiSlicer.actions;
export const {masukkanNilai} = nilaiSlicer.actions
export default nilaiSlicer.reducer;