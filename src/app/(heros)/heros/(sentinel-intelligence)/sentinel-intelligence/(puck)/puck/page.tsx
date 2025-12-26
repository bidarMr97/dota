import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/puck/1.jpg" alt="پاک" />
            <img src="/images/heros/puck/2.jpg" alt="پاک1" />
            <img src="/images/heros/puck/3.jpg" alt="پاک2" />
            <img src="/images/heros/puck/4.jpg" alt="پاک3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                    { href: "/items/market/venom", img: "/images/items/market/venom.png", className: "null" ,alt:"ونوم"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" ,alt:"ائول"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"ریدینس"},
                    { href: "/items/arcane/witch", img: "/images/items/arcane/witch.png", className: "null" ,alt:"ویچ بلید"},]} />
            </div>
        </div>
    )
}