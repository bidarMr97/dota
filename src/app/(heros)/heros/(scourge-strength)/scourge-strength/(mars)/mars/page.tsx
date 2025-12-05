import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/mars/1.jpg" alt="" />
            <img src="/images/heros/mars/2.jpg" alt="" />
            <img src="/images/heros/mars/3.jpg" alt="" />
            <img src="/images/heros/mars/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" },
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" },
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" },
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },]} />
            </div>
        </div>
    )
}