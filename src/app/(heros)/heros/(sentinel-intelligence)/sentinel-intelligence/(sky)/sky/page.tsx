import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/skywrath/1.jpg" alt="" />
            <img src="/images/heros/skywrath/2.jpg" alt="" />
            <img src="/images/heros/skywrath/3.jpg" alt="" />
            <img src="/images/heros/skywrath/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" },
                    { href: "/items/gryla/crown", img: "/images/items/gryla/crown.png", className: "null" },
                    { href: "/items/gryla/crown", img: "/images/items/gryla/crown.png", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/arcane/rod", img: "/images/items/arcane/rod.png", className: "null" },
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/protector/aeon", img: "/images/items/protector/aeon.png", className: "null" },
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" },]} />
            </div>
        </div>
    )
}