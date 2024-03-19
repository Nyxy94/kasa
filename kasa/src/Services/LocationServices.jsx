

async function fetchLogementsData() {
    try {
        const response = await fetch('../logements.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const logementsData = await response.json();
        return logementsData;
    } catch (error) {
        console.error('Erreur lors de la récupération des données des logements:', error);
        // Vous pouvez choisir de lancer une nouvelle exception ou de retourner un objet vide ou null
        throw error;
    }
}

export default fetchLogementsData