import Table from "@/components/table/page";

export default function () {
    return (
        <div>
            <img src="/images/heros/necro/1.jpg" alt="" />
            <img src="/images/heros/necro/2.jpg" alt="" />
            <img src="/images/heros/necro/3.jpg" alt="" />
            <img src="/images/heros/necro/4.jpg" alt="" />
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