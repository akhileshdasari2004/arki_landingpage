import { LogoCloud } from "./ui/logo-cloud-2";

const TrustedBy = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto grid max-w-5xl">
          <h2 className="mb-16 text-center text-xl font-medium tracking-tight text-muted-foreground md:text-3xl">
            Trusted by leading <span className="font-semibold text-gradient-purple">architecture & engineering</span> firms
          </h2>

          <LogoCloud />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
