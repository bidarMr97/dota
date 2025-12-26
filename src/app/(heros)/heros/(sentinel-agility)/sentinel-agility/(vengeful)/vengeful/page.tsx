import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/vengeful/1.jpg" alt="" />
            <img src="/images/heros/vengeful/2.jpg" alt="" />
            <img src="/images/heros/vengeful/3.jpg" alt="" />
            <img src="/images/heros/vengeful/4.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/supportive/medalion", img: "/images/items/supportive/medalion.png", className: "null" ,alt:""},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:""},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:""},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:""},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/helm", img: "/images/items/enchanted/helm.png", className: "null" ,alt:""},
                    { href: "/items/ancient/butterfly", img: "/images/items/ancient/butterfly.png", className: "null" ,alt:""},
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null" ,alt:""},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:""},]} />
            </div>
        </div>
    )
}