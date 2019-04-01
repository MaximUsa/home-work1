export function cashBackCalc(normal, regular, maximal) {
    const normalBack = 1 / 100;
    const regularBack = 5 / 100;
    const maxBack = 30 / 100;
    const cashNormal = normal * normalBack;
    const cashRegular = regular * regularBack;
    const cashMax = maximal * maxBack;
    return cashNormal + cashRegular + cashMax;
}
