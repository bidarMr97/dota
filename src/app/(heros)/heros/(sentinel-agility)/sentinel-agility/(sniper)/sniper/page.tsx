import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/dwaren/1.jpg" alt="" />
            <img src="/images/heros/dwaren/2.jpg" alt="" />
            <img src="/images/heros/dwaren/3.jpg" alt="" />
            <img src="/images/heros/dwaren/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/gleipnir", img: "/images/items/trophy/gleipnir.png", className: "null" },
                    { href: "/items/trophy/pike", img: "/images/items/trophy/pike.png", className: "null" },
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },]} />
            </div>
        </div>
    )
}