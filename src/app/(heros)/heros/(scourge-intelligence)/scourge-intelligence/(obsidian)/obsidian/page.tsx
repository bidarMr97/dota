import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/obsidian/1.jpg" alt="" />
            <img src="/images/heros/obsidian/2.jpg" alt="" />
            <img src="/images/heros/obsidian/3.jpg" alt="" />
            <img src="/images/heros/obsidian/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },
                    { href: "/items/arcane/meteor", img: "/images/items/arcane/meteor.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },]} />
            </div>
        </div>
    )
}