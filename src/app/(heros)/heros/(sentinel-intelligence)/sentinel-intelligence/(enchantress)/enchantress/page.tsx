import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/enchantress/1.jpg" alt="" />
            <img src="/images/heros/enchantress/2.jpg" alt="" />
            <img src="/images/heros/enchantress/3.jpg" alt="" />
            <img src="/images/heros/enchantress/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/pike", img: "/images/items/trophy/pike.png", className: "null" },
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" },]} />
            </div>
        </div>
    )
}