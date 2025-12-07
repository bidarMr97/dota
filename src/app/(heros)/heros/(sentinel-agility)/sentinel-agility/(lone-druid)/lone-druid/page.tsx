import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/lone/1.jpg" alt="" />
            <img src="/images/heros/lone/2.jpg" alt="" />
            <img src="/images/heros/lone/3.jpg" alt="" />
            <img src="/images/heros/lone/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" },
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/todd/moonshard", img: "/images/items/todd/moonshard.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },]} />
            </div>
        </div>
    )
}