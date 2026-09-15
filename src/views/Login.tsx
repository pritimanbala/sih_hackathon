import { useState } from "react"
import { useApp } from "../context"
import type { PatientLanguage, Role } from "../types"
import { languageLabels, translate } from "../i18n"

export function Login() {
  const { setRole, setView, setPatientKioskOpen, resetPatientIntake, patientLanguage, setPatientLanguage } = useApp()
  const [hovered, setHovered] = useState<Role | null>(null)
  const t = (text: string) => translate(text, patientLanguage)

  const handleSelect = (role: Role) => {
    setRole(role)
    setView(
      role === "admin"
        ? "admin-dashboard"
        : role === "radiologist"
          ? "radiologist-dashboard"
          : "doctor-dashboard",
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8FAFC] text-slate-900">
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-xl font-bold text-white">✚</span>
          <div><div className="font-bold tracking-tight">MediTriage</div><div className="text-xs text-slate-500">{t("AI-Powered Imaging Triage Platform")}</div></div>
        </div>
        <div className="flex items-center gap-2"><span className="hidden text-sm text-slate-500 sm:inline">{t("Home")}</span>
          <label className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600 shadow-sm">
            <span aria-hidden="true">文</span><span className="sr-only">{t("Select language")}</span>
            <select value={patientLanguage} onChange={(event) => setPatientLanguage(event.target.value as PatientLanguage)} className="max-w-[92px] bg-transparent font-semibold outline-none" aria-label={t("Select language")}><option value="en">{languageLabels.en}</option><option value="hi">{languageLabels.hi}</option><option value="ta">{languageLabels.ta}</option></select>
          </label>
        </div>
      </nav>
      <main className="px-3 py-8 sm:px-6 sm:py-10">

      {/* Role cards */}
      <div className="mx-auto mb-8 grid w-full max-w-[960px] grid-cols-1 items-stretch gap-4 px-0 sm:grid-cols-2 sm:gap-5 sm:px-4">
        {[
          {
            role: "admin" as Role,
            title: "Reception / Admin",
            description:
              "Register patients, manage assignments, track imaging workflow, and coordinate referrals.",
            capabilities: [
              "Patient registration",
              "Doctor assignment",
              "Referral management",
              "Workflow oversight",
            ],
            color: "#1D4ED8",
            icon: "⊞",
          },
          {
            role: "radiologist" as Role,
            title: "Radiologist",
            description:
              "Review ordered studies, assess report severity, and upload imaging files for consultant review.",
            capabilities: [
              "Study review",
              "Report severity",
              "DICOM upload",
              "Consultant handoff",
            ],
            color: "#7C3AED",
            icon: "◉",
          },
          {
            role: "doctor" as Role,
            title: "Clinician / Doctor",
            description:
              "Review prioritized patient queue, inspect medical imaging, document findings, and refer patients.",
            capabilities: [
              "Patient queue",
              "DICOM viewer",
              "AI findings review",
              "Clinical documentation",
            ],
            color: "#0891B2",
            icon: "◎",
          },
        ].map(({ role, title, description, capabilities, color, icon }) => {
          const active = hovered === role
          return (
            <div
              key={role}
              role="button"
              tabIndex={0}
              aria-label={`Enter as ${t(title)}`}
              onMouseEnter={() => setHovered(role)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleSelect(role)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  handleSelect(role)
                }
              }}
              className="order-4 min-w-0 flex-1 text-left rounded-lg transition-all duration-150"
style={{
                order: role === "admin" ? 1 : role === "doctor" ? 2 : 4,
                width: "100%",
                minHeight: 340,
                padding: 24,
                background: active ? "#FFFFFF" : "#FFFFFF",
                border: active ? `2px solid ${color}` : "2px solid #E2E8F0",
                boxShadow: active
                  ? `0 4px 20px ${color}20`
                  : "0 1px 3px rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center rounded text-white text-xl"
                  style={{
                    width: 40,
                    height: 40,
                    background: active ? color : "#F1F5F9",
                    color: active ? "#fff" : color,
                    transition: "all 0.15s",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "#0F172A" }}
                  >
                    {t(title)}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "#64748B", fontFamily: "var(--font-mono)" }}
                  >
                    {role.toUpperCase()}
                  </div>
                </div>
              </div>
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: "#64748B" }}
              >
                {t(description)}
              </p>
              <ul className="space-y-1">
                {capabilities.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "#475569" }}
                  >
                    <span style={{ color, fontSize: 8 }}>●</span>
                    {t(c)}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                aria-label={`Enter as ${t(title)}`}
                onClick={(event) => {
                  event.stopPropagation()
                  handleSelect(role)
                }}
                className="mt-4 w-full text-xs font-semibold flex items-center gap-1.5 justify-center py-2 rounded transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ background: color, color: "#fff" }}
              >
                {t("Enter as")} {t(title)} →
              </button>
            </div>
          )
        })}
        <button type="button" onClick={() => { resetPatientIntake(); setPatientKioskOpen(true) }} style={{ order: 3 }} className="min-w-0 rounded-lg border-2 border-teal-200 bg-teal-50 p-6 text-left shadow-sm transition hover:border-teal-600 hover:bg-teal-100">
          <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded bg-teal-700 text-xl text-white">✚</span><div><div className="font-semibold text-slate-900">{t("Patient")}</div><div className="text-xs text-slate-500">PATIENT</div></div></div>
          <p className="mt-3 text-sm text-slate-600">{t("Open patient check-in")}</p>
          <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded bg-teal-700 py-2 text-xs font-semibold text-white">✚ {t("Open patient check-in")} →</span>
        </button>
      </div>


      {/* Footer notice */}
      <div
        className="text-center text-xs max-w-md leading-relaxed"
        style={{
          color: "#94A3B8",
          borderTop: "1px solid #E2E8F0",
          paddingTop: 16,
        }}
      >
        {t("This system is for authorized hospital personnel only. All access is logged. Session expires after 30 minutes of inactivity.")}
      </div>

      {/* Version */}
      <div
        className="mt-3 text-xs"
        style={{ color: "#CBD5E1", fontFamily: "var(--font-mono)" }}
      >
        {t("MediTriage v2.1 · AI Model v1.4 · HIPAA Compliant")}
      </div>
      </main>
    </div>
  )
}
