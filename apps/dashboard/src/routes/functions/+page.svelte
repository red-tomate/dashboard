<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import DashboardHeader from '$lib/components/DashboardHeader.svelte';
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen bg-black text-white">
	<Sidebar />
	
	<div class="flex flex-1 flex-col">
		<DashboardHeader session={data.session} />
		
		<main class="flex-1 overflow-auto p-8">
			<div class="mb-6">
				<h2 class="mb-2 font-mono text-2xl font-bold text-red-500">Functions</h2>
				<p class="font-mono text-sm text-gray-400">Manage your custom functions</p>
			</div>
			
			<div class="border-4 border-red-900/50 bg-black p-8 text-center">
				<div class="text-4xl mb-4">⚡</div>
				<p class="font-mono text-gray-500">No functions yet. Content coming soon.</p>
			</div>
		</main>
	</div>
</div>
