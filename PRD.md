# Product Requirements Document
## EkAdhyapak Sahayak (एक अध्यापक सहायक)

**Version:** 1.0  
**Date:** September 2026  
**Owner:** Rashmi Mahadevaiah  
**Status:** Live prototype — pilot-ready  

---

## 1. Overview

**EkAdhyapak Sahayak** is an offline-first AI teaching assistant for Indian government primary schools where a single teacher manages multiple grades (typically 1–5) in one classroom.

It does not replace the teacher. It multiplies what one teacher can prepare and run in a multi-grade setting — differentiated lesson plans, worksheets, FLN oral assessments, timetables, and blackboard ideas — in under a minute, using free AI tools the teacher already has access to (Grok, Gemini, ChatGPT).

### One-line pitch
*One teacher. Many grades. One AI companion that respects the constraints of the real classroom.*

---

## 2. Problem

| Constraint | Reality |
|------------|---------|
| Staffing | ~1 lakh+ single-teacher primary schools in India; ~7.5 lakh primary teacher vacancies |
| Workload | One adult handles 3–5 grades, multiple subjects, attendance, mid-day meal, FLN goals |
| Differentiation | Textbooks and DIKSHA content are largely single-grade; parallel activities are rare |
| Infrastructure | Intermittent or no internet; shared phones; limited paper and print |
| Time | Lesson planning for multi-grade is the first thing that gets dropped |

Existing digital tools (DIKSHA, Shiksha Copilot, generic ChatGPT) do not natively solve **multi-grade differentiation under single-teacher constraints**.

---

## 3. Goals

### Primary
- Reduce multi-grade lesson-prep time from 30–60+ minutes to under 5 minutes of teacher review.
- Make differentiated activities the default, not an afterthought.
- Stay usable with zero or intermittent internet.

### Secondary
- Support NIPUN Bharat / FLN oral assessment practice.
- Produce materials a teacher can use on blackboard and orally (not only print).
- Keep the teacher in full pedagogical control (review before use).

### Non-goals (v1)
- Student-facing app or login system.
- Automatic grading or student data collection.
- Replacing DIKSHA or state textbooks.
- Running a proprietary LLM on-device (prompts are optimized for free hosted models).

---

## 4. Users

| Persona | Context | Needs |
|---------|---------|--------|
| **Primary teacher (single-teacher school)** | Grades 1–5 in one room; often rural/semi-urban | Fast multi-grade plans, oral-friendly materials, low tech |
| **Cluster / block resource person** | Supports multiple schools | Shareable offline tool, consistent FLN practice |
| **NGO / CSR program manager** | Pilots in high-need districts | Measurable adoption, low training burden |
| **SCERT / SSA officer** | State digital education | Alignment with NEP, NIPUN, existing platforms |

---

## 5. Core Features (v1 — shipped)

| Feature | Description |
|---------|-------------|
| Multi-grade lesson plan | One topic → parallel activities for Grades 1–5 with time boxes and teacher attention map |
| Differentiated worksheets | 3 levels (A/B/C) from the same concept; oral + written mix |
| Story + questions | Short village-context story with graded follow-ups |
| Daily timetable helper | Realistic single-room schedule with where the teacher focuses |
| FLN oral assessment | 8–10 min checks runnable while other groups work |
| Blackboard ideas | Chalk-only drawings and interaction ideas |
| Parent note (Hindi) | Short WhatsApp/diary-ready message |
| Full-day package | End-to-end materials for one topic |
| Offline static templates | Checklist, FLN questions, group ideas when internet is down |

**Architecture:** Single HTML file. Teacher fills context → generates optimized prompt → pastes into free AI → reviews output. No backend, no login, no data leaving the device except the prompt the teacher chooses to paste.

---

## 6. Success Metrics

| Metric | Target (pilot) |
|--------|----------------|
| Time to first usable material | < 3 minutes after open |
| Teacher reports “usable with little edit” | ≥ 70% of generated plans |
| Offline usability | Works fully offline for templates; prompt path works with intermittent connectivity |
| Adoption in pilot schools | 50+ teachers actively using within 90 days of pilot start |
| FLN practice frequency | Teachers report using oral checks ≥ 2× per week |

---

## 7. Constraints & Principles

1. **Offline-first** — Core value must not depend on continuous connectivity.
2. **Teacher in control** — AI proposes; teacher accepts, edits, or discards.
3. **Multi-grade native** — Parallel activities are the default unit of design.
4. **Low materials** — Prefer blackboard, oral, notebooks over print-heavy packs.
5. **Public-good alignment** — Compatible with NEP 2020, NIPUN Bharat, DIKSHA workflows.
6. **No student PII** — No student accounts, logs, or tracking in v1.

---

## 8. Roadmap (summary)

| Phase | Focus |
|-------|--------|
| **Now** | Live HTML tool + prompt library; portfolio + case study |
| **0–6 mo** | Teacher pilots (2–3 districts); Hindi-first UX polish; WhatsApp distribution |
| **6–18 mo** | NGO / SSA partnerships; DIKSHA-aligned packs; block-level training |
| **18–36 mo** | State conversations; 5+ Indian languages; optional offline model packs |

---

## 9. Open Questions

- Optimal distribution channel for teachers with only feature phones vs smartphones.
- How tightly to couple with state FLN assessment schedules.
- Whether a lightweight progressive web app (PWA) is worth the complexity vs pure HTML.

---

## 10. References

- Live tool: https://cdn.jsdelivr.net/gh/mahadevaiahrashmi/EkAdhyapak-Sahayak@main/EkAdhyapak_Sahayak.html  
- Repo: https://github.com/mahadevaiahrashmi/EkAdhyapak-Sahayak  
- Investor pitch: see `EkAdhyapak_Sahayak_Investor_Pitch.pptx` in this repo

---

*This PRD describes the product as built and the intended path for pilots. It is intentionally short so a teacher, NGO partner, or investor can read it in one sitting.*
