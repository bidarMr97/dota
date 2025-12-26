import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/ancient/basher.png" alt="کرانیم بشر" className="m-auto" />
            <img src="/images/items/ancient/2.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500" />

            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/mithril"><img src="/images/items/weapons/mithril.png" alt="میثریل همر" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="شاپ وپنز" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/gryla/belt"><img src="/images/items/gryla/belt.png" alt="بلت استرنج" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="شاپ گریلا" /></td>
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


