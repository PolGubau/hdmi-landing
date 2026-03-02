import { actions } from "astro:actions";
import { useActionState, useEffect, useRef } from "react";

type ActionState = {
  success?: boolean;
  alreadySubscribed?: boolean;
  message?: string;
} | null;

export default function NewsletterInput() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, submitAction, isPending] = useActionState<ActionState, FormData>(
    async (_prevState, formData) => {
      const email = formData.get("email") as string;
      return await actions.subscribeNewsletter({ email });
    },
    null
  );

  // Reset form on success
  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  const isSuccess = state?.success === true;
  const isAlreadySubscribed = state?.alreadySubscribed === true;
  const isError = state && !state.success && !state.alreadySubscribed;

  return (
    <form ref={formRef} action={submitAction} className="relative max-w-md">
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          required
          disabled={isPending || isSuccess}
          className="w-full px-5 py-3.5 pr-32 rounded-xl bg-accent/40 border border-primary text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isPending || isSuccess}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-primary text-background rounded-lg font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          style={{ letterSpacing: "-0.02em" }}
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <title>Enviando...</title>
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
          ) : isSuccess ? (
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>¡Suscripción exitosa!</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              ¡Listo!
            </span>
          ) : (
            "Suscribir"
          )}
        </button>
      </div>

      {isError && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {state.message || "Hubo un error. Inténtalo de nuevo."}
        </p>
      )}

      {isAlreadySubscribed && (
        <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
          Ya estás suscrito a nuestra newsletter
        </p>
      )}
    </form>
  );
}

