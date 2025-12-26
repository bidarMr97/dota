import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/shadowdemon/1.jpg" alt="شدودیمن" />
            <img src="/images/heros/shadowdemon/2.jpg" alt="شدودیمن1" />
            <img src="/images/heros/shadowdemon/3.jpg" alt="شدودیمن2" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/wonders/mango", img: "/images/items/wonders/mango.png", className: "null" ,alt:"منگو"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                 ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" ,alt:"ولی"},
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" ,alt:"اسپیریت"},
                    { href: "/items/arcane/meteor", img: "/images/items/arcane/meteor.png", className: "null" ,alt:"متئور"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},]} />
            </div>
        </div>
    )
}