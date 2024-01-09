import HatTag from "@/components/hat-tag";
import { AtSymbolIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";

export default function Hat() {
  return (
    <section className="text-center">
      <h1 className="text-2xl font-extrabold underline">Oleksii Haiev</h1>
      <h2 className="mt-2 text-lg lg:text-xl print:text-base">
        Lead / Senior Front End Developer at DaZN 
        (former MyCujoo/Elevensports)
      </h2>
      <div className="m-2 flex justify-center gap-2 flex-wrap">
        <HatTag>
          <MapPinIcon className="size-4 inline-block" />
          Hoofddorp, Netherlands
        </HatTag>
        <HatTag>
          <PhoneIcon className="size-4 inline-block" />
          +31 62 099 33 47
        </HatTag>
        <HatTag>
          <AtSymbolIcon className="size-4 inline-block" />
          <a href="mailto:oleksiihaiev@icloud.com">oleksiihaiev@icloud.com</a>
        </HatTag>
      </div>
    </section>
  )
}