import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/luna/1.jpg" alt="" />
            <img src="/images/heros/luna/2.jpg" alt="" />
            <img src="/images/heros/luna/3.jpg" alt="" />
            <img src="/images/heros/luna/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/enchanted/helm", img: "/images/items/enchanted/helm.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/ancient/silver", img: "/images/items/ancient/silver.png", className: "null" },
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" },
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" },
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },]} />
            </div>
        </div>
    )
}