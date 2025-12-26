import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/shadowshaman/1.jpg" alt="" />
            <img src="/images/heros/shadowshaman/2.jpg" alt="" />
            <img src="/images/heros/shadowshaman/3.jpg" alt="" />
            <img src="/images/heros/shadowshaman/4.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/wonders/healing", img: "/images/items/wonders/healing.png", className: "null" ,alt:"هیلینگ"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک دگر"},
                    { href: "/items/protector/aeon", img: "/images/items/protector/aeon.png", className: "null" ,alt:" آئون دیسک"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" ,alt:"رفرش"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},]} />
            </div>
        </div>
    )
}