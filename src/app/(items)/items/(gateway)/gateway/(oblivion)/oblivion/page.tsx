import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/gateway/oblivion.png" alt="فراموشی" className="m-auto" />
            <img src="/images/items/gateway/7.jpg" alt="تصویر شماره ۷" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/quarter"><img src="/images/items/weapons/quarter.png" alt="سلاح کوارتی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/cache/sobi"><img src="/images/items/cache/sobi.png" alt="کش سوبی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gryla/robi"><img src="/images/items/gryla/robi.png" alt="رویبی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
