import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/rubick/1.jpg" alt="روبیک" />
            <img src="/images/heros/rubick/2.jpg" alt="روبیک2" />
            <img src="/images/heros/rubick/3.jpg" alt="روبیک1" />
            <img src="/images/heros/rubick/4.jpg" alt="روبیک3" /></div>
            <div>
                <Table data={[
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},
                    { href: "/items/trophy/arcane", img: "/images/items/trophy/arcane.png", className: "null" ,alt:"ارکین"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},]} />
            </div>
        </div>
    )
}