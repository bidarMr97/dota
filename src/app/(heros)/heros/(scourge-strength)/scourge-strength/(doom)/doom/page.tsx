import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/doom/1.jpg" alt="" />
            <img src="/images/heros/doom/2.jpg" alt="" />
            <img src="/images/heros/doom/3.jpg" alt="" />
            <img src="/images/heros/doom/4.jpg" alt="" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کوئلینگ"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                    { href: "/items/gateway/hand", img: "/images/items/gateway/hand.jpg", className: "null" ,alt:"میداس هند"},
                    { href: "/items/ancient/lothar", img: "/images/items/ancient/lothar.png", className: "null" ,alt:"لوتارز اج"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" ,alt:"بلید"},
                    { href: "/items/protector/shiva", img: "/images/items/protector/shiva.png", className: "null" ,alt:"شیوا"},
                    { href: "/items/gateway/boots", img: "/images/items/gateway/boots.png", className: "null" ,alt:"تراول بوتس"},
                    { href: "/items/ancient/silver", img: "/images/items/ancient/silver.png", className: "null" ,alt:"سیلور"},
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" ,alt:"سنگ یاشا"},
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:"اسالت"},]} />
            </div>
        </div>
    )
}