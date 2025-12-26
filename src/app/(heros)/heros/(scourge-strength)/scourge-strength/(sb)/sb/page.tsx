import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/sb/1.jpg" alt="اسپیریت برکر" />
            <img src="/images/heros/sb/2.jpg" alt="اسپیریت برکر1" />
            <img src="/images/heros/sb/3.jpg" alt="اسپیریت برکر2" />
            <img src="/images/heros/sb/4.jpg" alt="اسپیریت برکر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                    { href: "/items/cache/death", img: "/images/items/cache/death.png", className: "null" ,alt:"دث"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" ,alt:"مسک"},
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" ,alt:"سنگ یاشا"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد1"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},]} />
            </div>
        </div>
    )
}