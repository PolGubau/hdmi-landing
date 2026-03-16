interface ImportMetaEnv {
	readonly PUBLIC_RESEND_API: string;
	readonly PUBLIC_GOOGLE_SHEETS_URL: string;
	readonly PUBLIC_SUPABASE_URL: string;
	readonly PUBLIC_SUPABASE_ANON_KEY: string;
	readonly PUBLIC_SUPABASE_PUBLIC_KEY: string;
	readonly PUBLIC_GA_MEASUREMENT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
