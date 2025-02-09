document.addEventListener('DOMContentLoaded', () => {
    const emojis = document.querySelectorAll('.emoji');
    
    // Function to show emojis one by one
    const showEmojis = () => {
        emojis.forEach((emoji, index) => {
            setTimeout(() => {
                emoji.classList.add('show');
            }, index * 500); // Delay each emoji by 500ms
        });
    };

    // Start the animation
    showEmojis();
});
