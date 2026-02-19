---
title: "Survival Mode: What Building AI Agents Actually Looks Like"
description: "I rewrote my AI agent's architecture three times and learned the hard way that building with LLMs isn't about having the right answers — it's about surviving long enough to find them."
pubDate: 2026-02-19
tags: ["AI", "Agents", "Career", "Engineering"]
---

*This is my first blog post. I've been thinking about writing for a while, and I figured the best way to start is by sharing what I've lived through.*

---

I spent about six or seven years working as a traditional software engineer. Front-end, back-end, the usual stuff. I was comfortable. I knew how things worked. If I had a problem, I could Google it, find a pattern, and build on top of it.

Then I started building an AI agent.

It was 2023. There were almost no frameworks for orchestrating large language models. The models themselves were terrible at being agents — they were mostly built for conversation. The concept of function calling had just been introduced, and even something as basic as sharing the result of one tool call with the next step in the agent loop was a real challenge. Today that sounds ridiculous. Back then, it was a wall.

We had to build our own framework just to make things work.

### The mindset shift

This is the part that really changed me.

In traditional software, there are patterns for almost everything. You look them up, you follow them, you build. But with AI agents, there was nothing. No blog posts, no Stack Overflow answers, no established way of doing things. I was on my own.

And that was painful. I had to let go of everything I knew about how to build software and start thinking differently. More like a researcher, maybe. Someone who tries things knowing they might be wrong. Someone who builds something today fully expecting to throw it away tomorrow.

The non-deterministic nature of LLMs brought a whole new level of complexity. In traditional software, what you code is what you get. With LLMs, you write the same code and get different results every time. That changes everything.

### Rewriting everything, over and over

Early on, LangChain came out as the first popular open-source framework for orchestrating LLMs. We tried using it, but it was too rigid. It didn't solve the real problems. So we ended up mixing parts of LangChain with our own custom solutions.

Over a year and a half, I rewrote the agent's architecture at least three times. LangChain itself changed its architecture three or four times too, killing previous versions and eventually releasing LangGraph as a separate approach.

But here's what I learned: **keep things simple.** Build your agent architecture as simple as possible. Give the models freedom to work. Trust that the models of the future will be better.

And that turned out to be true.

When we switched to a newer, more capable model, the impact was huge. Bugs and weird behaviors just disappeared — without writing a single extra line of code. With each new model generation, the agent needed less and less code around it to work well.

The simple architecture paid off. Better models could operate more efficiently inside it precisely because we weren't overcomplicating things.

Other well-known AI products like Claude Code and Manus AI have rewritten their architectures four or five times for the same reasons. This is not just my experience. It's the reality of this market.

### The real data problem

Another thing that hit me hard was how differently the agent behaved with real data versus test data.

During development, everything looked great. I would run tests with synthetic data, confirm the agent was doing what it was supposed to do, and move on. But the moment I plugged it into real production data, the agent would take a completely different route. Different decisions, different outputs, different behavior.

That broke my brain for a while.

In traditional software, what you test during development is what you get in production. That's the whole point of testing. But with agents, that rule just doesn't hold. Real data is messy, unpredictable, and full of edge cases that no synthetic dataset can replicate. The model reacts to all of that in ways you can't fully anticipate.

So something that was completely unacceptable in my old world — tweaking software after it hits production — became the new normal. We had to build refinement sessions into our process. Every time we plugged the agent into real data, we would sit down, observe how it behaved, and adjust. It wasn't a bug. It was the process.

That was a real paradigm shift for me. You can't just ship and forget. With agents, production *is* part of development.

### What "Survival Mode" means

Building AI agents is fundamentally about survival.

You're building products on top of a technology that is constantly evolving. The game is not about having the perfect architecture today. The game is about staying alive. Staying in the game. Being ready to adapt when the next model drops and changes everything.

The mindset you need is: keep it simple, and be ready to *remove* code. Not add. Remove. Because the models will get better and they won't need your workarounds anymore.

### Hitting the market

When we started showing the agent to potential customers, things got interesting.

People loved it. They were genuinely impressed. But then they would start asking for more — mostly around querying complex data across different databases and sources. They didn't just want to chat with PDFs. They wanted real answers from structured data.

That taught me something important: **agents are great at automating operations, but the structured data problem is still very real.** Simple RAG — just reading files and documents — is not enough to solve most real-world problems. Structuring data is still one of the biggest unsolved challenges in this space.

We lost several deals because of this. The market wasn't ready, and honestly, the technology wasn't fully ready either.

### The moment it almost died

At some point, we had a serious conversation about stopping the project. Deals weren't closing, the market was uncertain, and there were other priorities that needed attention. It was a fair discussion.

But I really believed in the potential of what we were building. So we talked it through, and in the end, we decided to keep going.

For over a year, it felt like we were failing. But looking back, we weren't failing. We were learning. And more importantly, we were surviving the market cycle.

### The payoff

We worked our asses off for almost a year to close our first client. But it was a big player in the vertical, and that made all the difference.

This client understood something that most didn't: delivering real value through agents is not about buying a chat platform. It's about partnering. Working together to solve the hard problems. And that's exactly where the structured data problem comes in — all these chat platforms out there won't solve it. You can't just throw a chatbot on top of messy data and call it a day.

That experience taught me something else too. I realized that to really deliver value, we had to act like Forward Deployed Engineers — engineers who work directly alongside the client, embedded in their environment, solving problems in real time. We couldn't just ship the agent and walk away. We had to be in the trenches with the client, refining the experience, customizing the behavior, making sure the agent actually worked with *their* data and *their* workflows.

That moment proved the thesis: **staying alive in this market pays off.**

### What it changed in me

This whole experience fundamentally changed how I think about building things.

Before this, I was an engineer who looked for existing solutions and applied them. After this, I became someone who can sit with a problem that has no known answer and figure it out anyway.

One thing that really helped was taking daily walks. I know it sounds simple, but during those walks, I would think through the hard problems. Many of the best solutions came to me while walking, not while staring at code.

Working with LLMs and agents completely changed my perspective on what it means to build innovative products. It taught me what real innovation feels like — not just as a buzzword, but as a daily practice of being wrong, learning, and trying again.

And honestly? I wouldn't trade it for anything.

---

*If you're building in this space, just know: the game is survival. Keep it simple. Stay in the game. The rest will come.*
