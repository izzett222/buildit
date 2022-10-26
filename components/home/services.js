import { default as Card } from "./serviceCard";

export default function Services() {
  return (
    <section className="mt-[200px] max-w-[1200px] mx-auto flex flex-col items-center pb-40">
      <h1 className="font-bold text-4xl text-[#486a6f]">Innovative Execution</h1>
      <div className="flex gap-5 w-full pl-[100px] mt-[60px]">
          <Card icon="/icons/service1.svg" title="Featured Listing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Card>
          <Card icon="/icons/service2.svg" title="Featured Listing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Card>
          <Card icon="/icons/service3.svg" title="Featured Listing">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Card>
      </div>
    </section>
  );
}
