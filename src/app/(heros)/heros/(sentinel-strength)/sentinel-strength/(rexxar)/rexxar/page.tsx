import Table from "@/components/table/page";

export default function Rexxar() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/rexxar/1.jpg" alt="رکسار" />
            <img src="/images/heros/rexxar/2.jpg" alt="رکسار1" />
            <img src="/images/heros/rexxar/3.jpg" alt="رکسار2" />
            <img src="/images/heros/rexxar/4.jpg" alt="رکسار3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:"سولار"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},]} />
            </div>
        </div>
    )
}