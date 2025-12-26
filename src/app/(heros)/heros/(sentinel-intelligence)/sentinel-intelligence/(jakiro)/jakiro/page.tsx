import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/jakiro/1.jpg" alt="جاکیرو" />
            <img src="/images/heros/jakiro/2.jpg" alt="جاکیرو1" />
            <img src="/images/heros/jakiro/3.jpg" alt="جاکیرو2" />
            <img src="/images/heros/jakiro/4.jpg" alt="جاکیرو3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/potion", img: "/images/items/wonders/potion.png", className: "null" ,alt:"پوشن"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/trophy/gleipnir", img: "/images/items/trophy/gleipnir.png", className: "null" ,alt:"گلیپنیر"},
                    { href: "/items/arcane/veli", img: "/images/items/arcane/veli.png", className: "null" ,alt:"ولی"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/arcane/ethereal", img: "/images/items/arcane/ethereal.png", className: "null" ,alt:"اتریل"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},]} />
            </div>
        </div>
    )
}