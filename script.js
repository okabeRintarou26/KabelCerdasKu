document.getElementById("cableForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const power = parseFloat(document.getElementById("power").value);
    const length = parseFloat(document.getElementById("length").value);
    const voltage = parseFloat(document.getElementById("voltage").value);

    const current = power / voltage;
    let recommendation = "";

    if (current <= 13 && length <= 10) {
        recommendation = "Gunakan kabel 2.5 mm² (NYY)";
    } else if (current > 13 && current <= 20 && length <= 20) {
        recommendation = "Gunakan kabel 4 mm² (NYY)";
    } else if (current > 20) {
        recommendation = "Gunakan kabel 6 mm² (NYY)";
    } else {
        recommendation = "Parameter tidak sesuai standar.";
    }

    document.getElementById("result").textContent = `Rekomendasi: ${recommendation}`;
});
