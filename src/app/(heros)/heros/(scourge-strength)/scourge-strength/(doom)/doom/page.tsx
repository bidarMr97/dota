import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/doom/1.jpg" alt="" />
            <img src="/images/heros/doom/2.jpg" alt="" />
            <img src="/images/heros/doom/3.jpg" alt="" />
            <img src="/images/heros/doom/4.jpg" alt="" />
            <div>
                <Table data={[
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
            <div>
                <Table data={[
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },
                    { href: "null", img: "null", className: "null" },]} />
            </div>
        </div>
    )
}