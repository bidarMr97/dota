import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/slayer/1.jpg" alt="" />
            <img src="/images/heros/slayer/2.jpg" alt="" />
            <img src="/images/heros/slayer/3.jpg" alt="" />
            <img src="/images/heros/slayer/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/market/venom", img: "/images/items/market/venom.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" },
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" },
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },]} />
            </div>
        </div>
    )
}