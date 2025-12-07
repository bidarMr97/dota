import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/rikimaru/1.jpg" alt="" />
            <img src="/images/heros/rikimaru/2.jpg" alt="" />
            <img src="/images/heros/rikimaru/3.jpg" alt="" />
            <img src="/images/heros/rikimaru/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/enchanted/diffusal", img: "/images/items/enchanted/diffusal.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },]} />
            </div>
        </div>
    )
}