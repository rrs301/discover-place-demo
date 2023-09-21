import React, { useState } from 'react'
import PlaceItem from './PlaceItem'
import SideDrawer from './SideDrawer'

function PlaceList({ placeList }: any) {
    

    const [drawerToggle,setDrawerToggle]=useState(false);
    const [selectedPlace,setSelectedPlace]=useState<any>([]);

    return (
        <div className='px-[10px] md:px-[120px] mt-[70px] z-20'>
            <h2 className='text-[20px] font-bold mb-5'>Search Results</h2>

            <div className='
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {placeList?.map((place: any, index: number) => 
                index <= 7 && (
                    <div onClick={()=>setSelectedPlace(place)} key={index}>
                    <PlaceItem  place={place} 
                     />
                    </div>
                ))}
            </div>
           {selectedPlace?.name? <div className='fixed top-0 right-0 z-20'>
                <SideDrawer closeDrawer={()=>setSelectedPlace([])}/>
            </div>:null}
        </div>
    )
}

export default PlaceList