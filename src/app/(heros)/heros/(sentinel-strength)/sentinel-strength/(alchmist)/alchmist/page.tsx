import Table from "@/components/table/page";

export default function Alchmist() {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/alchmist/1.jpg" alt="آلکمیست"/>
            <img src="/images/heros/alchmist/2.jpg" alt="1آلکمیست"/>
            <img src="/images/heros/alchmist/3.jpg" alt="2آلکمیست"/>
            <img src="/images/heros/alchmist/4.jpg" alt="3آلکمیست"/>
            <img src="/images/heros/alchmist/5.jpg" alt="4آلکمیست"/>
            </div>
            <div>
                <Table data={[
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/weapons/queling", img: "/images/items/weapons/queling.png", className: "null" ,alt:"کویلینگ بلید"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/ancient/kayanon", img: "/images/items/ancient/kayanon.png", className: "null" ,alt:"کریتیکال"},
                    { href: "/items/enchanted/manta", img: "/images/items/enchanted/manta.png", className: "null" ,alt:"منتا"},
                    { href: "/items/trophy/swift", img: "/images/items/trophy/swift.png", className: "null" ,alt:"سوییفت"},
                    { href: "/items/ancient/abyssal", img: "/images/items/ancient/abyssal.png", className: "null" ,alt:"ابیسال"},
                    { href: "/items/protector/assault", img: "/images/items/protector/assault.png", className: "null" ,alt:"اسالت"},
                    { href: "/items/trophy/skadi", img: "/images/items/trophy/skadi.png", className: "null" ,alt:"اسکیدی"},]} />
            </div>
        </div>
    )
}
