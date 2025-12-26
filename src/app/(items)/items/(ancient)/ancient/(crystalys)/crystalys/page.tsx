import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/ancient/crystalys.png" alt="کریستالیس" className="m-auto" />
            <img src="/images/items/ancient/8.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/broadsword"><img src="/images/items/weapons/broadsword.png" alt="بروداسورد" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/attack"><img src="/images/items/weapons/attack.png" alt="اتک بلیدز" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="ریسیپ" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/ancient/m.png" alt="شاپ انشنت" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}