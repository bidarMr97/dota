import { FaLongArrowAltLeft } from "react-icons/fa";

export default function () {
    return (

        <div>
            <img src="/images/items/supportive/medalion.png" alt="مدالیون" className="m-auto"/>
            <img src="/images/items/supportive/6.jpg" alt="تصویر شماره ۶" className="lg:w-[450px] m-auto border-6 border-red-500"/>
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/weapons/chainmail"><img src="/images/items/weapons/chainmail.png" alt="زره زنجیری" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/weapons/blight"><img src="/images/items/weapons/blight.png" alt="تباهی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/weapons/m.png" alt="حرف M" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/cache/sobi"><img src="/images/items/cache/sobi.png" alt="سوپی" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/gryla/m.png" alt="حرف M" /></td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
