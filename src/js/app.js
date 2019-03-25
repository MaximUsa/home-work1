function cashBackCalc(normal, regular, maximal) {
    let normalBack = 1 / 100;
    let regularBack = 5 / 100;
    let maxBack = 30 / 100;
    let cashNormal = normal * normalBack;
    let cashRegular = regular * regularBack;
    let cashMax = maximal * maxBack;
    return cashNormal + cashRegular + cashMax;
}

const totalBack = cashBackCalc(344, 434, 3443);
console.log(`Cash back amount is: ${totalBack} rubles`);