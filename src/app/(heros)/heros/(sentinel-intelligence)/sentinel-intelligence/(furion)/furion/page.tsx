import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/furion/1.jpg" alt="" />
            <img src="/images/heros/furion/2.jpg" alt="" />
            <img src="/images/heros/furion/3.jpg" alt="" />
            <img src="/images/heros/furion/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/mjollnir", img: "/images/items/enchanted/mjollnir.png", className: "null" },
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" },]} />
            </div>
        </div>
    )
}