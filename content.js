setInterval(() => {
    const flipCards = document.querySelectorAll('.flip-card');
    const globalShowHideButtons = Array.from(document.querySelectorAll('span.ng-star-inserted'))
        .filter(button => {
            const text = button.textContent.trim();
            return text === "Show" || text === "Hide";
        });

    if (globalShowHideButtons.length === 0) return;

    const globalButtonText = globalShowHideButtons[0].textContent.trim();

    flipCards.forEach((card, index) => {
        const backSide = card.querySelector('.flip-card-back');

        if (globalButtonText === "Show") {
            if (!card.classList.contains('flip-card-transform')) {
                card.classList.add('flip-card-transform');
            }
            if (backSide) {
                backSide.style.backgroundColor = 'red';
            }
        } else if (globalButtonText === "Hide") {
            if (backSide) {
                backSide.style.backgroundColor = 'white';
            }
        }
    });
}, 1000);
