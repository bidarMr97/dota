import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/magnatur/1.jpg" alt="" />
            <img src="/images/heros/magnatur/2.jpg" alt="" />
            <img src="/images/heros/magnatur/3.jpg" alt="" />
            <img src="/images/heros/magnatur/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/cache/sobi", img: "/images/items/cache/sobi.png", className: "null" },
                    { href: "/items/gryla/robi", img: "/images/items/gryla/robi.png", className: "null" },
                    { href: "/items/cache/death", img: "/images/items/cache/death.png", className: "null" },
                    { href: "/item/cache/speed", img: "/images/items/cache/speed.png", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" },
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },]} />
            </div>
        </div>
    )
}