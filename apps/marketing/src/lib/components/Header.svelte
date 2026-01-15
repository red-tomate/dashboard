<script lang="ts">
	// Sticky header component
</script>

<header class="sticky top-0 z-50 border-b border-red-900/30 bg-black/80 backdrop-blur-sm">
	<nav class="container mx-auto flex items-center justify-between px-4 py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 text-xl font-bold text-red-500">
			<span class="text-2xl">🍅</span>
			<span class="font-mono">TOMATE</span>
		</a>

		<!-- Navigation -->
		<div class="flex items-center gap-4">
			<a
				href="https://docs.tomate.dev"
				target="_blank"
				rel="noopener noreferrer"
				class="font-mono text-sm text-gray-400 transition-colors hover:text-red-500"
			>
				Docs
			</a>
			<a
				href="https://dashboard.tomate.dev"
				class="rounded border-2 border-red-500 bg-red-500/10 px-4 py-2 font-mono text-sm font-bold text-red-500 transition-all hover:bg-red-500 hover:text-black"
			>
				Dashboard
			</a>
		</div>
	</nav>
</header>
