"use client"
import Hero from '@/components/Hero'
import PlaceList from '@/components/PlaceList'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    getPlacesList(); 
  },[])

  const getPlacesList=async()=>{
    const result=await fetch("/api/google-place-api");
    const data=await result.json();
    console.log(data)
  }
  return (
    <div>
      <Hero/>
      <PlaceList/>
    </div>
  )
}
