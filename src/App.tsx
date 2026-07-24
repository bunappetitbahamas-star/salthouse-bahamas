import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";

const HERO_IMAGE = "/photos/hero.jpg";

const PORTRAIT_IMAGE = "/photos/about.jpg";

const GALLERY = [
  {
    src: "/photos/gallery-01.jpg",
    alt: "Plates of fresh Caribbean seafood salad with herbs and cherry tomatoes",
    tall: false,
  },
  {
    src: "/photos/gallery-02.jpg",
    alt: "Colorful salads ready for a beachside gathering in the Bahamas",
    tall: false,
  },
  {
    src: "/photos/gallery-03.jpg",
    alt: "Three elevated plated dishes with seared fish, herbs, and charred lemon",
    tall: true,
  },
  {
    src: "/photos/gallery-04.jpg",
    alt: "Golden Bahamian fritters frying in a cast-iron pot",
    tall: false,
  },
  {
    src: "/photos/gallery-05.jpg",
    alt: "Long outdoor dinner table under string lights at night",
    tall: true,
  },
  {
    src: "/photos/gallery-06.jpg",
    alt: "Chef Harold Pinder plating tarts for a large event",
    tall: false,
  },
  {
    src: "/photos/gallery-07.jpg",
    alt: "Can-baked bread served from an Island Queen pigeon peas tin",
    tall: true,
  },
  {
    src: "/photos/gallery-08.jpg",
    alt: "Chef Harold tending a caja china roast on the beach in Grand Bahama",
    tall: true,
  },
  {
    src: "/photos/gallery-09.jpg",
    alt: "Chef Harold piping cream onto tarts with focused precision",
    tall: true,
  },
  {
    src: "/photos/gallery-10.jpg",
    alt: "Fresh diced mango, peppers, and herbs prepared for service",
    tall: false,
  },
];

const OFFERINGS = [
  {
    title: "Private dinners",
    body: "Multi-course Caribbean-fusion evenings in your home—menus built around local catch, island produce, and the way you like to gather.",
  },
  {
    title: "Weekly meals",
    body: "Thoughtful prep for busy weeks: balanced Bahamian-inspired plates, ready to reheat, with shopping and kitchen reset included.",
  },
  {
    title: "Celebrations",
    body: "Birthdays, anniversaries, and quiet milestones—served with restaurant polish and the warmth of home.",
  },
  {
    title: "Cooking sessions",
    body: "Hands-on lessons in island technique for couples or small groups. Leave with recipes, confidence, and the flavors of the Bahamas.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Conversation",
    body: "We talk through taste, dietary needs, occasion, and kitchen setup so the menu feels personal from the start.",
  },
  {
    num: "02",
    title: "Menu & market",
    body: "A custom menu is drafted, ingredients sourced with care, and everything arrives ready—so you can host without the scramble.",
  },
  {
    num: "03",
    title: "Cook & serve",
    body: "Cooking happens in your kitchen, plates land with intention, and the space is left tidy. You stay present with your guests.",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function BookingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      {sent ? (
        <p className="form__success" role="status">
          Thanks—your inquiry is ready to send. Connect this form to your email
          or booking tool when you&apos;re set, and replies will land in your
          inbox.
        </p>
      ) : (
        <>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Preferred date
            <input name="date" type="date" />
          </label>
          <label>
            Service
            <select name="service" defaultValue="dinner">
              <option value="dinner">Private dinner</option>
              <option value="weekly">Weekly meals</option>
              <option value="celebration">Celebration</option>
              <option value="session">Cooking session</option>
            </select>
          </label>
          <label className="form__full">
            Tell me about the occasion
            <textarea
              name="message"
              required
              placeholder="Guests, preferences, dietary notes, kitchen details…"
            />
          </label>
          <button className="form__submit" type="submit">
            Request a date
          </button>
          <p className="form__note">
            This starter form captures details on the page. Wire it to Formspree,
            Resend, or your calendar when you publish.
          </p>
        </>
      )}
    </form>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <a className="nav__brand" href="#top">
          Salt House Bahamas
        </a>
        <ul className="nav__links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#offerings">Offerings</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#approach">Approach</a>
          </li>
        </ul>
        <a className="nav__cta" href="#book">
          Book
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero__media" aria-hidden="true">
            <img
              src={HERO_IMAGE}
              alt=""
              width={2400}
              height={1349}
              fetchPriority="high"
            />
            <div className="hero__veil" />
          </div>
          <div className="hero__content">
            <motion.p
              className="hero__brand"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Salt House Bahamas
            </motion.p>
            <motion.h1
              className="hero__headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.12,
              }}
            >
              Bahamian cuisine, elevated
            </motion.h1>
            <motion.p
              className="hero__lede"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.22,
              }}
            >
              Chef Harold Pinder · Freeport, Grand Bahama—Caribbean-fusion
              dining for private tables, celebrations, and the spirit of the
              islands on every plate.
            </motion.p>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.34,
              }}
            >
              <a className="btn btn--solid" href="#book">
                Plan an evening
              </a>
              <a className="btn btn--ghost" href="#gallery">
                See the work
              </a>
            </motion.div>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <Reveal>
            <div className="about__portrait">
              <img
                src={PORTRAIT_IMAGE}
                alt="Chef Harold Pinder in his white chef coat, preparing bread"
                width={1600}
                height={1067}
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="about__copy">
            <Reveal delay={0.08}>
              <span className="section__label">About</span>
              <h2 className="section__title" id="about-title">
                The story of the islands, on the plate
              </h2>
              <p className="section__text">
                With over a decade of culinary mastery spanning the Caribbean
                and beyond—from training alongside a world-renowned chef in
                Iceland to representing Bahamian cuisine on international
                stages—Chef Harold Pinder brings an unmatched depth of
                technique and cultural reverence to every plate.
              </p>
              <p className="section__text">
                As Executive Chef at The Galley in Freeport, Grand Bahama,
                Harold has forged a Caribbean-fusion identity rooted in local
                sourcing, nose-to-tail cooking, and the vibrant flavors of
                home. He tells the story of the islands through elevated,
                intentional cuisine.
              </p>
              <p className="section__text">
                His mission is singular: to become the defining culinary voice
                to emerge from the Bahamas—carrying the spirit of the Bahamas
                to kitchens and tables around the world.
              </p>
              <dl className="about__meta">
                <div>
                  <dt>Based in</dt>
                  <dd>Freeport, Grand Bahama</dd>
                </div>
                <div>
                  <dt>Home kitchen</dt>
                  <dd>The Galley</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="offerings" id="offerings" aria-labelledby="offerings-title">
          <div className="section">
            <Reveal>
              <span className="section__label">Offerings</span>
              <h2 className="section__title" id="offerings-title">
                How we can cook together
              </h2>
              <p className="section__text">
                Pick a format that fits the night. Every booking starts with a
                short conversation and a menu written for you.
              </p>
            </Reveal>
            <ul className="offering-list">
              {OFFERINGS.map((item, i) => (
                <Reveal key={item.title} delay={0.06 * i} className="">
                  <li>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="gallery" id="gallery" aria-labelledby="gallery-title">
          <div className="section">
            <Reveal>
              <span className="section__label">Gallery</span>
              <h2 className="section__title" id="gallery-title">
                From the islands to the table
              </h2>
              <p className="section__text">
                Beachside service, private gatherings, and plates rooted in
                Bahamian flavor—captured in Freeport and beyond.
              </p>
            </Reveal>
            <div className="gallery-grid">
              {GALLERY.map((shot, i) => (
                <Reveal
                  key={shot.src}
                  delay={0.04 * (i % 4)}
                  className={`gallery-item${shot.tall ? " gallery-item--tall" : ""}`}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    width={shot.tall ? 933 : 1600}
                    height={shot.tall ? 1400 : 900}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="approach" aria-labelledby="approach-title">
          <Reveal>
            <span className="section__label">Approach</span>
            <h2 className="section__title" id="approach-title">
              Simple from inquiry to last plate
            </h2>
            <p className="section__text">
              No complicated packages—just a clear path from first note to a
              finished evening.
            </p>
          </Reveal>
          <div className="approach-grid">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={0.08 * i}>
                <article className="approach-item">
                  <span className="approach-item__num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="booking" id="book" aria-labelledby="book-title">
          <div className="section booking__layout">
            <Reveal>
              <span className="section__label">Book</span>
              <h2 className="section__title" id="book-title">
                Tell me about the night
              </h2>
              <p className="section__text">
                Share a few details and Harold will follow up with
                availability, a sample menu direction, and next steps.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <BookingForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="footer__brand">Salt House Bahamas</p>
          <p className="footer__place">
            Chef Harold Pinder · Freeport, Grand Bahama
          </p>
          <p className="footer__place">
            <a href="https://salthousebahamas.kitchen">salthousebahamas.kitchen</a>
          </p>
        </div>
        <p>
          <a href="mailto:haroldpinder22@gmail.com">haroldpinder22@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}
