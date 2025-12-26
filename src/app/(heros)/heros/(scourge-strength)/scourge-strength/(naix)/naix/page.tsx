import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/naix/1.jpg" alt="" />
            <img src="/images/heros/naix/2.jpg" alt="" />
            <img src="/images/heros/naix/3.jpg" alt="" />
            <img src="/images/heros/naix/4.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" ,alt:"ارملت"},
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" ,alt:"مونشارد"},
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:"سولار"},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:"اسالت"},]} />
            </div>
        </div>
    )
}