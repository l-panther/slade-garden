export function useScrollReveal() {
  let observer = null

  function init() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-scale')
    if (!revealEls.length) return

    // stagger elements that share the same section for a cascade effect
    const groups = {}
    const sections = Array.from(document.querySelectorAll('section, .topbar, .subbar, .hero'))

    revealEls.forEach((el) => {
      const parent = el.closest('section, .topbar, .subbar, .hero')
      const key = parent ? sections.indexOf(parent) : 0
      groups[key] = groups[key] || []
      groups[key].push(el)
    })

    Object.values(groups).forEach((group) => {
      group.forEach((el, i) => {
        el.style.transitionDelay = Math.min(i * 70, 350) + 'ms'
      })
    })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    revealEls.forEach((el) => observer.observe(el))
  }

  function destroy() {
    if (observer) observer.disconnect()
  }

  onMounted(() => {
    // nextTick lets the page's own markup paint before we query for .reveal
    nextTick(init)
  })

  onUnmounted(destroy)

  return { destroy }
}
