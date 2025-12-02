import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/arc/1.jpg" alt="" />
            <img src="/images/heros/arc/2.jpg" alt="" />
            <img src="/images/heros/arc/3.jpg" alt="" />
            <img src="/images/heros/arc/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gryla/branch", img: "/images/items/gryla/branch.png", className: "null" },
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/supportive/medalion", img: "/images/items/supportive/medalion.png", className: "null" },
                    { href: "/items/enchanted/yasha", img: "/images/items/enchanted/yasha.png", className: "null" },
                    { href: "/items/laregas/ultimate", img: "/images/items/laregas/ultimate.png", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },]} />
            </div>
        </div>
    )
}