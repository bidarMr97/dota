import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/venomancer/1.jpg" alt="" />
            <img src="/images/heros/venomancer/2.jpg" alt="" />
            <img src="/images/heros/venomancer/3.jpg" alt="" />
            <img src="/images/heros/venomancer/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" },
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/arcane/witch", img: "/images/items/arcane/witch.png", className: "null" },]} />
            </div>
        </div>
    )
}