
export default function ServiceCard({ icon, title, children }) {
  return (
    <div className="flex-1">
      <picture>
        <img src={icon} alt="" className="shadow-button rounded-[5px]" />
      </picture>

      <h3 className="font-bold text-2xl text-[#486a6f]">{title}</h3>
      <p className="font-medium text-base text-[#678c92] max-w-[268px]">{children}</p>
    </div>
  );
}
