# Design Hackathon: Team Guide

**The challenge:** Redesign the Cville AI Explorers website from scratch. Start only from `site-content.md`. Keep the content, and reinvent everything else: layout, type, color, imagery and motion.

**The real goal:** Learn how AI design tools work in practice. A good-looking site is nice, but a clear story about what the tool did well and badly is worth just as much.

**Scope: local only.** Build and run your design on your own laptop (or inside your tool's preview). The goal is a working site with a cohesive look and feel across every section. Don't spend time on deploying, hosting, custom domains or Git. Deploying will happen separately, later, once we've picked the designs we like best. If your tool can publish, you're welcome to use that for a quick preview, but it isn't part of the challenge.

**Your tool:** your team chose a lane and tool before the event. If you need a refresher on your tool or its setup, see `tool-selection.md`.

---

## 1. The workflow (60 minutes)

1. **Brief (5 min).** Agree on who the site is for and how it should *feel*. Pick 3 adjectives, such as "curious, hands-on, local," not "modern and clean."
2. **Diverge (15 min).** Get **at least 3 clearly different concepts** before committing to one. The first generation is almost always the most generic. Save screenshots of every concept as you go. If you collected references, give the screenshots to your tool together with your notes.
3. **Converge (5 min).** Pick one, or combine the best parts of two. Write down *why*, and run the plan past an adversarial critic agent (see section 2) before you build.
4. **Build (25 min).** Make every piece of content from `site-content.md` work, including the "TBA" meetup state and the sponsor details.
5. **Critique and polish (10 min).** Screenshot it, ask the AI to critique it harshly, fix the top 3 issues, and check it at phone width. Common problems to look for:
   - The generic "AI SaaS" look: purple/blue gradients, glassy cards, everything-centered hero.
   - Concepts that are really one layout in different colors.
   - Code that is hard to edit after export.

**Let the agent see its own work.** The Claude desktop app (Browser pane, Cmd/Ctrl+Shift+B) and the Codex app both have a built-in browser. Ask the agent to open your page, view it at phone and desktop widths, and fix what looks wrong, instead of relying on you to describe it. On a CLI-only setup, a Playwright tool or skill does the same job.

---

## 2. Prompting your AI for concepts and mockups

**Start with a brief, not "make it look modern."** For example:

> I'm redesigning the website for Cville AI Explorers, a hands-on AI builders' meetup in Charlottesville, Virginia. The full content is attached; keep all of it. The audience is local developers, tinkerers and curious newcomers. It should feel **[3 adjectives]**. The most important thing on the page is the next meetup date and how to join. Avoid generic AI-startup looks: no purple/blue gradients, no glassy cards, no default Inter font, no everything-centered hero.

**Ask for divergent concepts before any code:**

> Propose 4 clearly different design directions. For each, give it a name, a one-line concept, a color palette (hex values), a font pairing, a layout idea for the hero, and one signature detail that makes it memorable. Make them genuinely different from each other: vary tone, density and era.

**Turn concepts into quick mockups you can compare:**

> Build the hero and one content section for each of the 4 directions as separate static HTML pages (or one page with tabs) so we can compare them side by side.

**Plan before building.** This comes from OpenAI's frontend guidance and works with any tool:

> Before writing code, give me: (1) a **visual thesis**: the mood, materials and energy in one sentence; (2) a **content plan**: the order of hero, supporting sections, details and call to action; (3) an **interaction thesis**: 2–3 motion or interaction ideas.

**Work the plan together, then have it attacked.** Don't accept the first plan and jump straight into code. Go back and forth with the AI until the plan feels right, then have a *second* agent tear it apart before anyone builds anything:

1. **Refine it together.** "Ask me 3 questions that would most change this design." "What's the weakest part of this plan?" Revise until you'd defend every choice.
2. **Bring in an adversarial critic.** Open a fresh session or a different tool (Claude reviewing a Codex plan, or the other way around, works well). Give it only the content and the plan:
   > You are a skeptical senior designer reviewing this plan for a meetup website. Find the biggest problems: generic choices, weak hierarchy, poor fit for the audience, readability or accessibility issues, and anything that won't work on a phone. Be blunt, rank the issues and propose a fix for each.
3. **Take it back to the builder.** Paste the critique into your main session, decide which points to accept, and update the plan and `DESIGN.md` *before* you start building.

This takes 5 minutes and is much cheaper than finding the same problems after 25 minutes of building.

**Push past the first answer:**
- "That's too safe. Make direction 2 twice as bold."
- "What would a great editorial designer change here?"
- "Give me 3 alternatives just for the hero."
- "Critique this screenshot as a harsh design reviewer. List the 5 biggest problems, ranked."

**Keep a design record.** Once you've chosen a direction, have the AI write down its decisions (colors, fonts, spacing scale, tone) in a short `DESIGN.md` or similar file. Then give it that file every time so later changes stay consistent. Impeccable's `PRODUCT.md` and Stitch's `DESIGN.md` work the same way.

---

## 3. Showcase (5 min per team)

1. **Show it.** Demo the site running locally (or in your tool's preview), including a narrow phone-width view.
2. **The journey.** Show one screenshot of a concept you rejected and explain why.
3. **Tool verdict.** Where did the tool save you time, where did it fight you, and would you use it again?

Possible awards: **Most striking** · **Best experience on a phone** · **Best use of the tool** · **Best story of what went wrong**

---

## 4. Stretch goals (if you finish early)

- **Past Meetups section.** Add a "Past Meetups" section, portfolio or timeline built from `past-meetups.md`. It has 17 meetups with dates, speakers and short summaries, and it tests how your tool handles a larger set of repeating content.
- **The road not taken.** Put together a short slideshow or portfolio page of your discarded concepts and iterations: what each one was, and why you dropped it or changed it. This is where the screenshots from the Diverge step pay off. It can also be your "journey" segment at the showcase.
