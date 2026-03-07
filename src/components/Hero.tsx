import { lazy, Suspense } from 'react';

const Scene = lazy(() => import('@/components/ui/hero-section').then(m => ({ default: m.Scene })));

const stats = [
  { value: '15,000 hrs', label: 'Saved' },
  { value: '200+', label: 'AE Professionals' },
  { value: '50%', label: 'Faster Design' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
          <span className="text-primary text-sm">✦</span>
          <span className="text-sm text-primary font-medium">AI-Powered for Architecture & Engineering</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Get more design done
          <br />
          <span className="text-gradient-gold">with less wasted effort</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Architecture and engineering project design done 50% faster, by leveraging your firm's existing data
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#book"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg gold-glow hover:opacity-90 transition-opacity"
          >
            Get Started with ARKI
          </a>
          <a
            href="#features"
            className="border border-foreground/20 text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-foreground/5 transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Demo GIF */}
        <div className="relative mx-auto max-w-4xl animate-float">
          <div className="glass-card p-2 overflow-hidden">
            <img
              src="/images/demo.gif"
              alt="ARKI product demo"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
