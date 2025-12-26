
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/ancient/battle.png" alt="بتل فیوری" className="m-auto" />
            <img src="/images/items/ancient/10.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/gateway/perseverence"><img src="/images/items/gateway/perseverence.png" alt="پرزرونس" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gateway/m.png" alt="شاپ گیت وی" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/queling"><img src="/images/items/weapons/queling.png" alt="کوئلینگ" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/broadsword"><img src="/images/items/weapons/broadsword.png" alt="بروداسورد" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="1شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/claymore"><img src="/images/items/weapons/claymore.png" alt="کلی مور" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="شاپ وپنز2" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}