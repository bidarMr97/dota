import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/chen/1.jpg" alt="چن" />
            <img src="/images/heros/chen/2.jpg" alt="چن1" />
            <img src="/images/heros/chen/3.jpg" alt="چن2" />
            <img src="/images/heros/chen/4.jpg" alt="چن3" />
            <img src="/images/heros/chen/5.jpg" alt="چن4" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/medalion", img: "/images/items/supportive/medalion.png", className: "null" ,alt:"مدالیون"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/guardian", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                    { href: "/items/supportive/vladmir", img: "/images/items/supportive/vladmir.png", className: "null" ,alt:"ولادمیر"},
                    { href: "/items/trophy/hex", img: "/images/items/trophy/hex.png", className: "null" ,alt:"هکس"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" ,alt:"پایپ"},
                    { href: "/items/todd/solar", img: "/images/items/todd/solar.png", className: "null" ,alt:"سولار"},]} />
            </div>
        </div>
    )
}