import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/gondar/1.jpg" alt="" />
            <img src="/images/heros/gondar/2.jpg" alt="" />
            <img src="/images/heros/gondar/3.jpg" alt="" />
            <img src="/images/heros/gondar/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" },
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" },
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" },
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" },
                    { href: "/items/ancient/bloodthorn", img: "/images/items/ancient/bloodthorn.png", className: "null" },
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" },
                    { href: "/items/enchanted/null", img: "/images/items/enchanted/null.png", className: "null" },]} />
            </div>
        </div>
    )
}