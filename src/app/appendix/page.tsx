"use client"
import React from 'react';
import Header from '@/components/header'
import Link from 'next/link'
import Title from '@/components/title';
import { useMediaQuery } from "@mui/material";
import HeaderMobile from '@/components/header_mobile';


const Appendix = () => {
  const isComputer: boolean = useMediaQuery("(min-width: 880px)")

  return (
    <>
      {isComputer && <Header />}
      {!isComputer && <HeaderMobile />}

      <Title>おまけコーナー</Title>
      <p className='text-3xl m-5 p-5'>Coming Soon...</p>
    </>
  )
}

export default Appendix
