import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/bat/1.jpg" alt="" />
            <img src="/images/heros/bat/2.jpg" alt="" />
            <img src="/images/heros/bat/3.jpg" alt="" />
            <img src="/images/heros/bat/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" },
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/arcane/force", img: "/images/items/arcane/force.png", className: "null" },
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" },
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" },]} />
            </div>
        </div>
    )
}