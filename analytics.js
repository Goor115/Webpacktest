function createAnalytics() {
    let couter = 0;
    let isDestroyed = false;

    const  listener = () => couter ++;
    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },
        getClicks() {
            if (isDestroyed) {
                return 'Anaiytics is destroyed';
            }
            return couter;
        }
    }
}

window.analytics = createAnalytics();