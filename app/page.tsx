import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image />
          <PatientForm />
          <div className="text-14-regular"></div>
        </div>
      </section>
    </div>
  );
}
