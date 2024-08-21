import React from "react";
import Midashi from "./section_midashi";
import Body from "./body";

const InfoTop = () => {
    return(
        <>
            <Midashi>夏休み課題ページを作成しました！</Midashi>
            <Body><p>要望が多かった夏休みの課題ページを作成しました！以下のリンクからアクセスできます。<br /><a href="https://timetable-2e.vercel.app/homework/summer">https://timetable-2e.vercel.app/homework/summer</a></p></Body>
            <Midashi>4月14日に発生したWebサイトの一部機能停止について</Midashi>
            <Body><p>私の怠慢による杜撰な週末の例外処理により、本サイトについて、一時トップページが機能しておりませんでした。<br />16時30分ごろに修正が完了し、現在は正常に動作しております。<br />私の怠慢により、本サイトをご利用の皆様に多大なるご迷惑をおかけしたことを深くお詫び申し上げます。<br />今回、例外処理を書き直したため、来週以降同様の事象は発生しないと思われますが、万一発生した場合に起きましては、私にご一報いただけると幸いです。すぐに対処します。<br />本件における問い合わせにつきましては、LINEまたはTeamsでお願いいたします。</p></Body>
            <Midashi>Webページを開設しました!</Midashi>
            <Body><p>元1年4組の方ならご存知だと思いますが、この度、クラスのハブサイトを作成しました。<br />このサイトは主に時間割・課題の共有を目的としています。<br />まだまだ不完全ですが、継続的に開発していきますので、ご協力をお願いいたします！</p></Body>
        </>
    )
}

export default InfoTop