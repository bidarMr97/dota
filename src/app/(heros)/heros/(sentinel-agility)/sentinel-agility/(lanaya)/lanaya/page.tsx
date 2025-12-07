import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/lanaya/1.jpg" alt="" />
            <img src="/images/heros/lanaya/2.jpg" alt="" />
            <img src="/images/heros/lanaya/3.jpg" alt="" />
            <img src="/images/heros/lanaya/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/pike", img: "/images/items/trophy/pike.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },]} />
            </div>
        </div>
    )
}