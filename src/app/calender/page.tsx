"use client"
import React from "react";
import Header from "@/components/header";
import Title from "@/components/title";
import HeaderMobile from "@/components/header_mobile";
import { useMediaQuery } from "@mui/material";

const ClassCalendar = () => {
      const isComputer: boolean = useMediaQuery("(min-width: 880px)")

    return(
        <>
            {isComputer && <Header />}
            {!isComputer && <HeaderMobile />}

            <Title>クラスカレンダー</Title>
            <h1 className="text-3xl p-5 m-5">Coming Soon...</h1>
        </>
    )
}

export default ClassCalendar