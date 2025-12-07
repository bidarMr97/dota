import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/shadowshaman/1.jpg" alt="" />
            <img src="/images/heros/shadowshaman/2.jpg" alt="" />
            <img src="/images/heros/shadowshaman/3.jpg" alt="" />
            <img src="/images/heros/shadowshaman/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "/items/wonders/healing", img: "/images/items/wonders/healing.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/protector/aeon", img: "/images/items/protector/aeon.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },]} />
            </div>
        </div>
    )
}