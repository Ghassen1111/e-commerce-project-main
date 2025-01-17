const ctx = document.getElementById("barchart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["tv", "laptop", "iphone", "playstation", "kit", "charger"],
    datasets: [
      {
        label: "best seller",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
