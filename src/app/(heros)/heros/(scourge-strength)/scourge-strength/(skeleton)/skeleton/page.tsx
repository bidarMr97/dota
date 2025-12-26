import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/skeleton/1.jpg" alt="اسکلتون" />
            <img src="/images/heros/skeleton/2.jpg" alt="اسکلتون1" />
            <img src="/images/heros/skeleton/3.jpg" alt="اسکلتون2" />
            <img src="/images/heros/skeleton/4.jpg" alt="اسکلتون3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:"دزولیتر"},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سوییفت"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},]} />
            </div>
        </div>
    )
}