import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/gyro/1.jpg" alt="" />
            <img src="/images/heros/gyro/2.jpg" alt="" />
            <img src="/images/heros/gyro/3.jpg" alt="" />
            <img src="/images/heros/gyro/4.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوتس"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" ,alt:"اسکیدی"},
                    { href: "/items/enchanted/helm", img: "/images/items/enchanted/helm.png", className: "null" ,alt:"هلم اف دامینیتر"},
                    { href: "/items/enchanted/maelstrom", img: "/images/items/enchanted/maelstrom.png", className: "null" ,alt:"مائل استروم"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},]} />
            </div>
        </div>
    )
}