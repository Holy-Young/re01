// 生成星星辅助函数
function getStars(num) {
    return '★'.repeat(num) + '☆'.repeat(5 - num);
}

// 首页逻辑
function initHome() {
    const grid = document.getElementById('course-grid');
    if (!grid) return; // 如果不在首页，停止执行

    courseData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => window.location.href = `detail.html?id=${item.id}`;
        
        // 动态生成卡片 HTML
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${item.cover}')"></div>
            <div class="card-body">
                <h3>${item.title}</h3>
                <div class="tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>
                <p style="margin: 10px 0; font-size:0.9rem; color:#666">${item.desc}</p>
                <div class="stars">${getStars(item.difficulty)}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 详情页逻辑
function initDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) return;

    const item = courseData.find(c => c.id === id);
    if (!item) {
        document.body.innerHTML = "<h1>课程不存在</h1>";
        return;
    }

    // 填充内容
    document.title = item.title;
    document.getElementById('d-title').innerText = item.title;
    document.getElementById('d-video').src = item.video;
    document.getElementById('d-note').innerText = item.teacherNote;
    
    // 设置下载链接
    document.getElementById('btn-code').href = item.code;
    document.getElementById('btn-ppt').href = item.ppt;
}

// 简单的打字机特效
function typeEffect(element, text, speed = 100) {
     let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer); // 单次打字完成，清除定时器
            // 延迟1秒后清空文本并递归调用，实现循环（可自定义延迟时间，如2000=2秒）
            setTimeout(() => {
                const deleteTimer = setInterval(() => {
                    if (element.textContent.length > 0) {
                        element.textContent = element.textContent.slice(0, -1); // 逐字删除
                    } else {
                        clearInterval(deleteTimer);
                        typeEffect(element, text, speed); // 删除完成后重新打字
                    }
                }, speed / 2); // 删除速度可快于打字速度，更自然
            }, 1000);
        }
    }, speed);
}

// 页面加载完成后自动判断执行哪个逻辑
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('course-grid')) {
        initHome();
        const subtitle = document.getElementById('typing-text');
        if(subtitle) typeEffect(subtitle, "记录学习足迹，见证代码力量...");
    } else {
        initDetail();
    }
});