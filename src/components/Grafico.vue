<script>
import { Radar } from "vue-chartjs";

export default {
  props: ["vida","experiencia","ataque", "defensa", "ataqueEsp", "defensaEsp", "velocidad"],
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
          label: "Estadísticas Pokemon",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [this.vida, this.experiencia, this.ataque, this.defensa, this.ataqueEsp, this.defensaEsp, this.velocidad],
        },
      ],
    });
    // console.log(this.velocidad);
  },
};
</script>
