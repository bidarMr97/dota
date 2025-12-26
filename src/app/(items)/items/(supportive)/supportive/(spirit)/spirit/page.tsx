import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
            <img src="/images/items/supportive/spirit.png" alt="روح" className="m-auto"/>
            <img src="/images/items/supportive/11.jpg" alt="تصویر شماره ۱۱" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/supportive/urn"><img src="/images/items/supportive/urn.png" alt="آرن" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/supportive/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/laregas/vitality"><img src="/images/items/laregas/vitality.png" alt="سرزندگی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/laregas/s.png" alt="حرف S" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/cache/wind"><img src="/images/items/cache/wind.png" alt="باد" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/cache/m.png" alt="حرف M" /></td>
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
