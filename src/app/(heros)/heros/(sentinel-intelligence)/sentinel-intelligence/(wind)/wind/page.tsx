import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/wind/1.jpg" alt="ویندرانر" />
            <img src="/images/heros/wind/2.jpg" alt="ویندرانر1" />
            <img src="/images/heros/wind/3.jpg" alt="ویندرانر2" />
            <img src="/images/heros/wind/4.jpg" alt="ویندرانر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" ,alt:"ابلیوین"},
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" ,alt:"ابلیوین1"},
                 ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" ,alt:"بلادثورن"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/enchanted/mjollnir", img: "/images/items/enchanted/mjollnir.png", className: "null" ,alt:"میولنیر"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سوییفت"},
                    { href: "/items/enchanted/diffusal", img: "/images/items/enchanted/diffusal.png", className: "null" ,alt:"دیفیوزال"},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:"سیتنیک"},]} />
            </div>
        </div>
    )
}