import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/dark/1.jpg" alt="دارک سیر" />
            <img src="/images/heros/dark/2.jpg" alt="دارک سیر1" />
            <img src="/images/heros/dark/3.jpg" alt="دارک سیر2" />
            <img src="/images/heros/dark/4.jpg" alt="دارک سیر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"بوت مانا"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/magic", img: "/images/items/gateway/magic.png", className: "null" ,alt:"مجیک استیک"},
                  ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/guardian", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" ,alt:"بلید"},
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" ,alt:"کریمسون"},
                    { href: "/items/protector/lotus", img: "/images/items/protector/lotus.png", className: "null" ,alt:"لوتوس ارب"},
                    { href: "/items/protector/heart", img: "/images/items/protector/heart.png", className: "null" ,alt:"هارت"},
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},]} />
            </div>
        </div>
    )
}