import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/ezalor/1.jpg" alt="ازالر" />
            <img src="/images/heros/ezalor/2.jpg" alt="ازالر1" />
            <img src="/images/heros/ezalor/3.jpg" alt="ازالر2" />
            <img src="/images/heros/ezalor/4.jpg" alt="ازالر3" />
            <img src="/images/heros/ezalor/5.jpg" alt="ازالر4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن1"},
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" ,alt:"هکس"},
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" ,alt:"تی پی آپ"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/refresh", img: "/images/items/arcane/refresh.png", className: "null" ,alt:"رفرش ارب"},
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" ,alt:"یاشاکایا"},]} />
            </div>
        </div>
    )
}