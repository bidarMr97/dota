import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/mars/1.jpg" alt="مارس" />
            <img src="/images/heros/mars/2.jpg" alt="مارس1" />
            <img src="/images/heros/mars/3.jpg" alt="2مارس" />
            <img src="/images/heros/mars/4.jpg" alt="مارس3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/echo", img: "/images/items/ancient/echo.png", className: "null" ,alt:"اکو"},
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:"اسالت"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اورویم"},
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" ,alt:"بلید"},
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" ,alt:"سنگ یاشا"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},]} />
            </div>
        </div>
    )
}