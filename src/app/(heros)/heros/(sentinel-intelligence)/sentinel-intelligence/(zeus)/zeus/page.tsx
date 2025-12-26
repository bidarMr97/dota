import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/zeus/1.jpg" alt="زئوس" />
            <img src="/images/heros/zeus/2.jpg" alt="زئوس1" />
            <img src="/images/heros/zeus/3.jpg" alt="زئوس2" />
            <img src="/images/heros/zeus/4.jpg" alt="زئوس3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/arcane/aether", img: "/images/items/arcane/aether.png", className: "null" ,alt:"ائتر"},
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" ,alt:"رفرش ارب"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"ترائل بوتس"},
                    { href: "/items/ancient/lothar", img: "/images/items/ancient/lothar.png", className: "null" ,alt:"لوتارزاج"},
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" ,alt:"بلادثورن"},]} />
            </div>
        </div>
    )
}