import Table from "@/components/table/page";

export default function DragonKnight() {
    return (
        <div>
            <img src="/images/heros/dragon/1.jpg" alt="" />
            <img src="/images/heros/dragon/2.jpg" alt="" />
            <img src="/images/heros/dragon/3.jpg" alt="" />
            <img src="/images/heros/dragon/4.jpg" alt="" />
            <img src="/images/heros/dragon/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/enchanted/mjollnir", img: "/images/items/enchanted/mjollnir.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },]} />
            </div>
        </div>
    )
}