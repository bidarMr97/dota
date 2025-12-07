import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/vengeful/1.jpg" alt="" />
            <img src="/images/heros/vengeful/2.jpg" alt="" />
            <img src="/images/heros/vengeful/3.jpg" alt="" />
            <img src="/images/heros/vengeful/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/supportive/medalion", img: "/images/items/supportive/medalion.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/helm", img: "/images/items/enchanted/helm.png", className: "null" },
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },]} />
            </div>
        </div>
    )
}