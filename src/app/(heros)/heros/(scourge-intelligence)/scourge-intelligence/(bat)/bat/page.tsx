import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <div className="lg:w-[450px] m-auto border-6 border-red-500">
            <img src="/images/heros/bat/1.jpg" alt="بت رایدر" />
            <img src="/images/heros/bat/2.jpg" alt="بت رایدر1" />
            <img src="/images/heros/bat/3.jpg" alt="بت رایدر2" />
            <img src="/images/heros/bat/4.jpg" alt="بت رایدر3" /></div>
            <div>
                <Table data={[
                    { href: "/items/gateway/null", img: "/images/items/gateway/null.png", className: "null" ,alt:"نال تلیسمن"},
                    { href: "/items/wonders/tango", img: "/images/items/wonders/tango.png", className: "null" ,alt:"تانگو"},
                    { href: "/items/supportive/greaves", img: "/images/items/supportive/greaves.png", className: "null" ,alt:"گریوز"},
                ]} />
            </div>
            <div>
                <Table data={[
                    { href: "/items/todd/core", img: "/images/items/todd/core.png", className: "null" ,alt:"کور"},
                    { href: "/items/todd/yasha-kaya", img: "/images/items/todd/yasha-kaya.png", className: "null" ,alt:"یاشا-کایا"},
                    { href: "/items/trophy/overwhelm", img: "/images/items/trophy/overwhelm.png", className: "null" ,alt:"اورویم"},
                    { href: "/items/arcane/force", img: "/images/items/arcane/force.png", className: "null" ,alt:"فورس استف"},
                    { href: "/items/protector/linken", img: "/images/items/protector/linken.png", className: "null" ,alt:"لینکن"},
                    { href: "/items/todd/tp-up", img: "/images/items/todd/tp-up.png", className: "null" ,alt:"تی پی اپ"},]} />
            </div>
        </div>
    )
}