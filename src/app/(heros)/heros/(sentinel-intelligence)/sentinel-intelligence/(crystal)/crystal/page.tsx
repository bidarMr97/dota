import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/crystal/1.jpg" alt="کریستال میدن" />
            <img src="/images/heros/crystal/2.jpg" alt="کریستال میدن1" />
            <img src="/images/heros/crystal/3.jpg" alt="کریستال میدن2" />
            <img src="/images/heros/crystal/4.jpg" alt="کریستال میدن3" /></div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" ,alt:"بلک کینگ بار"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک دگر"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},]} />
            </div>
        </div>
    )
}