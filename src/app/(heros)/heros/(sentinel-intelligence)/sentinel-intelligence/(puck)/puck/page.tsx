import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/puck/1.jpg" alt="" />
            <img src="/images/heros/puck/2.jpg" alt="" />
            <img src="/images/heros/puck/3.jpg" alt="" />
            <img src="/images/heros/puck/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/market/venom", img: "/images/items/market/venom.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" },
                    { href: "/items/arcane/witch", img: "/images/items/arcane/witch.png", className: "null" },]} />
            </div>
        </div>
    )
}