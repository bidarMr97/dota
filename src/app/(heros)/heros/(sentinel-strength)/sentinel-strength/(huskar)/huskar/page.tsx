import Table from "@/components/table/page";

export default function Huskar() {
    return (
        <div>
            <img src="/images/heros/huskar/1.jpg" alt="" />
            <img src="/images/heros/huskar/2.jpg" alt="" />
            <img src="/images/heros/huskar/3.jpg" alt="" />
            <img src="/images/heros/huskar/4.jpg" alt="" />
            <img src="/images/heros/huskar/5.jpg" alt="" />
            <img src="/images/heros/huskar/6.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/mjollnir", img: "/images/items/enchanted/mjollnir.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },]} />
            </div>
        </div>
    )
}