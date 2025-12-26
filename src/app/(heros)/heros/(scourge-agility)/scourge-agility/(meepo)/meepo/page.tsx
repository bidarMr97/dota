import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/meepo/1.jpg" alt="میپو" />
            <img src="/images/heros/meepo/2.jpg" alt="میپو" />
            <img src="/images/heros/meepo/3.jpg" alt="میپو" />
            <img src="/images/heros/meepo/4.jpg" alt="میپو" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" ,alt:"ریث"},
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" ,alt:"هکس"},
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اورویم"},
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" ,alt:"اسکیدی"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاور"},]} />
            </div>
        </div>
    )
}