import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/enchantress/1.jpg" alt="enchantress" />
            <img src="/images/heros/enchantress/2.jpg" alt="enchantress1" />
            <img src="/images/heros/enchantress/3.jpg" alt="enchantress2" />
            <img src="/images/heros/enchantress/4.jpg" alt="enchantress3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/pike", img: "/images/items/trophy/pike.png", className: "null" ,alt:"پایک"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک دگر"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" ,alt:"بلادتورن"},]} />
            </div>
        </div>
    )
}