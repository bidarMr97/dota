import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/xin/1.jpg" alt="" />
            <img src="/images/heros/xin/2.jpg" alt="" />
            <img src="/images/heros/xin/3.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },]} />
            </div>
        </div>
    )
}