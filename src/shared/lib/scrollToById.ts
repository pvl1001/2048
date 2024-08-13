export function scrollToById(id: string) {
    const $target = document.getElementById(id);
    $target?.scrollIntoView({behavior: 'smooth'});
}
