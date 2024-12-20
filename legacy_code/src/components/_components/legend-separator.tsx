import React from 'react'

const LegendSeparator = ({title}: {title: string}) => {
  return (
    <div className="w-full flex flex-row items-center ">
        <hr className="w-10 border-t-[0.5px] border-emerald-500"/>  
        <h2 className="text-xl mx-2 logo_text font-poppins">{title}</h2>
        <hr className="flex-grow  border-t-[0.5px] border-emerald-500"/>  
    </div>
  )
}

export default LegendSeparator
