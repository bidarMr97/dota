import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/dwaren/1.jpg" alt="دوارن اسنایپر" />
            <img src="/images/heros/dwaren/2.jpg" alt="1دوارن اسنایپر" />
            <img src="/images/heros/dwaren/3.jpg" alt="دوارن اسنایپر2" />
            <img src="/images/heros/dwaren/4.jpg" alt="دوارن اسنایپر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null", alt: "تانگو" },
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null", alt: "مجیک استیک" },
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null", alt: "فیزیوتس" },
                 ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/gleipnir", img: "/images/items/trophy/gleipnir.png", className: "null", alt: "گلیپنیر" },
                    { href: "/items/trophy/pike", img: "/images/items/trophy/pike.png", className: "null", alt: "پایک" },
                    { href: "/items/enchanted/mask", img: "/images/items/enchanted/mask.png", className: "null", alt: "مسک" },
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null", alt: "تراول بوتس" },
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null", alt: "کریتیکال" },
                    { href: "/items/enchanted/desolator", img: "/images/items/enchanted/desolator.png", className: "null", alt: "دزولیتر" },]} />
            </div>
        </div>
    )
}