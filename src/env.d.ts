interface ImportMetaEnv {
	readonly PUBLIC_RESEND_API: string;
	readonly PUBLIC_GOOGLE_SHEETS_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
