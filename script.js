// 헤더 스크롤 효과
const header = document.querySelector('header');

function updateHeader() {
    if (window.scrollY > 50) {
        header.classList.add('has-scrolled');
    } else {
        header.classList.remove('has-scrolled');
    }
}

// 스크롤 이벤트
window.addEventListener('scroll', updateHeader);
// 초기 상태 확인
updateHeader();

// 사이드 메뉴 토글 (데스크톱/모바일 공용)
const menuToggle = document.getElementById('menuToggle'); // 모바일 햄버거
const desktopMenuToggle = document.getElementById('desktopMenuToggle'); // 데스크톱 MENU 버튼
const mobileNav = document.getElementById('mobileNav');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const navLinks = document.querySelectorAll('.nav-link');

function toggleSideMenu() {
    if (!mobileNav || !mobileMenuOverlay) return;
    if (menuToggle) menuToggle.classList.toggle('active');
    if (desktopMenuToggle) desktopMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleSideMenu);
}

if (desktopMenuToggle) {
    desktopMenuToggle.addEventListener('click', toggleSideMenu);
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', toggleSideMenu);
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleSideMenu();
    });
});

// Top 버튼
const topBtn = document.getElementById('topBtn');
if (topBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topBtn.classList.add('show');
        } else {
            topBtn.classList.remove('show');
        }
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 문의폼 제출 이벤트
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            company: document.getElementById('company').value,
            contact: document.getElementById('contact').value,
            inquiry: document.getElementById('inquiry').value
        };
        
        console.log('문의 내용:', formData);
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        inquiryForm.reset();
    });
}

