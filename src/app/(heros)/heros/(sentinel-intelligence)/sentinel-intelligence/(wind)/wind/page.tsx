import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/wind/1.jpg" alt="" />
            <img src="/images/heros/wind/2.jpg" alt="" />
            <img src="/images/heros/wind/3.jpg" alt="" />
            <img src="/images/heros/wind/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" },
                    { href: "/items/gateway/oblivion", img: "/images/items/gateway/oblivion.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/mjollnir", img: "/images/items/enchanted/mjollnir.png", className: "null" },
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" },
                    { href: "/items/enchanted/diffusal", img: "/images/items/enchanted/diffusal.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },]} />
            </div>
        </div>
    )
}