import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Code2, Zap, Sparkles, Cpu, Layers, Rocket, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import TicTacToe from "@/components/TicTacToe";
import heroBg from "@/assets/hero-bg.jpg";

const skills = {
  Frontend: ["React.js", "Redux", "JavaScript ES6+", "TypeScript", "Tailwind CSS", "SCSS", "AlpineJS"],
  "E-Commerce": ["Magento 2", "Hyvä Themes", "Shopware 6", "WordPress", "WIX"],
  Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
  Tools: ["Git", "Figma", "Webpack", "Postman", "VS Code", "AI-Assisted Dev"],
};

const projects = [
  { name: "BBS eStore", stack: "Magento 2 · Hyvä · AlpineJS", year: "2025–26", desc: "High-performance Hyvä storefront with advanced filters, GraphQL Quick View modals, Swiper galleries and optimized Core Web Vitals.", color: "from-cyan-500/20 to-blue-500/10" },
  { name: "Kinsey's B2B", stack: "Shopware 6 · Twig · SCSS", year: "2024–25", desc: "Customized B2B storefront with dealer-based access logic, responsive PLP/PDP enhancements and mobile fixes.", color: "from-amber-500/20 to-orange-500/10" },
  { name: "Zanders", stack: "Magento 2 · Hyvä", year: "2024", desc: "Hyvä-based frontend customizations, layered navigation and post-migration layout/performance fixes.", color: "from-fuchsia-500/20 to-pink-500/10" },
  { name: "MERN E-commerce", stack: "MongoDB · Express · React · Node", year: "2025", desc: "Full-stack platform with JWT auth, wishlist, admin dashboard, Redux state management and complete checkout flow.", color: "from-emerald-500/20 to-teal-500/10" },
];

const stats = [
  { v: "2+", l: "Years Experience" },
  { v: "40-60%", l: "Speed Improvement" },
  { v: "10+", l: "Projects Shipped" },
  { v: "100%", l: "Pixel Perfect" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            <span className="text-gradient">bm.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-mono">
            <a href="#about" className="hover:text-primary transition-colors">about</a>
            <a href="#skills" className="hover:text-primary transition-colors">skills</a>
            <a href="#work" className="hover:text-primary transition-colors">work</a>
            <a href="#contact" className="hover:text-primary transition-colors">contact</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 font-medium">
            <a href="mailto:bhaveshmallah35@gmail.com">Hire Me <ArrowRight className="w-4 h-4 ml-1" /></a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <img src={heroBg} alt="" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

        <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-mono text-muted-foreground">Available for new projects</span>
            </motion.div>

            <motion.h1 custom={1} initial="hidden" animate="show" variants={fadeUp} className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight">
              Bhavesh<br />
              <span className="text-gradient">Mallah.</span>
            </motion.h1>

            <motion.p custom={2} initial="hidden" animate="show" variants={fadeUp} className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Frontend Developer crafting <span className="text-foreground">high-performance</span> e-commerce experiences with <span className="text-primary">Magento 2 · Hyvä</span> and <span className="text-accent">React.js</span>. Pixel-perfect UI, 40–60% faster pages.
            </motion.p>

            <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 font-semibold animate-pulse-glow">
                <a href="#work">View My Work <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border/80 hover:border-primary hover:bg-primary/5">
                <a href="#contact">Let's Talk</a>
              </Button>
            </motion.div>

            <motion.div custom={4} initial="hidden" animate="show" variants={fadeUp} className="mt-12 flex items-center gap-6 text-muted-foreground">
              <a href="https://github.com/bhavesh-mallah" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/bhavesh-mallah" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:bhaveshmallah35@gmail.com" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
              <span className="font-mono text-xs flex items-center gap-2"><MapPin className="w-3 h-3" /> Ahmedabad, IN</span>
            </motion.div>
          </div>

          <motion.div custom={5} initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-4 hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
              <div className="relative card-elegant p-6 font-mono text-sm space-y-2">
                <div className="flex gap-1.5 mb-3">
                  <span className="w-3 h-3 rounded-full bg-destructive/70" />
                  <span className="w-3 h-3 rounded-full bg-accent/70" />
                  <span className="w-3 h-3 rounded-full bg-primary/70" />
                </div>
                <div><span className="text-muted-foreground">const</span> <span className="text-accent">dev</span> = {'{'}</div>
                <div className="pl-4"><span className="text-primary">name</span>: <span className="text-foreground">'Bhavesh'</span>,</div>
                <div className="pl-4"><span className="text-primary">role</span>: <span className="text-foreground">'Frontend'</span>,</div>
                <div className="pl-4"><span className="text-primary">stack</span>: [<span className="text-foreground">'React'</span>, <span className="text-foreground">'Hyvä'</span>],</div>
                <div className="pl-4"><span className="text-primary">coffee</span>: <span className="text-accent">true</span></div>
                <div>{'}'};</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
          {stats.map((s, i) => (
            <motion.div key={s.l} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="py-10 px-6 text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">[01] About</div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight">Building the web, <span className="text-gradient">one pixel</span> at a time.</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1} className="lg:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Results-driven Frontend Developer with <span className="text-foreground font-medium">2+ years</span> of experience crafting large-scale e-commerce platforms. I specialize in <span className="text-primary">Magento 2 (Hyvä Themes)</span>, <span className="text-primary">Shopware 6</span>, and modern <span className="text-primary">React.js</span> architectures.</p>
            <p>Proven track record of optimizing page speed by <span className="text-accent font-medium">40–60%</span>, implementing pixel-perfect UI from Figma, and shipping production-ready features that move metrics.</p>
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {[{ i: Zap, t: "Performance" }, { i: Layers, t: "Architecture" }, { i: Sparkles, t: "Design Fidelity" }].map(({ i: Icon, t }) => (
                <div key={t} className="card-elegant p-5">
                  <Icon className="w-6 h-6 text-primary mb-3" />
                  <div className="font-display font-semibold text-foreground">{t}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 bg-card/20 border-y border-border/50">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">[02] Toolkit</div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold">Stack I <span className="text-gradient">ship with.</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([cat, items], i) => (
              <motion.div key={cat} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-elegant p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Cpu className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-bold text-lg">{cat}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground flex items-center gap-2 font-mono">
                      <span className="w-1 h-1 rounded-full bg-primary" />{s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="py-20 container mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">[03] Selected Work</div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold">Recent <span className="text-gradient">projects.</span></h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.name} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fadeUp} className="card-elegant group relative overflow-hidden p-8">
              <div className={`absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-gradient transition-all">{p.name}</h3>
                <div className="font-mono text-xs text-primary mb-4">{p.stack}</div>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Rocket className="w-4 h-4" /> Case study
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 bg-card/20 border-y border-border/50">
        <div className="container mx-auto grid lg:grid-cols-12 gap-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">[04] Experience</div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold">Where I've <span className="text-gradient">grown.</span></h2>
          </motion.div>
          <div className="lg:col-span-8 space-y-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="card-elegant p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display text-2xl font-bold">Dolphin Web Solutions</h3>
                <span className="font-mono text-sm text-primary">2023 — Present</span>
              </div>
              <div className="text-muted-foreground mb-6">Frontend Developer · Ahmedabad, India</div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Built custom Hyvä themes from Figma with pixel-perfect Tailwind CSS implementation.",
                  "Customized Shopware 6 storefronts with B2B dealer-based access logic.",
                  "Improved Core Web Vitals 40-60% via code splitting & dependency optimization.",
                  "Integrated REST APIs with JWT auth and AI-assisted debugging workflows.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} custom={1} className="card-elegant p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-display text-2xl font-bold">Silver Oak College of Engineering</h3>
                <span className="font-mono text-sm text-primary">2019 — 2023</span>
              </div>
              <div className="text-muted-foreground">B.E. Computer Engineering · CGPA 7.8/10</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GAME */}
      <section id="play" className="py-20 container mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-4">
            <Gamepad2 className="w-4 h-4" /> [bonus] take a break
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold">Beat the <span className="text-gradient">AI.</span></h2>
          <p className="text-muted-foreground mt-4">A little game while you decide whether to hire me. Spoiler: the AI never loses 😉</p>
        </motion.div>
        <TicTacToe />
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 container mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="card-elegant relative overflow-hidden p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">[05] Contact</div>
            <h2 className="font-display text-5xl lg:text-7xl font-bold mb-6">Let's build <span className="text-gradient">something great.</span></h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">Open to frontend roles, freelance projects, and interesting collaborations.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 font-semibold">
                <a href="mailto:bhaveshmallah35@gmail.com"><Mail className="w-4 h-4 mr-2" /> bhaveshmallah35@gmail.com</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-border/80 hover:border-primary">
                <a href="tel:+919510671479"><Phone className="w-4 h-4 mr-2" /> +91 95106 71479</a>
              </Button>
            </div>
            <div className="flex justify-center gap-6 text-muted-foreground">
              <a href="https://github.com/bhavesh-mallah" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm"><Github className="w-4 h-4" /> github</a>
              <a href="https://linkedin.com/in/bhavesh-mallah" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm"><Linkedin className="w-4 h-4" /> linkedin</a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
          <span>© 2026 Bhavesh Mallah</span>
          <span className="flex items-center gap-2"><Code2 className="w-4 h-4 text-primary" /> Crafted with React & Tailwind</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
