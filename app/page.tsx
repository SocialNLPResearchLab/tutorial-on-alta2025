import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* header */}
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 md:px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold">
            ALTA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              Tutorial on ALTA 2025
            </span>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="mx-auto flex max-w-3xl flex-col gap-12 px-6 pb-16 pt-10 md:px-8 md:pt-16">

        {/* title */}
        <section className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold leading-snug md:text-4xl">
            Alignment of Large Language Models with Human Preferences and Values
            </h1>
          </div>
          {/* authors */}
          <div className="space-y-1 text-sm md:text-base">
            <p className="italic text-muted-foreground">
              Usman Naseem, Gautam Siddharth Kashyap, Kaixuan Ren, Utsav Maskey, Yiran Zhang, Afrozah Nadeem, Juan Ren
            </p>
            <p>
              SocialNLP Lab, Macquarie NLP Group, Macquarie University
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm font-semibold">
            <a
              href="/slides"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              Slides
            </a>
            <a
              href="/videos"
              className="text-primary underline underline-offset-4 hover:no-underline"
            >
              Videos
            </a>
          </div>
        </section>

        {/* Abstract */}
        <section className="space-y-4">
          <h3 className="text-center text-xl font-semibold">Abstract</h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-justify">
            Large language models (LLMs) have demonstrated remarkable
            capabilities, yet ensuring that their behavior aligns with human
            intent remains one of the most pressing challenges for machine
            learning. This tutorial provides a comprehensive, machine
            learning–oriented overview of alignment methods for LLMs. We begin
            by motivating alignment through classic concerns such as reward
            hacking, societal bias, and power-seeking behaviors, framing
            alignment as a recurring cycle of forward training and backward
            refinement. We then trace the origins of alignment with reward
            models to inverse reinforcement learning, which laid the foundation
            for preference-based learning and the modern RLHF pipeline, as well
            as its recent extensions such as reinforcement learning from AI
            feedback (RLAIF) and Constitutional AI. Building on the same
            perspective, we show how direct preference optimization (DPO) and
            its generalizations can be derived as special cases of Inverse
            Preference Learning (IPL), offering a simpler alternative to RLHF.
            We further explore general preference modeling that captures
            non-transitive preferences, and verifier-based alignment that
            integrates external evaluators into training. Throughout, we
            emphasize a fundamental paradigm shift in AI alignment—from passive
            learning constrained by human-labeled data to autonomous
            self-improvement through experience. This tutorial aims to equip the
            community with a unified perspective on alignment methods and to
            chart key directions toward building safe, reliable, and
            value-aligned LLMs.
          </p>
        </section>

        {/* Speakers */}
        <section className="space-y-6">
          <h3 className="text-center text-xl font-semibold">
            Speakers
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card
                key={index}
                className="grid grid-cols-[auto,1fr] items-start gap-4 text-sm md:text-base"
              >
                <div className="m-4 h-24 w-24 flex-shrink-0 border border-dashed bg-muted" />
                <div className="mr-4 my-4 space-y-1">
                  <p className="font-semibold underline underline-offset-4">
                    Speaker Name
                  </p>
                  <p className="text-muted-foreground">Description</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Outline */}
        <section className="space-y-4">
          <h3 className="text-center text-xl font-semibold">Outline</h3>
        </section>
      </main>
    </div>
  );
}
