"use client"
import React, { useState } from "react";
import { timetable } from "./timetable_data";
import { Select, MenuItem, FormControl, NativeSelect } from "@mui/material";


const TimeTable = () => {
    const [cource,setCource] = useState("e"); {/**ここのeを書き換えることでデフォルト表示コースを変更可能 */}
    const [period, setPeriod] = useState("late_period")
    return (
        <>
            <NativeSelect defaultValue={"late_period"} onChange={(event) => setPeriod(event.target.value)}>
                <option value="early_period">前期</option>
                <option value="late_period">後期</option>
            </NativeSelect>
            <button className={cource == "m" ? "border-2 border-red-700 m-2 p-2 bg-red-200" : "border-2 border-red-700 m-2 p-2 hover:bg-red-200"} onClick={() => {setCource("m")}} >エネルギー機械コース</button>
            <button className={cource == "d" ? "border-2 border-amber-700 m-2 p-2 bg-amber-200" : "border-2 border-amber-700 m-2 p-2 hover:bg-amber-200"}  onClick={() => {setCource("d")}}>プロダクトデザインコース</button>
            <button className={cource == "e" ? "border-2 border-green-700 m-2 p-2 bg-green-200" : "border-2 border-green-700 m-2 p-2 hover:bg-green-200"} onClick={() => {setCource("e")}}>エレクトロニクスコース</button>
            <button className={cource == "i" ? "border-2 border-sky-700 m-2 p-2 bg-sky-200" : "border-2 border-sky-700 m-2 p-2 hover:bg-sky-200"}onClick={() => {setCource("i")}}>知能情報コース</button>
            <div className="grid grid-cols-11 grid-rows-9 grid-flow-col text-xl ">
                <h1 className="border-2 p-2 border-slate-800">時限</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">1</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">2</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">3</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">4</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">5</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">6</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">7</h1>
                <h1 className="border-2 border-t-0 p-2 border-slate-800">8</h1>
                <h1 className="col-span-2 p-2 border-2 border-l-0 border-slate-800">月曜日</h1>
                {timetable[period][cource][0].map((value: string, index: number) => <p className="col-span-2 border-t-0 border-l-0 row-span-2 p-2 border-2 border-slate-800" key={index}>{value}</p>)}
                <p className="col-span-2 row-span-2 p-2 border-2 border-t-0 border-l-0 border-slate-800"></p>
                <h1 className="col-span-2 p-2 border-2 border-l-0 border-slate-800">火曜日</h1>
                {timetable[period][cource][1].map((value: string, index: number) => <p className="col-span-2 border-t-0 border-l-0 row-span-2 p-2 border-2 border-slate-800" key={index}>{value}</p>)}
                <h1 className="col-span-2 p-2 border-2 border-l-0 border-slate-800">水曜日</h1>
                {timetable[period][cource][2].map((value: string, index: number) => <p className="col-span-2 border-t-0 border-l-0 row-span-2 p-2 border-2 border-slate-800" key={index}>{value}</p>)}
                <h1 className="col-span-2 p-2 border-2 border-l-0 border-slate-800">木曜日</h1>
                {timetable[period][cource][3].map((value: string, index: number) => <p className="col-span-2 border-t-0 border-l-0 row-span-2 p-2 border-2 border-slate-800" key={index}>{value}</p>)}
                <p className="col-span-2 row-span-2 p-2 border-2 border-t-0 border-l-0 border-slate-800"></p>
                <h1 className="col-span-2 p-2 border-2 border-l-0 border-slate-800">金曜日</h1>
                {timetable[period][cource][4].map((value: string, index: number) => <p className="col-span-2 border-t-0 border-l-0 row-span-2 p-2 border-2 border-slate-800" key={index}>{value}</p>)}
            </div>
        </>
    )
}

export default TimeTable
