"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ScrollReveal from "./ScrollReveal";

interface ZonaData {
  name: string;
  hex: string;
  coords: [number, number][];
  hermandades: string[];
}

const zonas: ZonaData[] = [
  {
    name: "Macarena",
    hex: "#4CAF50",
    coords: [
      [37.405, -6.000], [37.408, -5.988], [37.404, -5.976], [37.397, -5.972],
      [37.393, -5.975], [37.390, -5.982], [37.388, -5.990], [37.391, -5.996],
      [37.397, -6.000], [37.402, -6.002],
    ],
    hermandades: ["La Macarena", "La Resurrección", "El Carmen", "Los Javieres", "Monte-Sión", "La Amargura", "La Hiniesta", "La Trinidad", "El Gran Poder", "El Buen Fin", "La Soledad de San Lorenzo", "El Dulce Nombre", "Santa Marta", "Los Panaderos", "El Valle", "Sagrada Mortaja", "Los Gitanos", "La Exaltación"],
  },
  {
    name: "Cartuja",
    hex: "#00BCD4",
    coords: [
      [37.420, -6.018], [37.418, -6.005], [37.410, -5.998], [37.402, -5.995],
      [37.398, -6.002], [37.395, -6.012], [37.398, -6.018], [37.408, -6.020],
    ],
    hermandades: ["El Museo", "Las Penas de San Vicente", "Siete Palabras", "Quinta Angustia", "El Calvario", "Montserrat", "La Lanzada", "Santo Entierro", "Vera-Cruz", "El Silencio"],
  },
  {
    name: "Triana",
    hex: "#FF9800",
    coords: [
      [37.395, -6.012], [37.392, -6.002], [37.388, -5.996], [37.380, -5.993],
      [37.372, -5.996], [37.368, -6.005], [37.373, -6.014], [37.382, -6.018],
      [37.390, -6.018],
    ],
    hermandades: ["La Estrella", "San Gonzalo", "Esperanza de Triana", "El Cachorro", "La O", "Las Cigarreras"],
  },
  {
    name: "Nervión",
    hex: "#3F51B5",
    coords: [
      [37.397, -5.972], [37.393, -5.965], [37.387, -5.963], [37.380, -5.968],
      [37.378, -5.976], [37.380, -5.982], [37.385, -5.978], [37.390, -5.975],
    ],
    hermandades: ["La Sed", "El Cerro del Águila", "Polígono San Pablo", "San Roque", "La Redención", "Los Negritos"],
  },
  {
    name: "El Porvenir",
    hex: "#E91E63",
    coords: [
      [37.385, -5.992], [37.382, -5.985], [37.376, -5.980], [37.370, -5.982],
      [37.365, -5.990], [37.363, -5.998], [37.368, -6.002], [37.375, -6.000],
      [37.380, -5.996],
    ],
    hermandades: ["La Paz", "Santa Genoveva", "Los Estudiantes", "Santa Cruz", "La Candelaria", "San Bernardo", "San Isidoro", "El Baratillo", "Las Aguas", "La Carretería", "Jesús Despojado"],
  },
  {
    name: "Centro",
    hex: "#9E9E9E",
    coords: [
      [37.391, -5.996], [37.389, -5.989], [37.386, -5.985], [37.382, -5.988],
      [37.383, -5.995], [37.385, -5.998], [37.388, -5.998],
    ],
    hermandades: ["El Amor", "La Campana", "Pasión"],
  },
];

export default function Zonas() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [37.389, -5.992],
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: !("ontouchstart" in window),
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
    }).addTo(map);

    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    map.eachLayer((layer) => {
      if (layer instanceof L.Polygon) {
        map.removeLayer(layer);
      }
    });

    zonas.forEach((zona) => {
      const isHovered = hovered === zona.name;
      const isDimmed = hovered !== null && hovered !== zona.name;

      const polygon = L.polygon(zona.coords, {
        color: zona.hex,
        weight: isHovered ? 3 : 1.5,
        opacity: isDimmed ? 0.3 : 1,
        fillColor: zona.hex,
        fillOpacity: isHovered ? 0.35 : 0.15,
        dashArray: isHovered ? undefined : "4 2",
      }).addTo(map);

      if (!isDimmed) {
        polygon.bindTooltip(zona.name, {
          permanent: false,
          direction: "center",
          className: "zone-tooltip",
          offset: [0, 0],
        });
      }

      polygon.on("mouseover", () => setHovered(zona.name));
      polygon.on("mouseout", () => setHovered(null));
    });
  }, [hovered]);

  const activeZona = zonas.find((z) => z.name === hovered);

  return (
    <section id="zonas" className="mx-auto max-w-7xl px-8 py-32 md:px-16">
      <ScrollReveal className="text-center">
        <span className="inline-block rounded-full bg-accent-gold/20 px-6 py-2.5 text-base font-semibold tracking-wide text-accent-gold">
          ZONAS
        </span>
        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Sevilla, zona a zona</h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl text-white/60 md:text-2xl">
          Cada barrio, sus hermandades. Explora el mapa.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          {/* Leaflet Map */}
          <div className="relative w-full max-w-[760px] overflow-hidden rounded-2xl border-2 border-border/30 shadow-2xl">
            <div
              ref={mapRef}
              className="h-[560px] w-full"
              style={{ background: "#f5f5f5" }}
            />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {zonas.map((zona) => (
                <button
                  key={zona.name}
                  onClick={() => setHovered(hovered === zona.name ? null : zona.name)}
                  onMouseEnter={() => setHovered(zona.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="rounded-full px-3 py-1 text-[11px] font-semibold transition-all"
                  style={{
                    backgroundColor: hovered === zona.name ? zona.hex : zona.hex + "30",
                    color: hovered === zona.name ? "#fff" : zona.hex,
                    border: `1px solid ${zona.hex}50`,
                  }}
                >
                  {zona.name}
                </button>
              ))}
            </div>
          </div>

          {/* Info card */}
          <div className="w-full max-w-lg">
            {activeZona ? (
              <div
                className="animate-[fade-in_0.3s_ease-out] rounded-2xl p-10"
                style={{ background: `${activeZona.hex}12`, border: `1.5px solid ${activeZona.hex}40` }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl"
                    style={{ backgroundColor: activeZona.hex }}
                  >
                    <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">{activeZona.name}</h3>
                </div>
                <p className="mb-5 text-lg text-white/50">Hermandades de la zona:</p>
                <ul className="space-y-3">
                  {activeZona.hermandades.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-lg text-white/80">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: activeZona.hex }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="rounded-2xl bg-surface p-10 text-center">
                <span className="material-symbols-outlined mb-5 text-6xl text-white/15">touch_app</span>
                <p className="text-lg text-white/35">
                  Pasa el cursor sobre una zona del mapa para ver sus hermandades
                </p>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>

      <style jsx global>{`
        .zone-tooltip {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          font-family: 'Roboto', sans-serif !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          color: #1C1B1F !important;
          text-shadow: 0 1px 2px rgba(255,255,255,0.8);
          padding: 0 !important;
        }
        .zone-tooltip::before {
          display: none !important;
        }
        .leaflet-container {
          background: #f5f5f5 !important;
        }
        .leaflet-control-zoom {
          display: none;
        }
      `}</style>
    </section>
  );
}
