# Google Ads plan — Wirkstattnatur

Account: **Gremlich - Wirkstattnatur**. Reached through the client's Google login.
State captured 22 September 2026. Update the "Where the account stands" section at each review.

## Overarching goal

**Experiment deliberately, then decide from evidence.**

The account is not a set-and-forget campaign; it is a system to be tested and revised. Keep changing
keywords, structure, bidding and assets in small, recorded steps, and let the decisions flow from what
the data says rather than from habit or from Google's recommendations.

Two data sources, used together:

- **Google Ads** — what was served, what was clicked, what it cost, and which conversions are attached.
- **Google Search Console** — what people actually search for and which queries the site already earns
  impressions for. This is the cheapest source of new keyword and negative-keyword ideas, and it is the
  only place that shows demand the ads are *not* capturing.

Every change should be traceable to one of those two, and every review should end in a decision:
change something, or keep something because the evidence supports it. A review that produces neither is
a review that wasted a month. Write the reasoning down — in this file, or in the change log — so the
next decision can build on it instead of rediscovering it.

## Where the account stands

One campaign, **"Pilates & Personal Training | Search"**, created 31 August 2020.

| | Value |
|---|---|
| Daily budget | CHF 2.00 |
| Bid strategy | Maximize clicks |
| Networks | Google Search, Search partners |
| Status | Eligible (Limited) — "Limited by budget" |
| Languages | English; German |
| Locations | Horgen, Kilchberg +3 |

Baseline before the account changes, last 30 days (22 Aug – 20 Sep 2026):

| Network | Impressions | Clicks | CTR | Cost |
|---|---:|---:|---:|---:|
| Google Search | 1,449 | 54 | 3.73% | CHF 40.97 |
| Search partners | 218 | 0 | 0% | CHF 0.00 |
| Display Network | 9,823 | 87 | 0.89% | CHF 20.76 |
| **Total** | **11,490** | **141** | **1.23%** | **CHF 61.73** |

**Conversions: 0.00.** Lifetime: CHF 5,507.19 spent, 4,935 clicks, zero attributable conversions.

### Three defects that explain the numbers

1. **Every ad pointed at the wrong page.** All six ads carried the final URL
   `wirkstattnatur.ch/personaltraining-thalwil/`, which redirects to `/angebot/personal-training`.
   Their display URLs advertised `/pilates`. So all 141 clicks — including the 70 on the
   best-performing Pilates ad — landed on the Personal Training page.
2. **Display is consuming a third of the budget** — 61.7% of clicks at CHF 0.24 each, against
   CHF 0.76 on Search, for no measured return.
3. **Nothing is measured.** The campaign goal is Page views, its only website conversion action is
   inactive, and the website emitted no contact events until 21 September 2026.

Maximize clicks is the root of the third symptom: the campaign is explicitly optimising for the
cheapest available traffic rather than for enquiries. The 81.9% optimisation score should not drive
decisions — its largest component is simply spending more.

### Changes applied on 21 September 2026

- **Display Network turned off.** Verified in the campaign settings drawer.
- **Two live ads repointed.** The Pilates responsive ad now targets `/angebot/pilates` and the
  Personal Training responsive ad targets `/angebot/personal-training`. Both saved and verified.
- **Four legacy expanded text ads paused.** They carried "Aktuell mit Neukundenrabatt",
  "Kostenloses Probetraining" and "1 Jahr Kundenrabatt" — offers that no longer exist. They still hold
  the old final URL, so correct or delete them before ever re-enabling them.
- **Dynamic-search ad group paused.**
- **Ad copy rewritten to match the website.** Two headlines were removed as unsupported — `Personal
  Training Senioren` and `Umfassendes Trainingskonzept` appear nowhere in the site's copy — along with
  the discount and free-trial claims and a performance promise. Replacements are drawn from
  `src/lib/services.ts`: the Pilates hero title, eyebrow, facts, `Pilates Care`, and the Personal
  Training hero title, eyebrow, facts, `Hometraining` and the location list.
- **Campaign renamed** to `Pilates & Personal Training | Search` and re-enabled after the destination
  and copy fixes. Its two intended ad groups and responsive ads are eligible; the dynamic-search ad
  group and four obsolete expanded text ads remain paused.
- **Campaign-level negative-keyword safety layer added.** Fifty-four broad and phrase negatives now
  exclude trainer jobs and education, agencies and vendors, unrelated modalities, free/online
  workouts, and the competitor brands already seen in search terms. The historical exact negatives
  remain in place for now; review them from evidence rather than deleting them wholesale.

On 22 September, `generate_lead` was retained as the only Primary imported website action. The
phone-click, email-click, and chat-open actions are Secondary: they describe intent, not a confirmed
lead. The inactive `Website traffic` page-view action is also Secondary. The *Page view* goal was
removed from account defaults and the campaign settings now show only *Submit lead forms* as its
conversion goal. `Local actions - Website visits` remains a Google-hosted Primary action in the
account, but its Page view goal is not assigned to the campaign. There are still no measured lead
conversions, so Maximize clicks is unchanged.

Call reporting is on and the approved account/ad-group call asset uses Urs's existing number. Its
editor reports "call recording off". The conversion setup currently offers website calls and uploads,
but not *Calls from ads*; the account has no duration-qualified call action to verify yet. Check again
after Google's call-reporting change has propagated; never promote a phone-button click as a substitute.
The conversion wizard was checked again on 22 September and still offered only website calls and
uploads. The imported `generate_lead` action has no recent conversions and is counted in GA4, not
directly in Ads. The website emits it only for a visitor's first Tidio message, and only when the
visitor has enabled analytics. It does not represent phone or email enquiries.

The conversion wizard was rechecked with *Conversions from phone calls* as the only selected source
and *Phone call lead* as the category. It offered website-number calls and click-to-call on the
website, but still no *Calls from ads* option. Account settings confirm call reporting is on, and
the Swiss call asset is eligible. Do not substitute the existing *Clicks to call* proxy for a
duration-qualified call. Ask Google Ads support or the account owner to resolve the missing option
if it remains unavailable after propagation.

On 22 September, six account-level auto-apply recommendation types were disabled in the History
tab and verified Off: *Improve your responsive search ads*, *Remove non-serving keywords*, *Use
optimized targeting*, *Upgrade your conversion tracking*, *Bid more efficiently with Maximize
clicks*, and *Bid more efficiently with Maximize conversions*. They could otherwise rewrite copy,
remove local keywords, expand targeting, change attribution, or silently change bidding. Only
*Use optimized ad rotation* remains On. *Add new keywords* and *Add broad match keywords* were
already Off. Review recommendations manually during the weekly check.

The account-level `Kontakt` sitelink and its shared ad-group associations now use the site's `du`
voice (`Mach den ersten Schritt` / `Ich freue mich auf dich`) and link directly to `/#kontakt`. The
campaign-level `Pilates Thalwil` sitelink now uses `Ruhig und präzise trainieren` / `In Kleingruppen
oder persönlich` and links directly to `/angebot/pilates`, removing the unsupported medical-outcome
promise. Both revised assets are pending Google's review. The unsupported `Neukundenrabatt` sitelink
is paused at account level and its formerly enabled Pilates ad-group association was paused on
22 September; verify that it remains paused during the weekly asset review.

GA4 now has event-scoped custom dimensions for `contact_method` and `source_surface` (both verified in
property 347351810). The latter is emitted by the website changes in this release; live event
delivery still needs verification in GA4 Realtime. GA4 has
no Search Console link; the signed-in maintainer is not a verified owner of `wirkstattnatur.ch` in the
link wizard, so Urs or the domain's verified owner must grant access before this can be connected.

On 22 September, three Pilates phrase-match keywords (`pilates thalwil`, `pilates horgen`,
`pilates privatunterricht`) were added to the Pilates ad group and were pending review. The local
Personal Training terms `personal training thalwil` and `personal trainer horgen` already existed;
no duplicate was retained. Four poor-fit generic/workout keywords were paused: `training studio`,
`coach trainer`, `pilates workout`, and `pilates workout program`. The campaign's CHF 2 daily budget
did not change. A campaign-level broad negative `reformer` was confirmed, so no duplicate was added.

Still outstanding: a duration-qualified call conversion, real lead-event verification, and a
deliberate review of the historical exact negatives.

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
- The campaign was re-enabled on 22 September 2026 after its destinations, copy, structure and
  campaign-level negatives were corrected.

## Phase 0 — make it measurable (blocking)

Nothing else is worth doing first, and doing it in the wrong order is worse than doing nothing: an
imported conversion that never fires teaches Smart Bidding to buy the wrong traffic, which is a
confident failure rather than an honest one.

- [x] Register `generate_lead`, `contact_phone_click`, `contact_email_click`, and `contact_chat_open`
      as key events in GA4 property 347351810.
- [x] Import all four events into Google Ads. The new-action wizard initially created all four as
      Primary; before adding their goals to the campaign, keep only `generate_lead` Primary and demote
      the three contact-click/open proxies to Secondary.
- [x] Enable account-level call reporting.
- [ ] Create a duration-qualified **Calls from ads** conversion with a 60-second minimum and confirm a
      current call or location asset supplies the correct number. This does not depend on the cookie
      banner, so it is the most complete lead signal available for a business whose primary CTA is the
      phone.
- [x] Remove *Page view* from account-default goals; the campaign settings now show *Submit lead
      forms* only. Keep page views out of bidding while `Local actions - Website visits` remains a
      Google-hosted Primary action outside the campaign goal.
- [x] Record a baseline snapshot of the tables above before changing anything else.

## Phase 1 — fix the account

- [x] Repoint the two intended responsive ads: Pilates → `/angebot/pilates`, Personal Training →
      `/angebot/personal-training`. The four obsolete expanded text ads remain paused with their old
      URLs and must never be re-enabled unchanged.
- [x] Turn off the Display Network.
- [x] Turn off automatically created assets (they mix the site's `du` voice with the old `Sie` copy).
      The campaign settings were verified as "Off: Use only assets I provide directly for my ads"
      after Urs confirmed Google's warning on 22 September.
- [x] Pause the four legacy expanded text ads carrying discount, free-trial or unsupported copy.
- [x] Add a campaign-level thematic phrase/broad layer for trainer jobs and education, agencies and
      vendors, unrelated modalities, free/online workouts, and competitor brands.
- [ ] Review and retire redundant historical exact negatives only when the search-terms evidence shows
      they are safely covered by the thematic layer.
- [x] Start a small local-intent experiment with `pilates thalwil`, `pilates horgen`, and
      `pilates privatunterricht` in the Pilates ad group. Existing Personal Training local terms
      include `personal trainer thalwil`, `personal training thalwil`, and `personal trainer horgen`.
- [x] Rename the campaign to `Pilates & Personal Training | Search`.
- [x] Keep Maximize clicks while there are zero verified lead conversions. A maximum CPC cap is not
      set; choose one only after reviewing the CPC distribution and lost relevant local searches.

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

The point of the cadence is the loop, not the ceremony. Each review takes both data sources, asks what
they disagree about, and ends with a decision.

| Cadence | Work |
|---|---|
| Weekly (15 min) | Spend and pacing; **Ads search-terms report** → new negatives; disapprovals |
| Monthly (45 min) | Leads by channel; cost per lead; ad strength; landing-page check; **Search Console queries vs the keyword list**; budget decision |
| Quarterly | Offer, creative refresh, structure, whether to scale |

**The two sources answer different questions, so read them together:**

- **Ads search terms** show what people typed *before* clicking a paid ad — including the terms that
  wasted money. This is the negative-keyword feed.
- **Search Console queries** show what people typed *without* clicking an ad, and which pages already
  rank. Terms the site earns impressions for but the campaign does not bid on are the cheapest new
  keyword ideas available, and terms with impressions but no clicks tell you the page or the offer is
  the problem, not the ad.

Experiments belong in the weekly slot. Change one thing at a time — a keyword set, an asset, a bid
strategy — note it, and give it enough time to produce signal before judging it. At CHF 2/day that
means weeks, not days; judging a change after three days is reading noise.

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
- Consider Maximize Conversions only after reliable lead conversions accumulate, with a deliberate
  before/after test; do not treat a fixed monthly count as a guarantee that bidding will improve.
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
- **Intermittent:** controls that Google Ads mounts on **hover**, notably the per-ad "Edit this ad"
  pencil, and long conversion-setup sessions after the account reaches Chrome's high-memory state.
  The final URLs were corrected on 21 September, but do not rely on this route for repeatable bulk
  work or unattended monitoring.
- A **headed** browser may behave differently, but a headed browser on the operator's own machine
  steals focus, which is why that route was abandoned.
- Moving the work to a second machine does not help: Google binds sessions to the device, so a copied
  Chrome profile arrives **signed out** and cannot be signed in automatically.

Conclusion: prefer **Editor or manual work** for bulk ad and keyword edits, and use the browser for
bounded account-setting changes until API access exists.

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
