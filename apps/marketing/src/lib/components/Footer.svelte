<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-red-900/30 bg-black py-8">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
			<!-- Copyright -->
			<div class="font-mono text-sm text-gray-500">
				© {currentYear} Tomate. All rights reserved.
			</div>

			<!-- Social Links -->
			<div class="flex gap-6">
				<a
					href="https://github.com/red-tomate"
					target="_blank"
					rel="noopener noreferrer"
					class="font-mono text-sm text-gray-400 transition-colors hover:text-red-500"
					aria-label="GitHub"
				>
					GitHub
				</a>
				<a
					href="https://x.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="font-mono text-sm text-gray-400 transition-colors hover:text-red-500"
					aria-label="X"
				>
					X
				</a>
				<a
					href="https://discord.gg/"
					target="_blank"
					rel="noopener noreferrer"
					class="font-mono text-sm text-gray-400 transition-colors hover:text-red-500"
					aria-label="Discord"
				>
					Discord
				</a>
			</div>
		</div>
	</div>
</footer>
