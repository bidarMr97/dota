import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/doom/1.jpg" alt="" />
            <img src="/images/heros/doom/2.jpg" alt="" />
            <img src="/images/heros/doom/3.jpg" alt="" />
            <img src="/images/heros/doom/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" },
                    { href: "/items/ancient/lothar", img: "/images/items/ancient/lothar.png", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/ancient/silver", img: "/images/items/ancient/silver.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },]} />
            </div>
        </div>
    )
}