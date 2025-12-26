import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/venomancer/1.jpg" alt="ونومنسر1" />
            <img src="/images/heros/venomancer/2.jpg" alt="ونومنسر2" />
            <img src="/images/heros/venomancer/3.jpg" alt="ونومنسر3" />
            <img src="/images/heros/venomancer/4.jpg" alt="ونومنسر4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" ,alt:"ریث"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" ,alt:"منتا"},
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" ,alt:"باترفلای"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/arcane/witch", img: "/images/items/arcane/witch.png", className: "null" ,alt:"ویچ بلید"},]} />
            </div>
        </div>
    )
}