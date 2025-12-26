import { FaLongArrowAltLeft } from "react-icons/fa";
export default function () {
    return (
        <div>
            <img src="/images/items/ancient/abyssal.png" alt="ابیسال" className="m-auto" />
            <img src="/images/items/ancient/3.jpg" alt="توضیحات ایتم" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="basher"><img src="/images/items/ancient/basher.png" alt="کرانیوم بشر" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/ancient/m.png" alt="محل قرارگیری ایتم" /></td>
                        </tr>
                        <tr>
                            <td><a href="../protector/vanguard"><img src="/images/items/protector/vanguard.png" alt="ونگارد" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/protector/m.png" alt="محل قرارگیری ایتم1" /></td>
                        </tr>
                        <tr>
                            <td><a href=""><img src="/images/items/1.png" alt="ریسیپ" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/ancient/m.png" alt="محل قرارگیری ایتم3" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}