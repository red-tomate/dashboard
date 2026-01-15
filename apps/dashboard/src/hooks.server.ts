import type { Handle } from '@sveltejs/kit';

// Auth temporarily disabled for development
export const handle: Handle = async ({ event, resolve }) => {
	// Mock session for development
	event.locals.session = {
		user: {
			name: 'Dev User',
			email: 'dev@tomate.dev',
			image: null
		}
	};
	
	return resolve(event);
};
