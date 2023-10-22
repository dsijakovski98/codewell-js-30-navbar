const burger = document.querySelector('.burger')
const navMenu = document.querySelector('.links-container')
const backdrop = document.querySelector('nav .backdrop')

const toggleMenu = () => {
	const expanded = navMenu.getAttribute('aria-expanded')
	const newExpanded = expanded === 'true' ? 'false' : 'true'

	navMenu.setAttribute('aria-expanded', newExpanded)

	const icon = burger.querySelector('i')
	const [oldIcon, newIcon] = expanded === 'true' ? ['times', 'bars'] : ['bars', 'times']

	icon.className = icon.className.replace(oldIcon, newIcon)
}

burger.addEventListener('click', toggleMenu)
backdrop.addEventListener('click', toggleMenu)

// Options menu follows mouse
const navLinks = document.querySelectorAll('.nav-links > li')

navLinks.forEach((navLink) => {
	navLink.addEventListener('mousemove', (e) => {
		e.stopPropagation()

		const expandedMenu = document.querySelector('.links-container').getAttribute('aria-expanded')
		// Stop mouse mapping when mobile menu is open
		if (expandedMenu === 'true') return

		const anchor = navLink.querySelector('a')
		const { x, y, width, height } = anchor.getBoundingClientRect()

		const mouseY = e.clientY - height / 2
		const padding = 8
		// Stop mouse mapping when the mouse is in the link options
		if (mouseY >= y + padding) return

		const newX = e.clientX - x - width / 2

		const linkOptions = navLink.querySelector('.link-options')
		linkOptions.style.translate = `${newX}px`
	})
})
