import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Auth disabled for development
	return {};
};
