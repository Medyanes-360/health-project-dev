export default function PanelFour({ data }) {
  const { title, items: items } = data;

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4">
        <span className="font-poppins text-[12px] font-bold leading-[32px] text-left">
          {title}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 justify-between p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 justify-center flex-col"
            >
              <div className="flex gap-2">
                <div
                  className="w-[10px] h-[10px] rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-poppins text-[10px] font-medium leading-[14px] text-left">
                  {item.day}
                </span>
              </div>
              <ul className="list-disc p-[1.5rem]">
                {item.listItems.map((listItem, index) => (
                  <li
                    className="font-poppins text-[10px] font-medium leading-[14px] text-left "
                    key={index}
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
