export function calculateMyAge() {
    const diff = Date.now() - 1170972000000;
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}