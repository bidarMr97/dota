import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/shadowdemon/1.jpg" alt="" />
            <img src="/images/heros/shadowdemon/2.jpg" alt="" />
            <img src="/images/heros/shadowdemon/3.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/wonders/mango", img: "/images/items/wonders/mango.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" },
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" },
                    { href: "/items/arcane/meteor", img: "/images/items/arcane/meteor.png", className: "null" },
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },]} />
            </div>
        </div>
    )
}