import Table from "@/components/table/page";

export default function Phoenix() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/phoenix/1.jpg" alt="فونیکس" />
            <img src="/images/heros/phoenix/2.jpg" alt="فونیکس1" />
            <img src="/images/heros/phoenix/3.jpg" alt="فونیکس2" />
            <img src="/images/heros/phoenix/4.jpg" alt="فونیکس3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/cache/speed", img: "/images/items/cache/speed.png", className: "null" ,alt:"اسپید"},
                    ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" ,alt:"شیوازگارد"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"رادیانس"},]} />
            </div>
        </div>
    )
}