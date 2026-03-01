import { useState } from "react";

export default function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          disabled={status === "loading" || status === "success"}
          className="w-full px-5 py-3.5 pr-32 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[#0f1115] dark:text-neutral-50 placeholder:text-[#50576b] dark:placeholder:text-neutral-500 focus:outline-none focus:border-[#0f1115] dark:focus:border-neutral-50 transition-colors disabled:opacity-50"
          style={{ letterSpacing: "-0.02em" }}
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-[#0f1115] dark:bg-neutral-50 text-white dark:text-neutral-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          style={{ letterSpacing: "-0.02em" }}
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
          ) : status === "success" ? (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              ¡Listo!
            </span>
          ) : (
            "Suscribir"
          )}
        </button>
      </div>
      
      {status === "success" && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-400">
          ¡Gracias por suscribirte!
        </p>
      )}
      
      {status === "error" && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          Hubo un error. Inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}

