import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/guard/1.jpg" alt="" />
            <img src="/images/heros/guard/2.jpg" alt="" />
            <img src="/images/heros/guard/3.jpg" alt="" />
            <img src="/images/heros/guard/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" },
                    { href: "/item/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },]} />
            </div>
        </div>
    )
}