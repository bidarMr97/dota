import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/krobleus/1.jpg" alt="" />
            <img src="/images/heros/krobleus/2.jpg" alt="" />
            <img src="/images/heros/krobleus/3.jpg" alt="" />
            <img src="/images/heros/krobleus/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" },
                    { href: "/items/todd/sang-kaya", img: "/images/items/todd/sang-kaya.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },]} />
            </div>
        </div>
    )
}