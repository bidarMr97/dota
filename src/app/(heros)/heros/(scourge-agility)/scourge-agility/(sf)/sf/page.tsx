import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/sf/1.jpg" alt="" />
            <img src="/images/heros/sf/2.jpg" alt="" />
            <img src="/images/heros/sf/3.jpg" alt="" />
            <img src="/images/heros/sf/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" },
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" },
                    { href: "/items/trophy/arcane", img: "/images/items/trophy/arcane.png", className: "null" },
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },]} />
            </div>
        </div>
    )
}