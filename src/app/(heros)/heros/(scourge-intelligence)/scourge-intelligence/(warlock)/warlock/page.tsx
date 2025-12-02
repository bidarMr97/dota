import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/warlock/1.jpg" alt="" />
            <img src="/images/heros/warlock/2.jpg" alt="" />
            <img src="/images/heros/warlock/3.jpg" alt="" />
            <img src="/images/heros/warlock/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/cache/wind", img: "/images/items/cache/wind.png", className: "null" },
                    { href: "/items/supportive/urn", img: "/images/items/supportive/urn.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" },
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },]} />
            </div>
        </div>
    )
}