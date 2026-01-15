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
				<h2 class="mb-2 font-mono text-2xl font-bold text-red-500">FAQ</h2>
				<p class="font-mono text-sm text-gray-400">Frequently Asked Questions</p>
			</div>
			
			<div class="border-4 border-red-900/50 bg-black p-8">
				<div class="space-y-6">
					<div>
						<h3 class="mb-2 font-mono text-lg font-bold text-red-400">What is Tomate?</h3>
						<p class="font-mono text-sm text-gray-400">
							Tomate is a real-time blockchain event indexing platform. Subscribe to events, transform them with mutations, and query your data in real-time.
						</p>
					</div>
					
					<div>
						<h3 class="mb-2 font-mono text-lg font-bold text-red-400">How do I get started?</h3>
						<p class="font-mono text-sm text-gray-400">
							Check out our documentation for a step-by-step guide on setting up your first indexer.
						</p>
					</div>
					
					<div>
						<h3 class="mb-2 font-mono text-lg font-bold text-red-400">Need more help?</h3>
						<p class="font-mono text-sm text-gray-400">
							Visit our docs or join our Discord community for support.
						</p>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
