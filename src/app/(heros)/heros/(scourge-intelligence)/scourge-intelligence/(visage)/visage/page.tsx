import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/visage/1.jpg" alt="" />
            <img src="/images/heros/visage/2.jpg" alt="" />
            <img src="/images/heros/visage/3.jpg" alt="" />
            <img src="/images/heros/visage/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },
                    { href: "/items/enchanted/null", img: "/images/items/enchanted/null.png", className: "null" },
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },]} />
            </div>
        </div>
    )
}