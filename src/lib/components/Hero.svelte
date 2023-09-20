<script>
  import Button from './ui/button/button.svelte'
</script>

<section class="flex items-center justify-between">
  <div class="">
    <h1 class="mb-4 text-3xl font-semibold">
      Cooper is a <span class="text-primary">full-stack web developer</span>
    </h1>
    <p class="mb-3 text-muted">He creates cool sites with modern technologies</p>
    <Button href="mailto:cooperoliff@gmail.com">Contact me &lt;~&gt;</Button>
  </div>
  <img
    src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
    alt=""
    class="h-80 w-80 object-contain"
  />
</section>
