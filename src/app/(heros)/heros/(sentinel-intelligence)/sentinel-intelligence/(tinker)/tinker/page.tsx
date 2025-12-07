import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/tinker/1.jpg" alt="" />
            <img src="/images/heros/tinker/2.jpg" alt="" />
            <img src="/images/heros/tinker/3.jpg" alt="" />
            <img src="/images/heros/tinker/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/wonders/fire", img: "/images/items/wonders/fire.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" },
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/arcane/dagon", img: "/images/items/arcane/dagon.png", className: "null" },]} />
            </div>
        </div>
    )
}