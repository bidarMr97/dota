import Table from "@/components/table/page";

export default function Huskar() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/huskar/1.jpg" alt="هوسکار" />
            <img src="/images/heros/huskar/2.jpg" alt="هوسکار1" />
            <img src="/images/heros/huskar/3.jpg" alt="هوسکار2" />
            <img src="/images/heros/huskar/4.jpg" alt="هوسکار3" />
            <img src="/images/heros/huskar/5.jpg" alt="هوسکار4" />
            <img src="/images/heros/huskar/6.jpg" alt="هوسکار5" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/mjollnir", img: "/images/items/enchanted/mjollnir.png", className: "null" ,alt:"میولنیر"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" ,alt:"ارملت"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},]} />
            </div>
        </div>
    )
}