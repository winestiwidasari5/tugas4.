let pendapatan = 400000; // jumlah pendapatan dapat diubah sesuai dengan kebutuhan

if (pendapatan <= 200000) {
    let uangJasa = 10000;
    let komisi = pendapatan * 0.1;
    let totalKomisi = uangJasa + komisi;
    console.log("Total komisi yang didapatkan: Rp." + totalKomisi);
} else if (pendapatan > 200000 && pendapatan <= 500000) {
    let uangJasa = 20000;
    let komisi = pendapatan * 0.15;
    let totalKomisi = uangJasa + komisi;
    console.log("Total komisi yang didapatkan: Rp." + totalKomisi);
} else if (pendapatan > 500000) {
    let uangJasa = 30000;
    let komisi = pendapatan * 0.2;
    let totalKomisi = uangJasa + komisi;
    console.log("Total komisi yang didapatkan: Rp." + totalKomisi);
}