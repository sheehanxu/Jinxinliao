document.addEventListener('DOMContentLoaded', function() {
    const cardData = [
        { icon: '🔄', title: '适应不良', link: 'https://udify.app/chat/TRvlKOx2vaKIwLZ2' },
        { icon: '📚', title: '专业压力', link: 'https://udify.app/chat/FdgrBNQj0RfbsR95' },
        { icon: '💻', title: '网络依赖', link: 'https://udify.app/chat/UREa6nz22Dk9StIG' },
        { icon: '👥', title: '人际关系', link: 'https://udify.app/chat/9grVouyNNol9Bhvc' },
        { icon: '🔍', title: '自我认同', link: 'https://udify.app/chat/LTgHSTlIUy9pYhpT' },
        { icon: '❤️', title: '情感问题', link: 'https://udify.app/chat/4nFwMDv2jdZDbIxD' },
        { icon: '📝', title: '咨询记录复盘', link: 'https://udify.app/chat/df05Om90OjbtJOWD' }
    ];

    const cardContainer = document.getElementById('cardContainer');

    cardData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <div class="card-icon">${card.icon}</div>
            <div class="card-title">${card.title}</div>
            <a href="${card.link}" class="card-link">开始</a>
        `;
        cardContainer.appendChild(cardElement);
    });
});