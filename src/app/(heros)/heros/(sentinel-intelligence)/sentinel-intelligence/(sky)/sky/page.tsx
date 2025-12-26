import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/skywrath/1.jpg" alt="اسکای رث میج" />
            <img src="/images/heros/skywrath/2.jpg" alt="اسکای رث میج1" />
            <img src="/images/heros/skywrath/3.jpg" alt="اسکای رث میج2" />
            <img src="/images/heros/skywrath/4.jpg" alt="اسکای رث میج3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" ,alt:"ولی"},
                    { href: "/items/gryla/crown", img: "/images/items/gryla/crown.png", className: "null" ,alt:"کرون"},
                    { href: "/items/gryla/crown", img: "/images/items/gryla/crown.png", className: "null" ,alt:"کرون1"},]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/rod", img: "/images/items/arcane/rod.png", className: "null" ,alt:"راد"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/protector/aeon", img: "/images/items/protector/aeon.png", className: "null" ,alt:"ائون"},
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" ,alt:"ولی1"},]} />
            </div>
        </div>
    )
}