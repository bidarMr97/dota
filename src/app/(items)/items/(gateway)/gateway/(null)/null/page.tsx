import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (
        <div>
            <img src="/images/items/gateway/null.png" alt="هیچ‌چیز" className="m-auto" />
            <img src="/images/items/gateway/9.jpg" alt="تصویر شماره ۹" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/gryla/mantle"><img src="/images/items/gryla/mantle.png" alt="شنل" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gryla/circlet"><img src="/images/items/gryla/circlet.png" alt="تاج" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="آیتم شماره ۱" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gateway/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
