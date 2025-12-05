import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/tide/1.jpg" alt="" />
            <img src="/images/heros/tide/2.jpg" alt="" />
            <img src="/images/heros/tide/3.jpg" alt="" />
            <img src="/images/heros/tide/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/ancient/battle", img: "/images/items/ancient/battle.png", className: "null" },
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },]} />
            </div>
        </div>
    )
}