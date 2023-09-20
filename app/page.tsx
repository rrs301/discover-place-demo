"use client"
import Hero from '@/components/Hero'
import PlaceList from '@/components/PlaceList'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {

  const [placeList,setPlaceList]=useState([]);
  useEffect(()=>{
    getPlacesList(); 
  },[])

  const getPlacesList=async()=>{
    const result=await fetch("/api/google-place-api");
    const data=await result.json();
    console.log(data.resp.results);
    setPlaceList(data.resp.results);
  }
  return (
    <div>
      <Hero/>
    {placeList?  <PlaceList placeList={placeList}/>:null}
    </div>
  )
}
