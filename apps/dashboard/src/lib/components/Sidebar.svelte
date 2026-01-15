<script lang="ts">
	import { page } from '$app/stores';
	
	const tabs = [
		{ name: 'Tables', icon: '📊', path: '/' },
		{ name: 'Logs', icon: '📝', path: '/logs' },
		{ name: 'Functions', icon: '⚡', path: '/functions' },
		{ name: 'Actions', icon: '🎬', path: '/actions' }
	];
	
	const isActive = (path: string) => {
		return $page.url.pathname === path;
	};
</script>

<aside class="flex h-full w-64 flex-col border-r border-red-900/30 bg-black">
	<!-- Logo -->
	<div class="border-b border-red-900/30 p-6">
		<a href="/" class="flex items-center gap-2 text-xl font-bold text-red-500">
			<span class="text-2xl">🍅</span>
			<span class="font-mono">TOMATE</span>
		</a>
	</div>
	
	<!-- Navigation -->
	<nav class="flex-1 p-4">
		<ul class="space-y-2">
			{#each tabs as tab}
				<li>
					<a
						href={tab.path}
						class="flex items-center gap-3 border-2 px-4 py-3 font-mono text-sm transition-all
							{isActive(tab.path)
								? 'border-red-500 bg-red-500/10 text-red-500'
								: 'border-red-900/30 text-gray-400 hover:border-red-500/50 hover:text-red-500'}"
					>
						<span class="text-xl">{tab.icon}</span>
						<span class="font-bold">{tab.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
