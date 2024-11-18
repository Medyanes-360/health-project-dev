import ClinicList from "./clinicList";

export default function FilteredClinicsMainComponent({ maxheight }) {
  return (
    <div className={`h-full flex-1`}>
      <div className="w-full flex justify-between md:hidden text-sm pb-6">
        <p>medical centers</p>
        <p className="text-primary ">filter</p>
      </div>
      <ClinicList maxheight={maxheight} />
    </div>
  );
}
