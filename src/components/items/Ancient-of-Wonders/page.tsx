export default function AncientOfWonders() {
    return (
        <div>
            <section className="flex items-center justify-center gap-[2px] border-[4px] border-[green]" dir="ltr">
                <img src="images/items/wonders/m.png" alt="نشان انشنت آف واندرز" className="w-[20px] h-[20px]" />
                <h2 className="text-white">Ancient Of Wonders</h2>
            </section>
            <table>
                <thead>
                    <tr>
                        <td className="h-[40px]">
                          <a href="/items/wonders/potion">
                            <img src="/images/items/wonders/potion.png" alt="پوشن سلامتی" className="w-[50px]"/>
                          </a>
                        </td>
                        <td className="h-[40px]">
                          <a href="/items/wonders/healing">
                            <img src="/images/items/wonders/healing.png" alt="اسالوف هیلینگ" className="w-[50px]"/>
                          </a>
                        </td>
                        <td className="h-[40px]">
                          <a href="/items/wonders/tango">
                            <img src="/images/items/wonders/tango.png" alt="تانگو" className="w-[50px]"/>
                          </a>
                        </td>
                        <td className="h-[40px]">
                          <a href="/items/wonders/raindrop">
                            <img src="/images/items/wonders/raindrop.png" alt="رِیندراپ" className="w-[50px]"/>
                          </a>
                        </td>
                        <td className="h-[40px]">
                          <a href="/items/wonders/fire">
                            <img src="/images/items/wonders/fire.png" alt="فایری برنچ" className="w-[50px]"/>
                          </a>
                        </td>
                        <td className="h-[40px]">
                          <a href="/items/wonders/mango">
                            <img src="/images/items/wonders/mango.png" alt="انچنت مانگو" className="w-[50px]"/>
                          </a>
                        </td>
                        <td className="h-[40px]">
                          <a href="/items/wonders/tp">
                            <img src="/images/items/wonders/tp.png" alt="اسکرول تاون پورتال" className="w-[50px]"/>
                          </a>
                        </td>
                        <td className="h-[40px]">
                          <a href="/items/wonders/stick">
                            <img src="/images/items/wonders/magic.png" alt="مجیک استیک" className="w-[50px]"/>
                          </a>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
