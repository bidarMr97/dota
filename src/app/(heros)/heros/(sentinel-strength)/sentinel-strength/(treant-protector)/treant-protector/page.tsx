import Table from "@/components/table/page";

export default function Treant() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/treant/1.jpg" alt="ترنت" />
            <img src="/images/heros/treant/2.jpg" alt="ترنت1" />
            <img src="/images/heros/treant/3.jpg" alt="ترنت2" />
            <img src="/images/heros/treant/4.jpg" alt="ترنت3" /></div>
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/guardian", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" ,alt:"لوتوس ارب"},
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" ,alt:"رفرش"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"ریدینس"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"اکتارین کور"},]} />
            </div>
        </div>
    )
}