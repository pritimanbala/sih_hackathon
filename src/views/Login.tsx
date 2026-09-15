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
    <div
      className="relative min-h-screen overflow-x-hidden px-3 py-8 sm:px-6 sm:py-12"
      style={{ background: "#F8FAFC" }}
    >
      <label className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-xs text-slate-600 shadow-sm sm:right-6 sm:top-6">
        <span className="sr-only">{t("Select language")}</span>
        <span aria-hidden="true">文</span>
        <select value={patientLanguage} onChange={(event) => setPatientLanguage(event.target.value as PatientLanguage)} className="max-w-[92px] bg-transparent font-semibold outline-none" aria-label={t("Select language")}>
          <option value="en">{languageLabels.en}</option>
          <option value="hi">{languageLabels.hi}</option>
          <option value="ta">{languageLabels.ta}</option>
        </select>
      </label>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div
            className="flex items-center justify-center rounded-lg text-white font-bold"
            style={{
              width: 44,
              height: 44,
              background: "#1D4ED8",
              fontSize: 15,
              fontFamily: "var(--font-mono)",
            }}
          >
            AI
          </div>
          <div className="text-left">
            <div
              className="text-2xl font-bold tracking-tight"
              style={{ color: "#0F172A" }}
            >
              MediTriage
            </div>
            <div
              className="text-sm"
              style={{ color: "#64748B", fontFamily: "var(--font-mono)" }}
            >
              {t("AI-Powered Imaging Triage Platform")}
            </div>
          </div>
        </div>
        <p
          className="text-sm max-w-sm mx-auto leading-relaxed"
          style={{ color: "#64748B" }}
        >
          {t("Select your role to access the appropriate workspace. All sessions are logged and audited.")}
        </p>
      </div>

      {/* Role cards */}
      <div className="mx-auto grid w-full max-w-[900px] grid-cols-1 items-stretch justify-center gap-4 px-0 mb-8 sm:grid-cols-3 sm:gap-5 sm:px-4">
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
              className="min-w-0 flex-1 text-left rounded-lg transition-all duration-150"
              style={{
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
      </div>

      <button
        onClick={() => {
          resetPatientIntake()
          setPatientKioskOpen(true)
        }}
        className="mb-8 flex w-full max-w-md items-center justify-center gap-3 rounded-xl border-2 border-teal-700 bg-teal-50 px-6 py-5 text-lg font-bold text-teal-900 shadow-sm hover:bg-teal-100"
      >
        <span className="text-2xl">✚</span> {t("Open MediKiosk Patient Check-in")}{" "}
        <span>→</span>
      </button>

      {/* Footer notice */}
      <div
        className="text-center text-xs max-w-md leading-relaxed"
        style={{
          color: "#94A3B8",
          borderTop: "1px solid #E2E8F0",
          paddingTop: 16,
        }}
      >
        This system is for authorized hospital personnel only. All access is
        logged. Session expires after 30 minutes of inactivity.
      </div>

      {/* Version */}
      <div
        className="mt-3 text-xs"
        style={{ color: "#CBD5E1", fontFamily: "var(--font-mono)" }}
      >
        MediTriage v2.1 · AI Model v1.4 · HIPAA Compliant
      </div>
    </div>
  )
}
