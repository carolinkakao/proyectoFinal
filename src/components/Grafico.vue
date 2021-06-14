<script>
import { Radar } from "vue-chartjs";

export default {
  props: ["velocidad"],
  extends: Radar,
  mounted() {
    this.renderChart({
      labels: [
        "Puntos de Vida",
        "Experiencia",
        "Ataque",
        "Defensa",
        "Ataque Especial",
        "Defensa Especial",
        "Velocidad",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [65, 59, 90, 81, 56, 55, this.velocidad],
        },
        {
          label: "My Second dataset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [28, 48, 40, 19, 96, 27, this.velocidad],
        },
      ],
    });
    console.log(this.velocidad);
  },
};
</script>
