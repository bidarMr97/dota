import Table from "@/components/table/page";

export default function Tiny() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/tiny/1.jpg" alt="تاینی" />
            <img src="/images/heros/tiny/2.jpg" alt="تاینی1" />
            <img src="/images/heros/tiny/3.jpg" alt="تاینی2" />
            <img src="/images/heros/tiny/4.jpg" alt="تاینی3" />
            <img src="/images/heros/tiny/5.jpg" alt="تاینی4" /></div>
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوتس"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" ,alt:"اکو"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سوییفت"},
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" ,alt:"بی کی بی"},
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" ,alt:"مسک"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},]} />
            </div>
        </div>
    )
}