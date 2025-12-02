import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/razor/1.jpg" alt="" />
            <img src="/images/heros/razor/2.jpg" alt="" />
            <img src="/images/heros/razor/3.jpg" alt="" />
            <img src="/images/heros/razor/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },]} />
            </div>
        </div>
    )
}