import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/invoker/1.jpg" alt="اینووکر" />
            <img src="/images/heros/invoker/2.jpg" alt="اینووکر1" />
            <img src="/images/heros/invoker/3.jpg" alt="اینووکر2" />
            <img src="/images/heros/invoker/4.jpg" alt="اینووکر3" />
            <img src="/images/heros/invoker/5.jpg" alt="اینووکر4" />
            <img src="/images/heros/invoker/6.jpg" alt="اینووکر5" />
            <img src="/images/heros/invoker/7.jpg" alt="اینووکر6" />
            <img src="/images/heros/invoker/8.jpg" alt="اینووکر7" />
            <img src="/images/heros/invoker/9.jpg" alt="اینووکر8" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" ,alt:"میداس هند"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},
                    { href: "/items/arcane/eul", img: "/images/items/arcane/eul.png", className: "null" ,alt:"ائول"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک دگر"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" ,alt:"رفرش ارب"},]} />
            </div>
        </div>
    )
}