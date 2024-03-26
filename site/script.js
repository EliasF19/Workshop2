function updateDateTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    const timeString = now.toLocaleTimeString('fr-FR');
    document.getElementById('date-time').textContent = `Nous sommes le ${dateString} et il est ${timeString}.`;
}

setInterval(updateDateTime, 1000);
