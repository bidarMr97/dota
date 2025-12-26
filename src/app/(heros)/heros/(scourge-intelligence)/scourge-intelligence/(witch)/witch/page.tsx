import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/witch/1.jpg" alt="ویچ داکتر" />
            <img src="/images/heros/witch/2.jpg" alt="ویچ داکتر1" />
            <img src="/images/heros/witch/3.jpg" alt="ویچ داکتر2" />
            <img src="/images/heros/witch/4.jpg" alt="ویچ داکتر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/market/bottle", img: "/images/items/market/bottle.png", className: "null" ,alt:"باتل"},
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},
                    { href: "/items/todd/cape", img: "/images/items/todd/cape.png", className: "null" ,alt:"کیپ"},
                    { href: "/items/cache/blink", img: "/images/items/cache/blink.png", className: "null" ,alt:"بلینک"},
                    { href: "/items/protector/bkb", img: "/images/items/protector/bkb.png", className: "null" ,alt:"بی کی بی"},
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},]} />
            </div>
        </div>
    )
}