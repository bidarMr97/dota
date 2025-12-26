import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/leshrac/1.jpg" alt="لشراک" />
            <img src="/images/heros/leshrac/2.jpg" alt="لشراک1" />
            <img src="/images/heros/leshrac/3.jpg" alt="لشراک2" />
            <img src="/images/heros/leshrac/4.jpg" alt="لشراک3" />
            <img src="/images/heros/leshrac/5.jpg" alt="لشراک4" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/protector/blood", img: "/images/items/protector/blood.png", className: "null" ,alt:"بلادتورن"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},]} />
            </div>
        </div>
    )
}