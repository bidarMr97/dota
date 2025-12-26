import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/slayer/1.jpg" alt="لینا" />
            <img src="/images/heros/slayer/2.jpg" alt="لینا1" />
            <img src="/images/heros/slayer/3.jpg" alt="لینا2" />
            <img src="/images/heros/slayer/4.jpg" alt="لینا3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوتس"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/market/venom", img: "/images/items/market/venom.png", className: "null" ,alt:"ونوم"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" ,alt:"بلک کینگ بار"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سوییفت"},
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" ,alt:"بلادثورن"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},]} />
            </div>
        </div>
    )
}