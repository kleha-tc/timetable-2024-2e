import React from 'react';
import { timetable } from './timetable_data'
import '@/styles/title.css'

const TimeTable2 = (props: any) => {
  let today = new Date().getDay();
  let weekday: number = props.day == 0 ? today: today + props.day;
  switch (today) {
    case 5:
      if(props.day == 1){
        weekday = 1;
      }
      break;
    case 0:
    case 6:
      if (props.day == 1){
        weekday = 2;
      } else {
        weekday = 1;
      }
      break;
  };
  console.log(weekday)
  let daytimetable: any = [];
  timetable["late_period"]["e"][weekday - 1].map((item) => { {/**ここのeを書き換えると他コースの時間割を出力 */}
    return(
      daytimetable.push(item)
    );
  });
  console.log(daytimetable)
  return (
    <div className = {"grid grid-cols-5 text-xl mr-5 p-1 border-collapse"}>
      <h1 className = {"text-2xl col-span-5 p-2 mb-5 midashi"}>{props.day == 0 ? "今日" : "明日"} の時間割</h1>
      <h2 className = {" border-slate-500 border-2 border-b-0 border-r-0"}>時限</h2>
      <h2 className = {"border-slate-500 border-2 col-span-2 border-b-0 border-r-0"}>科目</h2>
      <h2 className = {"border-slate-500 border-2 col-span-2 border-b-0"}>連絡等</h2>
      <p className='border-slate-500 border-2 border-b-0 border-r-0'> 1 </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2 border-b-0 border-r-0"}> {daytimetable[0]} </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2 border-b-0"}> </p>
      <p className='border-slate-500 border-2 border-b-0 border-r-0'> 2 </p>
      <p className='border-slate-500 border-2 border-b-0 border-r-0'> 3 </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2 border-b-0 border-r-0"}> {daytimetable[1]} </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2 border-b-0"}> </p>
      <p className='border-slate-500 border-2 border-b-0 border-r-0'> 4 </p>
      <p className='border-slate-500 border-2 border-b-0 border-r-0'> 5 </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2 border-b-0 border-r-0"}> {daytimetable[2]} </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2 border-b-0"}> </p>
      <p className='border-slate-500 border-2 border-b-0 border-r-0'> 6 </p>
      <p className='border-slate-500 border-2 border-b-0 border-r-0'> 7 </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2 border-r-0"}> {daytimetable[3]} </p>
      <p className = {"border-slate-500 border-2 col-span-2 row-span-2"}> </p>
      <p className='border-slate-500 border-2 border-r-0'> 8 </p>
    </div>
  );
}


export default TimeTable2
