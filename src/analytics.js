function createAnalytics() {
    let couter = 0;
    let isDest = false;
    console.log('test');
    const  listener = () => couter ++;
    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDest = true;
        },
        getClicks() {
            if (isDest) {
                return 'Anaiytics is destroyed';
            }
            return couter;
        }
    }
}

window.analytics = createAnalytics();