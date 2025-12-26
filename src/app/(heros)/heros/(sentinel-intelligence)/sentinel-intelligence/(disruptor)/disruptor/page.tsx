import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/disruptor/1.jpg" alt="دیسراپتر" />
            <img src="/images/heros/disruptor/2.jpg" alt="دیسراپتر1" />
            <img src="/images/heros/disruptor/3.jpg" alt="دیسراپتر2" />
            <img src="/images/heros/disruptor/4.jpg" alt="دیسراپتر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ2"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" ,alt:"ولی"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" ,alt:"یاشاکایا"},]} />
            </div>
        </div>
    )
}