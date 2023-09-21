import React from 'react'

function SideDrawer({closeDrawer}:any) {
  return (
    <div className='h-screen sticky w-screen 
    md:w-[400px] bg-white
    shadow-md
    p-5
    z-20'>
        <button onClick={()=>closeDrawer()}>Close</button>
    </div>
  )
}

export default SideDrawer