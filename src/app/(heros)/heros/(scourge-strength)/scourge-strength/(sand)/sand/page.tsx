import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/sand/1.jpg" alt="" />
            <img src="/images/heros/sand/2.jpg" alt="" />
            <img src="/images/heros/sand/3.jpg" alt="" />
            <img src="/images/heros/sand/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" },
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },]} />
            </div>
        </div>
    )
}