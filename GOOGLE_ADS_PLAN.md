# Google Ads plan — Wirkstattnatur

Account: **Gremlich - Wirkstattnatur**. Reached through the client's Google login.
State captured 21 September 2026. Update the "Where the account stands" section at each review.

## Where the account stands

One campaign, **"Personal Training | GSN"**, created 31 August 2020.

| | Value |
|---|---|
| Daily budget | CHF 2.00 |
| Bid strategy | Maximize clicks |
| Networks | Google search, Search partners, **Display Network** |
| Status | Eligible (Limited) — "Missing enough relevant keywords", "Limited by budget" |
| Languages | English; German |
| Locations | Horgen, Kilchberg +3 |

Last 30 days (22 Aug – 20 Sep 2026):

| Network | Impressions | Clicks | CTR | Cost |
|---|---:|---:|---:|---:|
| Google Search | 1,449 | 54 | 3.73% | CHF 40.97 |
| Search partners | 218 | 0 | 0% | CHF 0.00 |
| Display Network | 9,823 | 87 | 0.89% | CHF 20.76 |
| **Total** | **11,490** | **141** | **1.23%** | **CHF 61.73** |

**Conversions: 0.00.** Lifetime: CHF 5,507.19 spent, 4,935 clicks, zero attributable conversions.

### Three defects that explain the numbers

1. **Every ad points at the wrong page.** All six ads carry the final URL
   `wirkstattnatur.ch/personaltraining-thalwil/`, which redirects to `/angebot/personal-training`.
   Their display URLs advertise `/pilates`. So all 141 clicks — including the 70 on the
   best-performing Pilates ad — landed on the Personal Training page.
2. **Display is consuming a third of the budget** — 61.7% of clicks at CHF 0.24 each, against
   CHF 0.76 on Search, for no measured return.
3. **Nothing is measured.** The campaign goal is Page views, its only website conversion action is
   inactive, and the website emitted no contact events until 21 September 2026.

Maximize clicks is the root of the third symptom: the campaign is explicitly optimising for the
cheapest available traffic rather than for enquiries. The 81.9% optimisation score should not drive
decisions — its largest component is simply spending more.

## The honest diagnosis

This is **not** an optimisation problem. It is a measurement and destination problem. Five years and
CHF 5,507 produced no attributable lead, and until September the site could not have reported one.
Fixing measurement and destination is the large majority of the available value. Keyword refinement
is a rounding error beside it.

## Decisions confirmed by Urs (21 September 2026)

- Fix the Pilates landing page: **yes**.
- Pilates as the main campaign, Personal Training smaller alongside: **yes**. He is open to
  experimenting with equal weighting, but Golf-Fitness and Karate are **not wanted at all**.
- Remove the discount and free-trial promises: **confirmed** they no longer exist.
- Negative keywords for job seekers and other providers: **go**.
- Budget stays at CHF 2/day until a contact's cost is known: **go**.
- He named the central change himself: **the KPI has to move from clicks to contacts.**
- Weekly report: **agreed**.
- No second Google Maps entry; add the category to the existing profile instead: **agreed**.

Two notes on his reply:

- He answered the "has Google ever produced a client" question only indirectly — he is found, but
  by other providers rather than potential customers. Capacity and client value are still open.
- The campaign was paused while awaiting his reply. He may not know that yet.

## Phase 0 — make it measurable (blocking)

Nothing else is worth doing first, and doing it in the wrong order is worse than doing nothing: an
imported conversion that never fires teaches Smart Bidding to buy the wrong traffic, which is a
confident failure rather than an honest one.

- [ ] Mark `generate_lead` and `contact_phone_click` as key events in GA4 (property 347351810).
      Mark `contact_email_click` and `contact_chat_open` as secondary.
- [ ] Import those into Google Ads; Primary for the first two, Secondary for the rest.
- [ ] Enable call reporting with a **60-second minimum**. This does not depend on the cookie banner,
      so it is the most complete lead signal available for a business whose primary CTA is the phone.
- [ ] Change the campaign goal off *Page views* to those conversions. Demote Page views to Secondary.
- [ ] Record a baseline snapshot of the tables above before changing anything else.

## Phase 1 — fix the account

- [ ] Repoint all six ads: Pilates ads → `/angebot/pilates`, Personal Training → `/angebot/personal-training`.
- [ ] Turn off the Display Network.
- [ ] Turn off automatically created assets (they mix the site's `du` voice with the old `Sie` copy).
- [ ] Pause the two legacy expanded text ads carrying discount and free-trial copy.
- [ ] Replace the 528 ad-hoc exact negatives with thematic phrase and broad negatives: gyms and fitness
      centres, competitor brands, trainer jobs, yoga/CrossFit/EMS/Aquafit, free or online workouts,
      and `reformer` (Urs works on mat, chair and bench only).
- [ ] Rebuild keywords around genuine local intent: `pilates thalwil`, `pilates horgen`,
      `pilates privatunterricht`, `personal trainer thalwil`.
- [ ] Correct the campaign name — it says "Personal Training" while the priority is Pilates.
- [ ] Keep Maximize clicks with a CPC cap. Smart Bidding needs roughly 15–30 conversions per month and
      there are currently zero.

## Phase 2 — restructure Pilates-first

Urs wants Pilates pushed but wants new clients generally. Those are the same campaign: Pilates is the
only one of the four services with real search volume, a defensible local position, and recurring
revenue. At CHF 35 for a 60-minute session in a group of 3–5, one retained weekly client is roughly
CHF 140/month — so the campaign pays for itself if it produces **one client per quarter**. The budget
is not too small to push Pilates; it is too small to push four services.

- One Search-only campaign, Pilates primary, with Personal Training as a small second ad group.
- Pause the dynamic-search ad group until destinations and tracking are trustworthy.
- Golf-Fitness and Karate get no campaigns and no ad groups. Urs confirmed on
  21 September 2026 that he does not need them.
- Keep acquisition on Pilates intent and let conversion generalise: the contact path is shared, so a
  Pilates-sourced contact can become whichever client fits. Do not blur the ad or the landing page.

## Phase 3 — operating cadence

| Cadence | Work |
|---|---|
| Weekly (15 min) | Spend and pacing; search-terms report → new negatives; disapprovals |
| Monthly (45 min) | Leads by channel; cost per lead; ad strength; landing-page check; budget decision |
| Quarterly | Offer, creative refresh, structure, whether to scale |

**The monthly report has one column that matters: Urs's confirmed new clients.** Spend, clicks and
even cost per lead are proxies. Without the confirmed-client column the report is incomplete, and it
is the only way to tell a real lead from a `tel:` tap.

Reconcile Ads against GA4 rather than trusting either: the ads consent category is separate from
analytics, so a visitor who allows analytics but declines ads is counted in GA4 while their events
stay unusable for Ads evaluation. The Ads conversion column will systematically undercount. Call
reporting is the tiebreaker.

## Phase 4 — scale

Only after four to six weeks of trustworthy data.

- Judge cost per lead against what a client is worth, never against Google's peer-spend recommendation.
- Consider Maximize Conversions once roughly 15–30 conversions per month are recorded reliably.
- Increase budget only against a known acceptable cost per lead.

## Access and tooling

This is the constraint on "monitor it regularly", and it needs a decision.

Google blocks sign-in from automated browsers, so **I cannot log in to Google Ads myself.** The current
access route is a Chrome window the user starts and signs into; it works, but it needs manual setup
every session and is unsuitable as the basis of regular monitoring.

| Option | Good for | Cost |
|---|---|---|
| **Google Ads API** (developer token + OAuth) | Automated reporting, scheduled monitoring, bulk reads | Application lead time; the only path to genuinely unattended monitoring |
| **Google Ads Editor** (already installed) | Bulk edits, offline review, CSV import/export | Manual, but reliable |
| **Scheduled reports** emailed from the Google Ads UI | A monthly CSV without API work | Manual download |
| **Browser session** (current) | One-off changes | Fragile; needs the user present |

Recommendation: pursue **API access** for monitoring and use **Editor** for bulk edits in the meantime,
keeping the browser route for small changes.

### What the browser route can and cannot do

Verified on 21 September 2026, so nobody repeats the attempt:

- **Works:** navigating, reading any page, the campaign Settings drawer (networks, status), the
  row-selection → "Edit" → Pause bulk flow, and renaming via the "Edit name" control. Turning off the
  Display Network and pausing the four legacy ads were both done this way.
- **Does not work:** controls that Google Ads mounts on **hover**, notably the per-ad "Edit this ad"
  pencil that opens the ad editor. This blocks changing final URLs, which is the most important fix
  still outstanding. Headless Chrome does not deliver the hover state Angular needs; synthetic
  `mouseover` mounts the control but it unmounts before a click lands, and native CDP hover does not
  trigger it at all.
- A **headed** browser may behave differently, but a headed browser on the operator's own machine
  steals focus, which is why that route was abandoned.
- Moving the work to a second machine does not help: Google binds sessions to the device, so a copied
  Chrome profile arrives **signed out** and cannot be signed in automatically.

Conclusion: treat final-URL and negative-keyword edits as **Editor or manual work**, not browser
automation, until API access exists.

## What we still need from Urs

1. **How much capacity does he have for new Pilates clients?** Group size and available slots set a
   ceiling on spend.
2. **What is a new client worth over a year?** Needed to judge an acceptable cost per lead.
3. **Who answers the phone and chat, and how quickly?** The site's primary CTA is the phone; conversion
   depends on the answer rate more than on the ad.
4. **Has Google Ads ever produced a client he is aware of?** Only answered indirectly so far — he is
   found, but by other providers rather than potential customers. Worth asking again directly, since it
   distinguishes repairing a broken channel from restarting a dead one.

Settled: budget stays at CHF 2/day, and Pilates leads with Personal Training alongside.

## Metrics that matter

Spend · cost per lead · share of leads answered · **confirmed new clients** · retention past month one.

Impressions, clicks, CTR and the optimisation score are diagnostics, not goals.
