import Table from "@/components/table/page";

export default function Tiny() {
    return (
        <div>
            <img src="/images/heros/tiny/1.jpg" alt="" />
            <img src="/images/heros/tiny/2.jpg" alt="" />
            <img src="/images/heros/tiny/3.jpg" alt="" />
            <img src="/images/heros/tiny/4.jpg" alt="" />
            <img src="/images/heros/tiny/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" },
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" },
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" },
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },]} />
            </div>
        </div>
    )
}