function CashBackCalc(normal, regular, maximal) {
    const normalBack = 1 / 100;
    const regularBack = 5 / 100;
    const maxBack = 30 / 100;
    const cashNormal = normal * normalBack;
    const cashRegular = regular * regularBack;
    const cashMax = maximal * maxBack;
    return cashNormal + cashRegular + cashMax;
}

const totalBack = CashBackCalc(344, 434, 3443);
console.log(`Cash back amount is: ${totalBack} rubles`);