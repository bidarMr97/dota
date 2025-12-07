import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/rubick/1.jpg" alt="" />
            <img src="/images/heros/rubick/2.jpg" alt="" />
            <img src="/images/heros/rubick/3.jpg" alt="" />
            <img src="/images/heros/rubick/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },
                    { href: "/items/trophy/arcane", img: "/images/items/trophy/arcane.png", className: "null" },
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },]} />
            </div>
        </div>
    )
}