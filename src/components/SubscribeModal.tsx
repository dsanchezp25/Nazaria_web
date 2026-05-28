"use client";

import { useState } from "react";
import { useSubscribe } from "@/context/SubscribeContext";

export default function SubscribeModal() {
  const { open, closeModal } = useSubscribe();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email }),
      });

      if (res.ok) {
        setStatus("ok");
        setNombre("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    closeModal();
  };

  const isLoading = status === "loading";

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-[fade-in_0.25s_ease-out] rounded-2xl bg-surface p-8 shadow-2xl border border-border/30">
        {status === "ok" ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold/15">
              <span className="material-symbols-outlined text-4xl text-accent-gold">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-white">¡Gracias!</h3>
            <p className="mt-2 text-base text-white/60">
              Te avisaremos cuando Nazaria esté disponible.
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-xl bg-accent-gold px-8 py-3 text-base font-semibold text-primary-dark transition-opacity hover:opacity-90"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-xl font-extrabold tracking-wide text-accent-gold">
                NAZARIA
              </h3>
              <button
                onClick={handleClose}
                className="rounded-lg p-1 text-white/40 transition-colors hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <p className="mb-6 text-base text-white/70">
              Déjanos tu nombre y email y te avisaremos en cuanto la app esté disponible.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="nombre" className="mb-2 block text-base font-medium text-white/60">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  disabled={isLoading}
                  placeholder="Tu nombre"
                   className="w-full rounded-xl border-2 border-border/50 bg-primary-dark/30 px-5 py-3.5 text-base text-white placeholder:text-white/25 outline-none transition-colors focus:border-accent-gold disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-base font-medium text-white/60">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border-2 border-border/50 bg-primary-dark/30 px-5 py-3.5 text-base text-white placeholder:text-white/25 outline-none transition-colors focus:border-accent-gold disabled:opacity-50"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-error">Hubo un error. Inténtalo de nuevo.</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-shimmer mt-2 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-xl text-base font-semibold text-primary-dark transition-opacity hover:brightness-110 disabled:opacity-60"
              >
                {isLoading ? (
                  <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-xl">notifications_active</span>
                    Avisadme
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
