
        const shareIcon = document.getElementById('share-icon');
        const shareButtons = document.getElementById('share-buttons');

        shareIcon.addEventListener('click', () => {
            shareButtons.style.display = shareButtons.style.display === 'none' || shareButtons.style.display === '' ? 'block' : 'none';
        });

        document.getElementById('share-facebook').addEventListener('click', () => {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
        });

        document.getElementById('share-linkedin').addEventListener('click', () => {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        });

        document.getElementById('share-whatsapp').addEventListener('click', () => {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(document.title);
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        });
    
