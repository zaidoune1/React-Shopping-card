export function formatCurrency  (id) {

    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(id);

}