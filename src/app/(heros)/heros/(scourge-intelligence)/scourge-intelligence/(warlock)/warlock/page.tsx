import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/warlock/1.jpg" alt="وارلاک" />
            <img src="/images/heros/warlock/2.jpg" alt="وارلاک1" />
            <img src="/images/heros/warlock/3.jpg" alt="وارلاک2" />
            <img src="/images/heros/warlock/4.jpg" alt="وارلاک3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/cache/wind", img: "/images/items/cache/wind.png", className: "null" ,alt:"ویند"},
                    { href: "/items/supportive/urn", img: "/images/items/supportive/urn.png", className: "null" ,alt:"اورن"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" ,alt:"اسپیریت"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک دگر"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" ,alt:"رفرش ارب"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},]} />
            </div>
        </div>
    )
}