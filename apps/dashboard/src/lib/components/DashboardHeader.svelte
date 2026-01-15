<script lang="ts">
	let { session }: { session: any } = $props();
</script>

<header class="border-b border-red-900/30 bg-black">
	<div class="flex items-center justify-between px-6 py-4">
		<!-- Left side - Dashboard title -->
		<div class="flex items-center gap-4">
			<h1 class="font-mono text-lg font-bold text-gray-300">Dashboard</h1>
		</div>
		
		<!-- Right side - User info and links -->
		<div class="flex items-center gap-4">
			<a
				href="/faq"
				class="font-mono text-sm text-gray-400 transition-colors hover:text-red-500"
			>
				FAQ
			</a>
			
			{#if session?.user}
				<div class="flex items-center gap-3 border-l border-red-900/30 pl-4">
					{#if session.user.image}
						<img
							src={session.user.image}
							alt={session.user.name || 'User'}
							class="h-8 w-8 rounded border-2 border-red-900/50"
						/>
					{/if}
					<span class="font-mono text-sm text-gray-400">{session.user.name || session.user.email}</span>
				</div>
			{/if}
		</div>
	</div>
</header>
