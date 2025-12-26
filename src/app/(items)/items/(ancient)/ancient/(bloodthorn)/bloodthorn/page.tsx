
  import { FaLongArrowAltLeft } from "react-icons/fa";
  export default function () {
    return (
      <div>
            <img src="/images/items/ancient/bloodthorn.png" alt="بلادثورن" className="m-auto" />
          <img src="/images/items/ancient/11.jpg" alt="توضیحات" className="lg:w-[450px] m-auto border-6 border-red-500"/>
           
            <div className="flex justify-center mt-[20px] mb-[20px]">
                <table>
                    <thead>
                        <tr>
                            <td><a href="/items/arcane/orchid"><img src="/images/items/arcane/orchid.png" alt="ارکید" /></a></td>
                            <td><FaLongArrowAltLeft size={32} color="red" /></td>
                            <td><img src="/images/items/arcane/m.png" alt="شاپ ارکین" /></td>
                        </tr>
                        <tr>
                            <td><a href="/items/laregas/hyperstone"><img src="/images/items/laregas/hyperstone.png" alt="هایپراستون" /></a></td>
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