// 平滑滚动（导航锚点）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// 复制代码
function copyCode(btn) {
    const codeBlock = btn.closest('.code-window').querySelector('.code-body code');
    if (!codeBlock) return;

    const text = codeBlock.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = '已复制 ✓';
        btn.style.color = '#4ade80';
        btn.style.borderColor = '#4ade80';
        setTimeout(() => {
            btn.textContent = original;
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

// 获取 Key 按钮
function handleGetKey() {
    alert('请联系客服获取 API Key\n\nRoute: gacodeapi.com');
}

// 联系购买按钮
function handleContact() {
    alert('请联系客服进行购买\n\n支持微信 / 支付宝');
}

// 滚动进场动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.feature-card, .model-card, .doc-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(el);
});

// 导航栏滚动阴影
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
