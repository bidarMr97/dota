import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/sf/1.jpg" alt="شدوفایند1" />
            <img src="/images/heros/sf/2.jpg" alt="شدوفایند2" />
            <img src="/images/heros/sf/3.jpg" alt="شدوفایند3" />
            <img src="/images/heros/sf/4.jpg" alt="شدوفایند4" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" ,alt:"ریث"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" ,alt:"ای یول"},
                    { href: "/items/trophy/arcane", img: "/images/items/trophy/arcane.png", className: "null" ,alt:"ارکین"},
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"بوت تراول"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},]} />
            </div>
        </div>
    )
}