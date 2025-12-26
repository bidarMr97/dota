import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/magnatur/1.jpg" alt="مگناتور" />
            <img src="/images/heros/magnatur/2.jpg" alt="مگناتور1" />
            <img src="/images/heros/magnatur/3.jpg" alt="مگناتور2" />
            <img src="/images/heros/magnatur/4.jpg" alt="مگناتور3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/cache/sobi", img: "/images/items/cache/sobi.png", className: "null" ,alt:"سوبی مسک"},
                    { href: "/items/gryla/robi", img: "/images/items/gryla/robi.png", className: "null" ,alt:"روب اف د مگی"},
                    { href: "/items/cache/death", img: "/images/items/cache/death.png", className: "null" ,alt:"دث"},
                    { href: "/item/cache/speed", img: "/images/items/cache/speed.png", className: "null" ,alt:"اسپید"},]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سویفت"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" ,alt:"اکو"},]} />
            </div>
        </div>
    )
}