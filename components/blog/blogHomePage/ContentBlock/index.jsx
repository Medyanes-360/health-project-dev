import Image from "next/image";

export default function ContentBlock() {
  return (
    <div className="w-full p-6 mb-96 border bg-white border-fifth rounded-3xl shadow-custom1 flex flex-col gap-6 h-full">
      {/*article main*/}
      <div className="flex items-center justify-between h-[54px]">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/blog/article1.jpg"
            alt="article1"
            width={54}
            height={54}
            className="rounded-full"
          />
          <div>
            <h1 className="font-semibold">Article author</h1>
            <p className="text-sm font-normal">Anna Leonova</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/assets/blog/article2.jpg"
            alt="article2"
            width={54}
            height={54}
            className="rounded-full"
          />
          <div>
            <h1 className="font-semibold">Article author</h1>
            <p className="text-sm font-normal">Anna Leonova</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/assets/blog/icon1.png"
            alt=""
            width={54}
            height={54}
            className=""
          />
          <div className="text-secondary">
            <div className="font-medium text-[15px]">Updated: 05.11.2021</div>
            <p className="text-xs font-normal text-neutral-400">
              Minutes to read: 9 minutes
            </p>
          </div>
        </div>
      </div>
      {/*paragraph*/}
      <div className="p-6 bg-fifth rounded-3xl">
        <div>
          Restorative dentistry is a fast-developing field worldwide: inspired
          by celebrities and influencers, men and women dream of perfect teeth.
          Famous people choose dental{" "}
          <a
            href="https://en.m.wikipedia.org/wiki/Veneer_(dentistry)"
            target="_blank"
            className="underline"
          >
            veneers
          </a>{" "}
          in Mexico to shine on red carpets while you can shine in your life,
          too. Everybody has a chance to look like a star: installing veneers is
          the easiest and fastest way to get a brilliant smile. The process is
          pretty simple: a professional dentist puts a thin layer of enamel on
          the front tooth surface to improve its shape, color and hide damages.
          Fix dental imperfections fast – all you need is to find a proper
          clinic and an experienced doctor to manage the process. Mexico is a
          well-known destination for medical tourism. Patients from the USA,
          Canada, the UK visit the country every year, looking for affordable
          and high-quality medical assistance. Mexico has developed its
          dentistry field to a highly professional level. About{" "}
          <a
            href="https://en.m.wikipedia.org/wiki/Veneer_(dentistry)"
            target="_blank"
            className="underline"
          >
            150,000+ dentists
          </a>{" "}
          work here, and 93% of them are with a bachelor’s degree. Patients will
          find well-reputed clinics in Cancun, Tijuana, and Playa del Carmen.
        </div>
      </div>
      {/*keep*/}
      <div className="flex items-center gap-3 text-secondary">
        <Image src="/assets/blog/icon2.png" alt="" width={24} height={24} />
        <p>Keep reading the article to explore:</p>
      </div>
      {/*paragraph*/}
      <div className="p-6 bg-fifth rounded-3xl">
        <ul className="list-disc list-inside">
          <li>What are the prices for different types of veneers in Mexico?</li>
          <li>How much can you save in Mexico?</li>
          <li>
            What clinics do provide special prices for veneer installation?
          </li>
        </ul>
      </div>
    </div>
  );
}
