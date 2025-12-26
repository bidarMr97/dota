import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/weaver/1.jpg" alt="ویور" />
            <img src="/images/heros/weaver/2.jpg" alt="ویور1" />
            <img src="/images/heros/weaver/3.jpg" alt="ویور2" />
            <img src="/images/heros/weaver/4.jpg" alt="ویور3" />
            </div>
            <div>
                <Table data={[
                    { href: "/items/gateway/wraith", img: "/images/items/gateway/wraith.png", className: "null" ,alt:"ریث"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/power", img: "/images/items/gateway/power.png", className: "null" ,alt:"پاوربوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"ریدینس"},
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" ,alt:"تیپی اپ"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" ,alt:"اسکیدی"},]} />
            </div>
        </div>
    )
}