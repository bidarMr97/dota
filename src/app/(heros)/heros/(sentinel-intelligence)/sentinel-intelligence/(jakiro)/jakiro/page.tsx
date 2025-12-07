import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/jakiro/1.jpg" alt="" />
            <img src="/images/heros/jakiro/2.jpg" alt="" />
            <img src="/images/heros/jakiro/3.jpg" alt="" />
            <img src="/images/heros/jakiro/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/trophy/gleipnir", img: "/images/items/trophy/gleipnir.png", className: "null" },
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },]} />
            </div>
        </div>
    )
}