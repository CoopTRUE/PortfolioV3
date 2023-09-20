<script>
  import Header from '$lib/components/Header.svelte'
  import '../app.css'
</script>

<div class="flex min-h-screen flex-col bg-primary-foreground font-['Fira_Code'] text-foreground">
  <Header />
  <div class="flex-1">
    <slot />
  </div>
</div>
