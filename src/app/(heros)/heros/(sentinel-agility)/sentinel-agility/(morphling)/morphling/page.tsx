import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/murphling/1.jpg" alt="" />
            <img src="/images/heros/murphling/2.jpg" alt="" />
            <img src="/images/heros/murphling/3.jpg" alt="" />
            <img src="/images/heros/murphling/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },]} />
            </div>
        </div>
    )
}