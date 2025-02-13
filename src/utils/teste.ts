function teste(nums: number[]) {
    let candidate = null;
    let count = 0;

    // Primeira etapa: determinar o candidato
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];  // Obter o valor atual do array
        
        if (count === 0) {
            candidate = num;  // Atualizar o candidato
        }

        if (num === candidate) {
            count++;  // Incrementa o contador se for o mesmo número
        } else {
            count--;  // Decrementa o contador se for diferente
        }
    }

    // Segunda etapa: retornar o candidato (assumido que sempre há um elemento majoritário)
    return candidate;
}
