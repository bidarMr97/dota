import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/ursa/1.jpg" alt="" />
            <img src="/images/heros/ursa/2.jpg" alt="" />
            <img src="/images/heros/ursa/3.jpg" alt="" />
            <img src="/images/heros/ursa/4.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:""},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:""},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:""},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/satanic", img: "/images/items/enchanted/satanic.png", className: "null" ,alt:""},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:""},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:""},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:""},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:""},]} />
            </div>
        </div>
    )
}