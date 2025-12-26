import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/ancient/kayanon.png" alt="کریتیکال" className="m-auto" />
            <img src="/images/items/ancient/7.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/ancient/crystalys"><img src="/images/items/ancient/crystalys.png" alt="کریستالیس" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/ancient/m.png" alt="شاپ انشنت" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/laregas/demon"><img src="/images/items/laregas/demon.png" alt="دیمن اج" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/laregas/s.png" alt="شاپ لارگاس" /></td>
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