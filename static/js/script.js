// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      }),
    )
  }

  // Contact Form Handling
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Basic validation
      if (!data.name || !data.email || !data.phone) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        alert("Please enter a valid email address.")
        return
      }

      // Phone validation (basic)
      const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
      if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
        alert("Please enter a valid phone number.")
        return
      }

      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]')
      const originalText = submitButton.innerHTML

      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
      submitButton.disabled = true

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your inquiry! We will contact you within 24 hours.")
        contactForm.reset()
        submitButton.innerHTML = originalText
        submitButton.disabled = false
      }, 2000)
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to header
  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add loading animation to buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      // Only add loading effect for buttons that don't have href or have href="#"
      if (!this.href || this.href.endsWith("#")) {
        e.preventDefault()

        const originalContent = this.innerHTML
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'
        this.style.pointerEvents = "none"

        setTimeout(() => {
          this.innerHTML = originalContent
          this.style.pointerEvents = "auto"
        }, 1500)
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document
    .querySelectorAll(
      ".feature-card, .service-card, .value-card, .team-feature, .service-item, .location-card, .action-card",
    )
    .forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })

  // Add click tracking for analytics (placeholder)
  document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"], a[href^="https://wa.me/"]').forEach((link) => {
    link.addEventListener("click", function () {
      // Track contact method clicks
      console.log("Contact method clicked:", this.href)
      // Here you would typically send data to your analytics service
    })
  })

  // Auto-hide mobile menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburger?.classList.remove("active")
      navMenu?.classList.remove("active")
    }
  })
})

// Utility function to format phone numbers
function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/)
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`
  }
  return phoneNumber
}

// Utility function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Add to favorites functionality (localStorage)
function addToFavorites(service) {
  const favorites = JSON.parse(localStorage.getItem("vpsFavorites") || "[]")
  if (!favorites.includes(service)) {
    favorites.push(service)
    localStorage.setItem("vpsFavorites", JSON.stringify(favorites))
    console.log("Added to favorites:", service)
  }
}

// Get user's preferred contact method
function getPreferredContactMethod() {
  return localStorage.getItem("vpsPreferredContact") || "phone"
}

// Set user's preferred contact method
function setPreferredContactMethod(method) {
  localStorage.setItem("vpsPreferredContact", method)
}
