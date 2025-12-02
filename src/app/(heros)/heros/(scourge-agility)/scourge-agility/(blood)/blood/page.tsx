import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/blood/1.jpg" alt="" />
            <img src="/images/heros/blood/2.jpg" alt="" />
            <img src="/images/heros/blood/3.jpg" alt="" />
            <img src="/images/heros/blood/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/supportive/ring", img: "/images/items/supportive/ring.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/weapons/ironwill", img: "/images/items/weapons/ironwill.png", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "" },
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },]} />
            </div>
        </div>
    )
}