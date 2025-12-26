import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/blood/1.jpg" alt="بلادسیکر" />
            <img src="/images/heros/blood/2.jpg" alt="بلادسیکر" />
            <img src="/images/heros/blood/3.jpg" alt="بلادسیکر" />
            <img src="/images/heros/blood/4.jpg" alt="بلادسیکر" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/ring", img: "/images/items/supportive/ring.png", className: "null" ,alt:"رینگ"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                    { href: "/items/weapons/ironwill", img: "/images/items/weapons/ironwill.png", className: "null" ,alt:"ایرنویل"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aquila", img: "/images/items/todd/aquila.png", className: "null" ,alt:"اکویلا"},
                    { href: "/items/ancient/armlet", img: "/images/items/ancient/armlet.png", className: "null" ,alt:"ارملت"},
                    { href: "/items/gateway/phase", img: "/images/items/gateway/phase.png", className: "null" ,alt:"فیزبوت"},
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" ,alt:"بلید"},
                    { href: "/items/ancient/radiance", img: "/images/items/ancient/radiance.png", className: "null" ,alt:"ریدینس"},
                    { href: "/items/todd/sang-yasha", img: "/images/items/todd/sang-yasha.png", className: "null" ,alt:"سنگ یاشا"},]} />
            </div>
        </div>
    )
}