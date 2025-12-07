import Table from "@/components/table/page";

export default function Treant() {
    return (
        <div>
            <img src="/images/heros/treant/1.jpg" alt="" />
            <img src="/images/heros/treant/2.jpg" alt="" />
            <img src="/images/heros/treant/3.jpg" alt="" />
            <img src="/images/heros/treant/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" },
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" },
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },]} />
            </div>
        </div>
    )
}