import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/dazzle/4.jpg" alt="دزل" />
            <img src="/images/heros/dazzle/1.jpg" alt="دزل1" />
            <img src="/images/heros/dazzle/2.jpg" alt="دزل2" />
            <img src="/images/heros/dazzle/3.jpg" alt="دزل3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:"سولار"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک"},
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" ,alt:"هکس"},
                    { href: "/items/arcane/witch", img: "/images/items/arcane/witch.png", className: "null" ,alt:"ویچ بلید"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},]} />
            </div>
        </div>
    )
}