import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/undying/1.jpg" alt="آندایینگ" />
            <img src="/images/heros/undying/2.jpg" alt="آندایینگ1" />
            <img src="/images/heros/undying/3.jpg" alt="آندایینگ2" />
            <img src="/images/heros/undying/4.jpg" alt="آندایینگ3" /></div>
            <div>
                <Table data={[
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر"},
                    { href: "/items/gateway/bracer", img: "/images/items/gateway/bracer.png", className: "null" ,alt:"بریسر1"},
                    { href: "/items/supportive/boot", img: "/images/items/supportive/boot.png", className: "null" ,alt:"مانابوت"},
                   ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/supportive/spirit", img: "/images/items/supportive/spirit.png", className: "null" ,alt:"اسپیریت"},
                    { href: "/items/protector/crimson", img: "/images/items/protector/crimson.png", className: "null" ,alt:"کریمسون"},
                    { href: "/items/protector/blade", img: "/images/items/protector/blade.png", className: "null" ,alt:"بلید"},
                    { href: "/items/supportive/pipe", img: "/images/items/supportive/pipe.png", className: "null" ,alt:"پایپ"},
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                    { href: "/items/todd/aghanim", img: "/images/items/todd/aghanim.png", className: "null" ,alt:"اقانیم"},]} />
            </div>
        </div>
    )
}