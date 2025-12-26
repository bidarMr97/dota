import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/ogre/1.jpg" alt="اوگر" />
            <img src="/images/heros/ogre/2.jpg" alt="اوگر1" />
            <img src="/images/heros/ogre/3.jpg" alt="اوگر2" />
            <img src="/images/heros/ogre/4.jpg" alt="اوگر3" />
            <img src="/images/heros/ogre/5.jpg" alt="اوگر4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null" ,alt:"سول"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" ,alt:"میداس هند"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک دگر"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},]} />
            </div>
        </div>
    )
}