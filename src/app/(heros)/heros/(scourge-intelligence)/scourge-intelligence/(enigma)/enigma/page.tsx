import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/enigma/1.jpg" alt="انیگما" />
            <img src="/images/heros/enigma/2.jpg" alt="انیگما1" />
            <img src="/images/heros/enigma/3.jpg" alt="انیگما2" />
            <img src="/images/heros/enigma/4.jpg" alt="انیگما3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" ,alt:"بی کی بی"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"ریدینس"},]} />
            </div>
        </div>
    )
}