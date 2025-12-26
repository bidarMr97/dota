import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/necro/1.jpg" alt="نکرولایت" />
            <img src="/images/heros/necro/2.jpg" alt="نکرولایت1" />
            <img src="/images/heros/necro/3.jpg" alt="نکرولایت2" />
            <img src="/images/heros/necro/4.jpg" alt="نکرولایت3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیز بوت"},
                 ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اوورویم"},
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" ,alt:"پایپ"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوت"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"ریدینس"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},]} />
            </div>
        </div>
    )
}