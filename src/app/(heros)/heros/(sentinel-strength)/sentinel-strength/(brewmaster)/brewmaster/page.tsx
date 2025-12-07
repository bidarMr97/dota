import Table from "@/components/table/page";

export default function BrewMaster() {
    return (
        <div>
            <img src="/images/heros/brewmaster/1.jpg" alt="" />
            <img src="/images/heros/brewmaster/2.jpg" alt="" />
            <img src="/images/heros/brewmaster/3.jpg" alt="" />
            <img src="/images/heros/brewmaster/4.jpg" alt="" />
            <img src="/images/heros/brewmaster/5.jpg" alt="" />
            <img src="/images/heros/brewmaster/6.jpg" alt="" />
            <img src="/images/heros/brewmaster/7.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/trophy/halberd", img: "/images/items/trophy/halberd.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" },]} />
            </div>
        </div>
    )
}