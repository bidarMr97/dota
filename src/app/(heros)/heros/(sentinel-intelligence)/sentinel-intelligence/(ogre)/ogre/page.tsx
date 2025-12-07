import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/ogre/1.jpg" alt="" />
            <img src="/images/heros/ogre/2.jpg" alt="" />
            <img src="/images/heros/ogre/3.jpg" alt="" />
            <img src="/images/heros/ogre/4.jpg" alt="" />
            <img src="/images/heros/ogre/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/soul", img: "/images/items/gateway/soul.jpg", className: "null" },
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" },
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" },
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },]} />
            </div>
        </div>
    )
}