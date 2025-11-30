import Table from "@/components/table/page";

export default function Tiny() {
    return (
        <div>
            <img src="/images/heros/tiny/1.jpg" alt="" />
            <img src="/images/heros/tiny/2.jpg" alt="" />
            <img src="/images/heros/tiny/3.jpg" alt="" />
            <img src="/images/heros/tiny/4.jpg" alt="" />
            <img src="/images/heros/tiny/5.jpg" alt="" />
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