import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/siren/1.jpg" alt="" />
            <img src="/images/heros/siren/2.jpg" alt="" />
            <img src="/images/heros/siren/3.jpg" alt="" />
            <img src="/images/heros/siren/4.jpg" alt="" />
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
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/supportive/vladmir", img: "/images/items/supportive/vladmir.png", className: "null" },
                    { href: "/items/enchanted/diffusal", img: "/images/items/enchanted/diffusal.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },]} />
            </div>
        </div>
    )
}