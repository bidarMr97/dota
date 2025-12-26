import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/viper/1.jpg" alt="وایپر1" />
            <img src="/images/heros/viper/2.jpg" alt="وایپر2" />
            <img src="/images/heros/viper/3.jpg" alt="وایپر3" />
            <img src="/images/heros/viper/4.jpg" alt="وایپر4" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" ,alt:"ریث"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سویفت"},
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" ,alt:"ارملت"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/arcane/witch", img: "/images/items/arcane/witch.png", className: "null" ,alt:"ویچ بلید"},]} />
            </div>
        </div>
    )
}