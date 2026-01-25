// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animated alerts on enroll button clicks
document.getElementById('enroll-btn').addEventListener('click', () => {
    alert('شكراً لاهتمامك! عملية التسجيل قادمة قريباً.');
});

document.querySelectorAll('.enroll-course').forEach(button => {
    button.addEventListener('click', () => {
        alert('تم التسجيل في الدورة! تحقق من لوحة التحكم الخاصة بك.');
    });
});

// Add fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});