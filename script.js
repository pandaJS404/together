// 导航栏响应式功能
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// 平滑滚动
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // 关闭移动端菜单
        navbarLinks.classList.remove('active');
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'rgba(1, 1, 32, 0.1) 0px 2px 10px';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 表单提交处理
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 模拟表单提交
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = '提交中...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = '提交成功';
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// 卡片悬停效果
const cards = document.querySelectorAll('.product-card, .case-card, .tech-item, .stat-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = 'rgba(1, 1, 32, 0.15) 0px 8px 20px';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'rgba(1, 1, 32, 0.1) 0px 4px 10px';
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 滚动动画
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .hero-content, .about-content, .products-grid, .technologies-content, .cases-grid, .contact-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// 初始设置
const initializeAnimations = () => {
    const elements = document.querySelectorAll('.section-header, .hero-content, .about-content, .products-grid, .technologies-content, .cases-grid, .contact-content');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
};

initializeAnimations();
window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // 初始检查