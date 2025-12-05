import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/naix/1.jpg" alt="" />
            <img src="/images/heros/naix/2.jpg" alt="" />
            <img src="/images/heros/naix/3.jpg" alt="" />
            <img src="/images/heros/naix/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" },
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" },
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },]} />
            </div>
        </div>
    )
}