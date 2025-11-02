import { grafik } from "./components/grafik.js";
import { kelembapan } from "./components/kelembapan.js";
import { suhu } from "./components/suhu.js";
import { suhuBarang } from "./components/suhuBarang.js";
export const app = (data = {}) => {
  return ` 

    <!-- Halaman Dashboard -->
    <section id="dashboard" class="flex flex-col gap-6">

      <!-- 3 Card Atas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       ${suhu(data.suhu)}

        <!-- Kelembapan -->
        ${kelembapan(data.kelembapan)}

        <!-- Suhu Barang Dekat -->
        ${suhuBarang(data.realSuhu)}
      </div>

     ${grafik()}
    </section>`;
};
