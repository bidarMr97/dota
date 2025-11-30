type TableItem = {
  href: string;
  img: string;
  className:string;
};

interface TableProps {
  data: TableItem[]; 
}

export default function Table({ data }: TableProps) {
  return (
    <div className="m-[20px] flex justify-center">
      <table className="border-[5px] border-[red]">
        <thead>
          <tr>
            <th colSpan={2} className="text-[white] w-[200px] border-[5px] border-[red]">Inventory</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 2 }).map((_, colIndex) => {
                const index = rowIndex * 2 + colIndex;
                const item = data[index];
                return (
                  <td key={colIndex} className="text-[white] w-[100px] h-[80px] border-[5px] border-[red]">
                    {item ? (<a href={item.href}><img src={item.img} className={item.className} alt="" /></a>
                    ):null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
