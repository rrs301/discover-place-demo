import React from 'react'
import PlaceItem from './PlaceItem'

function PlaceList({placeList}:any) {
    console.log(placeList)

  return (
    <div className='px-[10px] md:px-[120px] mt-[70px] z-20'>
        <h2 className='text-[20px] font-bold mb-5'>Search Results</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {placeList?.map((place:any,index:number)=>index<=7&&(
            <PlaceItem key={index} place={place} />
        ))}
        </div>
    </div>
  )
}

export default PlaceList