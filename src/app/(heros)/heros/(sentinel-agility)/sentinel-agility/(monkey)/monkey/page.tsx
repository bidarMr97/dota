import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/monkey/1.jpg" alt="" />
            <img src="/images/heros/monkey/2.jpg" alt="" />
            <img src="/images/heros/monkey/3.jpg" alt="" />
            <img src="/images/heros/monkey/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" },
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" },
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },]} />
            </div>
        </div>
    )
}