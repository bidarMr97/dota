import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
            <img src="/images/items/supportive/urn.png" alt="آرن" className="m-auto"/>
            <img src="/images/items/supportive/10.jpg" alt="تصویر شماره ۱۰" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/cache/sobi"><img src="/images/items/cache/sobi.png" alt="سوبی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gryla/circlet"><img src="/images/items/gryla/circlet.png" alt="تاج" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/protection"><img src="/images/items/weapons/protection.png" alt="محافظ" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="تصویر پیش‌فرض" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
