export default function WeaponsDealer() {
    return (
        <div>
            <div className="flex items-center justify-center gap-[2px] border-[2px]" dir="ltr">
                <img src="images/items/weapons/m.png" alt="" className="w-[20px] h-[20px]" />
                <h1 className="text-white">Weapons Dealer  </h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <td><a href="items/weapons/attack"><img src="images/items/weapons/attack.png" alt="" /></a></td>
                        <td><a href="items/weapons/broadsword"><img src="images/items/weapons/broadsword.png" alt="" /></a></td>
                        <td><a href="items/weapons/quarter"><img src="images/items/weapons/quarter.png" alt="" /></a></td>
                        <td><a href="items/weapons/claymore"><img src="images/items/weapons/claymore.png" alt="" /></a></td>
                        <td><a href="items/weapons/protection"><img src="images/items/weapons/protection.png" alt="" /></a></td>
                        <td><a href="items/weapons/blitz"><img src="images/items/weapons/blitz.png" alt="" /></a></td>
                        <td><a href="items/weapons/javelin"><img src="images/items/weapons/javelin.png" alt="" /></a></td>
                        <td><a href="items/weapons/mithril"><img src="images/items/weapons/mithril.png" alt="" /></a></td>
                    </tr>

                    <tr>
                        <td><a href="items/weapons/chainmail"><img src="images/items/weapons/chainmail.png" alt="" /></a></td>
                        <td><a href="items/weapons/ironwill"><img src="images/items/weapons/ironwill.png" alt="" /></a></td>
                        <td><a href="items/weapons/blight"><img src="images/items/weapons/blight.png" alt="" /></a></td>
                        <td><a href="items/weapons/queling"><img src="images/items/weapons/queling.png" alt="" /></a></td>
                    </tr>

                </thead>
            </table>
        </div>
    )
}