import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/crystal/1.jpg" alt="" />
            <img src="/images/heros/crystal/2.jpg" alt="" />
            <img src="/images/heros/crystal/3.jpg" alt="" />
            <img src="/images/heros/crystal/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" },
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" },
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },]} />
            </div>
        </div>
    )
}