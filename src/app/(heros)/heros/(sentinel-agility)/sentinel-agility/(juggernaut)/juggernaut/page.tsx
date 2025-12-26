import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/juggernut/1.jpg" alt="جاگرنات" />
            <img src="/images/heros/juggernut/2.jpg" alt="جاگرنات1" />
            <img src="/images/heros/juggernut/3.jpg" alt="جاگرنات2" />
            <img src="/images/heros/juggernut/4.jpg" alt="جاگرنات3" /></div>
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/enchanted/diffusal", img: "/images/items/enchanted/diffusal.png", className: "null" ,alt:"دیفیوزال"},
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" ,alt:"مسک"},
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" ,alt:"بتل فیوری"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},]} />
            </div>
        </div>
    )
}