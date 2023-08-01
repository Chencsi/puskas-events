import React from "react";

const Event = (props) => {
    const {id, image, name, date, pay, location, start, end} = props;
    const months = ["Január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"]
    var newDate = date.split("-")
    return(
        <li key={id} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={image} height="100px" alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semi0ld leading-6 text-gray-900 dark:text-slate-100">{location} - {name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{pay} Ft / óra</p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900 dark:text-slate-400">{newDate[0]}. {months[Number(newDate[1])-1]} {Number(newDate[2])}. {start} -</p>
            <p className="text-sm leading-6 text-gray-900 dark:text-slate-400">{newDate[0]}. {months[Number(newDate[1])-1]} {Number(newDate[2])+1}. {end}</p>
          </div>
        </li>
    )
}

export default Event;