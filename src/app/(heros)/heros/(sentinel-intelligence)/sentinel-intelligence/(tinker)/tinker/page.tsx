import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/tinker/1.jpg" alt="تینکر" />
            <img src="/images/heros/tinker/2.jpg" alt="تینکر1" />
            <img src="/images/heros/tinker/3.jpg" alt="تینکر2" />
            <img src="/images/heros/tinker/4.jpg" alt="تینکر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/wonders/fire", img: "/images/items/wonders/fire.png", className: "null" ,alt:"فایر"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" ,alt:"شیوا"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" ,alt:""},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:""},
                    { href: "/items/arcane/dagon", img: "/images/items/arcane/dagon.png", className: "null" ,alt:""},]} />
            </div>
        </div>
    )
}