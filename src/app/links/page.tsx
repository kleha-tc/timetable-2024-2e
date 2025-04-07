"use client"
import React from "react";
import Header from "@/components/header";
import Title from "@/components/title";
import Midashi from "@/components/section_midashi";
import Body from "@/components/body";
import "@/styles/link.css"
import { useMediaQuery } from "@mui/material";
import HeaderMobile from "@/components/header_mobile";

const Links = () => {
      const isComputer: boolean = useMediaQuery("(min-width: 880px)")

    return(
        <>
            {isComputer && <Header />}
            {!isComputer && <HeaderMobile />}

            <Title>リンク集</Title>
            <Body>
                <Midashi>Microsoft関係</Midashi>
                <ul className="pl-5">
                    <li><a href="https://portal.omu.ac.jp">OMUポータル (https://portal.omu.ac.jp)</a></li>
                    <li><a href="https://www.microsoft365.com/">Microsoft365 (Web版Office/Teams) (https://www.microsoft365.com)</a></li>
                </ul>
                <Midashi>Google関係</Midashi>
                <ul className="pl-5">
                    <li><a href="https://classroom.google.com/">Google Classroom (https://classroom.google.com)</a></li>
                </ul>
                <Midashi>その他教務関係</Midashi>
                <ul className="pl-5">
                    <li><a href="https://forms.office.com/r/eeBchDwxf0">遅刻欠席連絡フォーム(2025年度3年)</a></li>
                </ul>
                <Midashi>HP</Midashi>
                <ul className="pl-5">
                    <li><a href="https://www.ct.omu.ac.jp">大阪公立大学工業高等専門学校HP (https://www.ct.omu.ac.jp)</a></li>
                    <li><a href="https://www.ct.omu.ac.jp/electronics/">エレクトロニクスコースHP</a></li>
                    <li><a href="https://www.ct.omu.ac.jp/liberal-arts/">一般科目系HP</a></li>
                    <li><a href="https://www.ct.omu.ac.jp/ene-mecha/">エネルギー機械コースHP</a></li>
                    <li><a href="https://www.ct.omu.ac.jp/product-dsgn/">プロダクトデザインコースHP</a></li>
                    <li><a href="https://www.ct.omu.ac.jp/informatics/">知能情報コースHP</a></li>
                    <li><a href="https://www.upc-osaka.ac.jp/">公立大学法人大阪HP</a></li>
                    <li><a href="https://www.omu.ac.jp/">大阪公立大学HP</a></li>
                    <li><a href="https://www2.ct.osakafu-u.ac.jp/">大阪府立大学工業高等専門学校HP</a></li>
                </ul>
                <Midashi>2年のときの授業関係</Midashi>
                <ul className="pl-5">
                    <li><a href="https://www.ct.omu.ac.jp/pect-lab/lecture/">エレクトロニクス概論授業資料</a></li>
                    <li><a href="https://tin-straw-281.notion.site/3-4_-206d780bd02b449aa57f5c8986529d64?pvs=4&classId=62d8cd25-d9bb-41ee-9415-08e1f8eacbbe">英語3・4情報まとめサイト</a></li>
                </ul>
            </Body>
        </>
    )
}


export default Links
