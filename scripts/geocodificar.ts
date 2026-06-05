import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const INPUT = join(process.cwd(), "cofradias.json");
const OUTPUT = join(process.cwd(), "public", "data", "cofradias_geo.json");
const CACHE_FILE = join(process.cwd(), "scripts", ".geo_cache.json");

interface Hito {
  nombre: string;
  hora: string;
}

interface Cofradia {
  dia: string;
  day_id: string;
  fecha: string;
  cofradia: string;
  nombre_corto: string;
  cofradia_id: string;
  pasos: number;
  hitos: Hito[];
  itinerario: string[];
}

interface GeoCofradia {
  dia: string;
  day_id: string;
  fecha: string;
  cofradia: string;
  nombre_corto: string;
  cofradia_id: string;
  pasos: number;
  hitos: Hito[];
  coordenadas_salida: [number, number] | null;
  ruta: [number, number][];
  color: string;
}

const cache: Record<string, [number, number] | null> = existsSync(CACHE_FILE)
  ? JSON.parse(readFileSync(CACHE_FILE, "utf-8"))
  : {};

function saveCache() {
  writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function geocode(calle: string): Promise<[number, number] | null> {
  const query = `${calle}, Sevilla, España`;
  if (cache[query] !== undefined) {
    if (cache[query] === null) {
      console.log(`  ↪ cache miss: ${calle}`);
    } else {
      console.log(`  ✓ cache hit: ${calle} → ${cache[query]}`);
    }
    return cache[query];
  }

  await sleep(1100);

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&countrycodes=es`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "NazariaApp/1.0 (nazaria.app@gmail.com)" },
    });
    if (!res.ok) {
      console.log(`  ✗ HTTP ${res.status}: ${calle}`);
      cache[query] = null;
      saveCache();
      return null;
    }
    const data = (await res.json()) as { lat: string; lon: string }[];
    if (data.length > 0) {
      const coords: [number, number] = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
      console.log(`  ✓ ${calle} → [${coords[0]}, ${coords[1]}]`);
      cache[query] = coords;
      saveCache();
      return coords;
    }
    console.log(`  ⊘ no results: ${calle}`);
    cache[query] = null;
    saveCache();
    return null;
  } catch (err) {
    console.log(`  ✗ error: ${calle} — ${err}`);
    cache[query] = null;
    saveCache();
    return null;
  }
}

const PALETTE: Record<string, string[]> = {
  "domingo-de-ramos": ["#E91E63", "#F06292", "#AD1457", "#F48FB1", "#EC407A", "#D81B60", "#C2185B", "#880E4F", "#FF80AB"],
  "lunes-santo": ["#9C27B0", "#BA68C8", "#7B1FA2", "#CE93D8", "#AB47BC", "#8E24AA", "#6A1B9A", "#4A148C", "#EA80FC"],
  "martes-santo": ["#3F51B5", "#7986CB", "#303F9F", "#9FA8DA", "#5C6BC0", "#3949AB", "#283593", "#1A237E", "#8C9EFF"],
  "miercoles-santo": ["#2196F3", "#64B5F6", "#1976D2", "#90CAF9", "#42A5F5", "#1E88E5", "#1565C0", "#0D47A1", "#82B1FF"],
  "jueves-santo": ["#00ACC1", "#4DD0E1", "#0097A7", "#80DEEA", "#26C6DA", "#00BCD4", "#00838F", "#006064", "#84FFFF"],
  "madrugada": ["#4CAF50", "#81C784", "#388E3C", "#A5D6A7", "#66BB6A", "#43A047", "#2E7D32", "#1B5E20", "#B9F6CA"],
  "viernes-santo": ["#FF9800", "#FFB74D", "#F57C00", "#FFCC80", "#FFA726", "#FB8C00", "#EF6C00", "#E65100", "#FFD180"],
  "sabado-santo": ["#795548", "#A1887F", "#5D4037", "#BCAAA4", "#8D6E63", "#6D4C41", "#4E342E", "#3E2723", "#D7CCC8"],
  "domingo-de-resurreccion": ["#607D8B", "#90A4AE", "#455A64", "#B0BEC5", "#78909C", "#546E7A", "#37474F", "#263238", "#CFD8DC"],
};

function getDayPaletteId(dia: string): string {
  const map: Record<string, string> = {
    "Domingo de Ramos": "domingo-de-ramos",
    "Lunes Santo": "lunes-santo",
    "Martes Santo": "martes-santo",
    "Miércoles Santo": "miercoles-santo",
    "Jueves Santo": "jueves-santo",
    "Viernes Santo (Madrugada)": "madrugada",
    "Viernes Santo (Tarde)": "viernes-santo",
    "Sábado Santo": "sabado-santo",
    "Domingo de Resurrección": "domingo-de-resurreccion",
  };
  return map[dia] || "domingo-de-ramos";
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  console.log("📖 Leyendo cofradias.json...");
  const data: Cofradia[] = JSON.parse(readFileSync(INPUT, "utf-8"));
  const total = data.length;
  console.log(`📊 ${total} hermandades encontradas\n`);

  const geo: GeoCofradia[] = [];

  for (let i = 0; i < data.length; i++) {
    const c = data[i];
    const paletteId = getDayPaletteId(c.dia);
    const palette = PALETTE[paletteId] || PALETTE["domingo-de-ramos"];
    const dayCofradias = data.filter((x) => x.dia === c.dia);
    const idxInDay = dayCofradias.findIndex((x) => x.cofradia_id === c.cofradia_id);
    const color = palette[idxInDay % palette.length];

    console.log(`\n[${i + 1}/${total}] ${c.nombre_corto} (${c.dia})`);

    let coordenadas_salida: [number, number] | null = null;
    const ruta: [number, number][] = [];

    const calles = c.itinerario;
    if (calles.length > 0) {
      console.log(`  Geocodificando ${calles.length} calles...`);
    }

    for (let j = 0; j < calles.length; j++) {
      const calle = calles[j];
      const coord = await geocode(calle);
      if (coord) {
        ruta.push(coord);
        if (coordenadas_salida === null) {
          coordenadas_salida = coord;
        }
      }
    }

    geo.push({ ...c, coordenadas_salida, ruta, color });
  }

  console.log(`\n💾 Guardando ${geo.length} hermandades en public/data/cofradias_geo.json...`);
  writeFileSync(OUTPUT, JSON.stringify(geo, null, 2));
  console.log("✅ Listo.");
}

main();
