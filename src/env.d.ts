interface ImportMetaEnv {
	readonly RESEND_API_KEY: string;
	readonly PUBLIC_GOOGLE_SHEETS_URL: string;
	readonly PUBLIC_SUPABASE_URL: string;
	readonly PUBLIC_SUPABASE_ANON_KEY: string;
	readonly PUBLIC_GA_MEASUREMENT_ID: string;
	readonly NOTION_INTEGRATION_SECRET: string;
	readonly NOTION_DATABASE_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
