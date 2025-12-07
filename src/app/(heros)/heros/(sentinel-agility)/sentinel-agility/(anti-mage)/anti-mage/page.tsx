import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/antimage/1.jpg" alt="" />
            <img src="/images/heros/antimage/2.jpg" alt="" />
            <img src="/images/heros/antimage/3.jpg" alt="" />
            <img src="/images/heros/antimage/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" },
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },]} />
            </div>
        </div>
    )
}