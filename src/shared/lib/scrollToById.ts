export function scrollToById(id: string) {
    let $target = document.getElementById(id);
    $target?.scrollIntoView({behavior: 'smooth'});
}
