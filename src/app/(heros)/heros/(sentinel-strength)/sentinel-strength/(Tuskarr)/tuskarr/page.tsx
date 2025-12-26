import Table from "@/components/table/page";

export default function Tuskar() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/tuskarr/1.jpg" alt="توسکار" />
            <img src="/images/heros/tuskarr/2.jpg" alt="توسکار1" />
            <img src="/images/heros/tuskarr/3.jpg" alt="توسکار2" />
            <img src="/images/heros/tuskarr/4.jpg" alt="توسکار3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/weapons/blight", img: "/images/items/weapons/blight.png", className: "null" ,alt:"بلایت استون"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سوییفت"},
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:"دزولیتر"},
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:"اسالت"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},]} />
            </div>
        </div>
    )
}