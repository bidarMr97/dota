import Table from "@/components/table/page";

export default function Alchmist() {
    return (
        <div>
            <img src="/images/heros/alchmist/1.jpg" alt="" />
            <img src="/images/heros/alchmist/2.jpg" alt="" />
            <img src="/images/heros/alchmist/3.jpg" alt="" />
            <img src="/images/heros/alchmist/4.jpg" alt="" />
            <img src="/images/heros/alchmist/5.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" },
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" },
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" },
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" },
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" },]} />
            </div>
        </div>
    )
}
