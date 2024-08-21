"use client"
import React from "react";
import Midashi from "@/components/section_midashi";
import Title from "@/components/title";
import Body from "@/components/body";
import Header from "@/components/header";
import "@/styles/hw.css"
import {useMediaQuery} from "@mui/material"
import HeaderMobile from "@/components/header_mobile";

const SummerHW = () => {
    const isComputer: boolean = useMediaQuery("(min-width: 880px)")
    return(
        <>  
            {isComputer && <Header />}
            {!isComputer && <HeaderMobile />}
            <Title>夏休み課題</Title>
            <Body>
                <Midashi>微分積分1/ベクトル・行列</Midashi>
                <ul>
                    <li>前期試験の解きなおし</li>
                    <li>前期末試験の自己採点</li>
                </ul>
                <Midashi>国語2</Midashi>
                <ul>
                    <li>小説を題材にした新聞作成</li>
                    <li>企業見学会から考える自身のキャリア</li>
                </ul>
                <Midashi>社会2</Midashi>
                以下のうちいずれか
                <ul>
                    <li>
                        歴史に関連した課題本・映画・マンガ・テレビ番組を精読し、<br />
                        <ol>
                            <li>なぜその記事を選んだか</li>
                            <li>事実的側面を整理</li>
                            <li>どのような気づき、発見があったのか</li>
                        </ol>
                        をA4の用紙に書く
                    </li>
                    <li>
                        新聞記事(朝日、読売、毎日など。虚構新聞不可)を3件選び、<br />
                        <ol>
                            <li>なぜその記事を選んだか</li>
                            <li>要約、(可能ならば)歴史的背景の把握</li>
                            <li>どのような気づき、発見があったか</li>
                        </ol>
                        をA4の用紙に書く
                    </li>
                </ul>
                <Midashi>英語3</Midashi>
                TOEIC Bridge 対策問題 (Reading Part)
            </Body>
        </>
    )
}

export default SummerHW