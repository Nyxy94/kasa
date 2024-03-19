

export async function logementsData() {
    try {
        const response = await fetch('/Data/logements.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const logementsData = await response.json();
        return logementsData;
    } catch (error) {
        console.error('Erreur lors de la récupération des données des logements:', error);
        throw error;
    }
}


export async function getLogementById(id) {
    try {
        const response = await fetch('/Data/logements.json');
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const logementsData = await response.json();
        console.log(id)
        const logement = logementsData.find((element) => element.id === id);
        return logement
    } catch (error) {
        console.error('Erreur lors de la récupération des données des logements:', error);
        throw error;
    }
}



