import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

const logos: Logo[] = [
  { src: '/images/logo-hga.png', alt: 'HGA' },
  { src: '/images/logo-sweeny.png', alt: 'Sweeny & Co' },
  { src: '/images/logo-zas.png', alt: 'ZAS' },
  { src: '/images/logo-nelson.png', alt: 'Nelson Rudie' },
  { src: '/images/logo-mjma.jpg', alt: 'MJMA' },
  { src: '/images/logo-svn.jpg', alt: 'SvN' },
  { src: '/images/logo-gh3.jpg', alt: 'GH3' },
  { src: '/images/logo-hga.png', alt: 'HGA' }, // Repeat one to fill 8 slots or use a blank card
];

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <LogoCard
        className="relative border-r border-b bg-secondary/50"
        logo={logos[0]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-primary/20"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r"
        logo={logos[1]}
      />

      <LogoCard
        className="relative border-r border-b md:bg-secondary/50"
        logo={logos[2]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-primary/20"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-primary/20"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="relative border-b bg-secondary/50 md:bg-background"
        logo={logos[3]}
      />

      <LogoCard
        className="relative border-r border-b bg-secondary/50 md:border-b-0 md:bg-background"
        logo={logos[4]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-primary/20"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary/50"
        logo={logos[5]}
      />

      <LogoCard
        className="border-r"
        logo={logos[6]}
      />

      <LogoCard
        className="bg-secondary/50"
        logo={logos[7]}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-12 transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/10 hover:to-transparent hover:shadow-inner hover:shadow-primary/5 group relative overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-8 md:h-10 select-none object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
        src={logo.src}
      />
      {children}
    </div>
  );
}
